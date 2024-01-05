export type WithCallbackHook<T, V> = T & {
  callback: () => V
}
