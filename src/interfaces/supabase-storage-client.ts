import type { StorageClient } from '@supabase/storage-js'
import type { StorageFileApiInterface } from './storage-file-api'

export interface SupabaseStorageClientInterface extends Omit<StorageClient, 'headers' | 'url' | 'method' | 'from'> {
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(id: string): StorageFileApiInterface
}
