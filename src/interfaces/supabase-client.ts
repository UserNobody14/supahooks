import type { SupabaseClient } from '@supabase/supabase-js'
import type { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types'

export interface SupabaseClientInterface<
Database = any,
SchemaName extends string & keyof Database = 'public' extends keyof Database
  ? 'public'
  : string & keyof Database,
Schema extends GenericSchema = Database[SchemaName] extends GenericSchema
  ? Database[SchemaName]
  : any,
> extends SupabaseClient<Database, SchemaName, Schema> { }
