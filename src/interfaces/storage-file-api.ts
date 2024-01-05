import type { StorageError } from '@supabase/storage-js'
import type StorageFileApi from '@supabase/storage-js/dist/module/packages/StorageFileApi'

type StorageFileApiIPlusMethod = Promise<
  | {
    data: { path: string }
    error: null
  }
  | {
    data: null
    error: StorageError
  }
>

export interface StorageFileApiInterface extends
  Omit<StorageFileApi, 'headers' | 'url' | 'method' | 'fetch' | 'uploadOrUpdate'> {
  // upload: StorageFileApi['upload']
  upload: (...a: Parameters<StorageFileApi['upload']>) => StorageFileApiIPlusMethod
}
