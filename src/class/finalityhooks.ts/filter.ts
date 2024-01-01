// import type { PostgrestSingleResponse } from '@supabase/postgrest-js'
// import { PostgrestFilterBuilder } from '@supabase/postgrest-js'
// import type { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types'

// export interface FilterBuilder<T = object> {
//   add: <K extends string, V>(key: K, value: V) => FilterBuilder<T & Record<K, V>>
//   value: () => T
// }

// export class PgFilterBuilderHook<
// Schema extends GenericSchema,
// Row extends Record<string, unknown>,
// Result,
// RelationName = unknown,
// Relationships = unknown,
// > extends PostgrestFilterBuilder<Schema, Row, Result, RelationName, Relationships> {
//   override then<TResult1 = PostgrestSingleResponse<Result>, TResult2 = never>(_onfulfilled?: any): PromiseLike<TResult1 | TResult2> {
//     throw new Error('Method not implemented.')
//   }

//   use = (): Result => {

//   }
// }
