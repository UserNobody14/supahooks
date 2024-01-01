import type { PostgrestQueryBuilder } from '@supabase/postgrest-js'
import type { GenericSchema, GenericTable, GenericView } from '@supabase/supabase-js/dist/module/lib/types'

export interface PostgrestQueryBuilderInterface<
  Schema extends GenericSchema,
  Relation extends GenericTable | GenericView,
  RelationName = unknown,
  Relationships = Relation extends { Relationships: infer R } ? R : unknown,
> extends PostgrestQueryBuilder<Schema, Relation, RelationName, Relationships> { }
