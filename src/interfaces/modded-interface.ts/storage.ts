import type { StorageError } from '@supabase/storage-js'
import type { CallbackHook, WithCallback } from '../WithCallback'
import type { StorageFileApiInterface } from '../storage-file-api'
import type { SupabaseStorageClientInterface } from '../supabase-storage-client'

export interface StorageClientIPlus extends WithCallback<SupabaseStorageClientInterface> {
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  // from(id: string): StorageFileApiIPlus
}

// type StorageFileApiIPlusMethod = CallbackEnhancedMethod<StorageFileApiInterface, 'upload'>;
type StorageFileApiIPlusMethod = WithCallback<Promise<
  | {
    data: { path: string }
    error: null
  }
  | {
    data: null
    error: StorageError
  }
>>
& {
  callback: CallbackHook<
Promise<
  | {
    data: { path: string }
    error: null
  }
  | {
    data: null
    error: StorageError
  }
  >
>
}
// type StorageFileApiIPlusMethod = Promise<
//   | {
//     data: { path: string }
//     error: null
//   }
//   | {
//     data: null
//     error: StorageError
//   }
// >
// type Vp = Parameters<StorageFileApiInterface['upload']>
export interface StorageFileApiIPlus extends
  WithCallback<StorageFileApiInterface> {
  // upload: (...a: Vp) => StorageFileApiIPlusMethod
  upload: (...a: Parameters<StorageFileApiInterface['upload']>) => StorageFileApiIPlusMethod

}
