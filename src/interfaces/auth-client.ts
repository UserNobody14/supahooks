import type { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'

export interface SupabaseAuthClientInterface extends
  Omit<
SupabaseAuthClient,
'instanceID' |
'storageKey' |
'flowType' |
'autoRefreshToken'
> {}
