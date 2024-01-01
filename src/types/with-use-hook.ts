export type WithUseHook<T, V> = T & {
  use: () => V
}
