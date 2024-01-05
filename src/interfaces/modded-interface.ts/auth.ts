import type { WithCallback } from '../WithCallback'
import type { SupabaseAuthClientInterface } from '../auth-client'

export interface SupabaseAuthClientIPlus extends Omit<
WithCallback<SupabaseAuthClientInterface>,
'instanceID' |
'storageKey' |
'flowType' |
'autoRefreshToken'
> {}
