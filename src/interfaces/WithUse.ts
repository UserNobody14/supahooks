import type { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types'

export type WrapResult<T> = T extends { data: infer U } ? U : T

export interface WrapHookResponse<U> {
  result: WrapResult<U>
  error: any
  loading: boolean
}
type UseHook<T> = () => T extends PromiseLike<infer U> ? WrapHookResponse<U> : never
// Schema['Tables'][TableName]
type UseEnhancedMethod2<
  T,
  P extends keyof T,
  Schema extends GenericSchema,
  TableName,
> = P extends 'from' ? T[P] extends (arg: infer AA extends keyof Schema['Tables']) => infer R ? (arg: AA) => WithUse<R, Schema, AA> & {
  use: UseHook<R>
} : never : UseEnhancedMethod<T, P, Schema, TableName>
type UseEnhancedMethod<
  T,
  P extends keyof T,
  Schema extends GenericSchema,
  F,
> = T[P] extends (...args: infer Args) => infer R ? (...args: Args) => WithUse<R, Schema, F> & {
  use: UseHook<R>
} : T[P]
export type WithUse<T, Schema extends GenericSchema, TableName> = {
  [P in keyof T]: UseEnhancedMethod2<T, P, Schema, TableName>;
}
