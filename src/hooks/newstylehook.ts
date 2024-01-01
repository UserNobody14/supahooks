import { useEffect, useState } from 'react'

type UseHook<T> = () => T

type WithUse<T> = {
  [P in keyof T]: T[P] extends (...args: infer Args) => infer R
    ? (...args: Args) => WithUse<R> & { use: () => UseHook<R> }
    : T[P];
}

// Wrapper class with Proxy
export class Wrapper<T extends object> {
  proxy: WithUse<T>

  pathway: (string | symbol)[] = []
  args: any[] = []

  constructor(target: T, opts?: { pathway?: (string | symbol)[], args?: any[] }) {
    if (opts?.pathway)
      this.pathway = opts.pathway
    if (opts?.args)
      this.args = opts.args
    this.proxy = new Proxy(target, {
      get: (target, prop, _receiver) => {
        if (prop === '$$typeof')
          return (target as any)[prop]

        if (prop === 'prototype')
          return (target as any)[prop]

        if (prop === 'use') {
          return () => {
            const [result, setResult] = useState<any>(null)
            const [err, setErr] = useState<any>(null)
            const [loading, setLoading] = useState<boolean>(false)

            useEffect(() => {
              const fetchItems = async () => {
                setLoading(true)
                try {
                  const { data, error } = await (target as any)
                  if (error)
                    setErr(error)
                  setResult(data)
                }
                catch (error) {
                  // console.log('error', error);
                  setErr(error)
                }
                finally {
                  setLoading(false)
                }
              }
              fetchItems()
            }, this.args) // Dependency array can be adjusted as needed

            return { result, error: err, loading }
          }
        }
        return (...args: any[]) => {
          const result = (target as any)[prop].apply(target, args)
          return new Wrapper(result, {
            pathway: [...this.pathway, prop],
            args: [...this.args, ...args],
          }).proxy
        }
      },
    }) as WithUse<T>
  }
}
