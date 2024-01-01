import type { PostgrestFilterBuilder } from '@supabase/postgrest-js'
import type { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types'

export interface PostgrestFilterBuilderInterface<
Schema extends GenericSchema,
Row extends Record<string, unknown>,
Result,
RelationName = unknown,
Relationships = unknown,
> extends PostgrestFilterBuilder<Schema, Row, Result, RelationName, Relationships> { }
