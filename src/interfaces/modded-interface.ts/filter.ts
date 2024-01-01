import type { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types'
import type { PostgrestFilterBuilderInterface } from '../postgrest-filter-builder'
import type { WrapHookResponse } from '../WithUse'

export interface PostgrestFilterBuilderIPlus<
Schema extends GenericSchema,
Row extends Record<string, unknown>,
Result,
RelationName = unknown,
Relationships = unknown,
> extends PostgrestFilterBuilderInterface<Schema, Row, Result, RelationName, Relationships> {
  use: () => WrapHookResponse<Result>
}
