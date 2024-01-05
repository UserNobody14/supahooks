import type { WrapHookResponse, WrapResult } from './WithUse'

export type WrapCallbackResponse<U> = [
  () => Promise<WrapResult<U>>,
  WrapHookResponse<U>,
]
export type CallbackHook<T> = () => T extends PromiseLike<infer U> ? WrapCallbackResponse<U> : T
// Schema['Tables'][TableName]
// type CallbackEnhancedMethod2<
//   T,
//   P extends keyof T,
//   Schema extends GenericSchema,
//   TableName,
// > = P extends 'from' ? T[P] extends (arg: infer AA extends keyof Schema['Tables']) => infer R ? (arg: AA) => WithCallback<R, Schema, AA> & {
//   callback: CallbackHook<R>
// } : never : CallbackEnhancedMethod<T, P, Schema, TableName>

// Schema['Tables'][TableName]
type NoActions = 'then' | 'catch' | 'finally' | 'toString' | 'valueOf' | 'toLocaleString' | 'toJSON'
type CallbackEnhancedMethod2<
  T,
  P extends keyof T,
> = P extends NoActions ? T[P] : CallbackEnhancedMethod<T, P>
export type CallbackEnhancedMethod<
  T,
  P extends keyof T,
> = T[P] extends (...args: infer Args) => infer R ? ((...args: Args) => WithCallback<R> & {
  callback: CallbackHook<R>
}) : never// T[P]
export type WithCallback<T> = {
  [P in keyof T]: CallbackEnhancedMethod2<T, P>;
}
