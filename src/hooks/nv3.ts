import type { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types'
import { useEffect, useState } from 'react'
import type { SupabaseClientIPlus } from '../interfaces/modded-interface.ts/fullhookinterface'
import type { WithUse } from '../interfaces/WithUse'

// Wrapper class with Proxy
export class Wrapper<T extends object, Database, SchemaName extends string & keyof Database = 'public' extends keyof Database
  ? 'public'
  : string & keyof Database, Schema extends GenericSchema = Database[SchemaName] extends GenericSchema
    ? Database[SchemaName]
    : any> {
  proxy: SupabaseClientIPlus<Database, SchemaName, Schema>

  pathway: (string | symbol)[] = []
  args: any[] = []

  constructor(
    target: T,
    opts?: { pathway?: (string | symbol)[], args?: any[] },
  ) {
    if (opts?.pathway)
      this.pathway = opts.pathway
    if (opts?.args)
      this.args = opts.args
    this.proxy = new Proxy(target, {
      get: (target, prop, _receiver) => {
        if (prop === '$$typeof' || prop === 'prototype')
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
                  const rs = await (target as any)
                  //   const data = rs?.data;
                  const error = rs?.error
                  if (error)
                    setErr(error)
                  setResult(rs)
                }
                catch (error) {
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
    }) as SupabaseClientIPlus<Database>
  }
}
