import type { SupabaseClientInterface } from '../interfaces/supabase-client'

export interface PgHookState<T = SupabaseClientInterface, G = SupabaseClientInterface> {
  fn: (s: T) => G
}
