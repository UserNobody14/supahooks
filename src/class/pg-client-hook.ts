// import type { PostgrestQueryBuilder } from '@supabase/postgrest-js'
// import { PostgrestFilterBuilder } from '@supabase/postgrest-js'
// import type { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types'
// import { SupabaseClient } from '@supabase/supabase-js'
// import type { PostgrestClientInterface } from '../interfaces/postgrest-client'
// import { PostgrestQueryBuilderInterface } from '../interfaces/postgrest-query-builder'
// import type { PgHookState } from '../types/pass-state'
// import type { SupabaseClientInterface } from '../interfaces/supabase-client'
// import type { PostgrestFilterBuilderInterface } from '../interfaces/postgrest-filter-builder'
// import { PostgrestQueryHook } from './pg-query-hook'

// /**
//  * @class PostgrestClientHook
//  * @description returns an identical interface to a postgrest client wherein each
//  * resulting method has a 'use' method that runs a react hook and returns the state of the hook.
//  * the methods use the "builder" pattern to allow for chaining, with 'use' being the last method
//  * @returns {PostgrestClientInterface}
//  */

// export class PostgrestClientHook<
//     Database = any,
//     SchemaName extends string & keyof Database = 'public' extends keyof Database
//       ? 'public'
//       : string & keyof Database,
//     Schema extends GenericSchema = Database[SchemaName] extends GenericSchema
//       ? Database[SchemaName]
//       : any,
// > implements PostgrestClientInterface<Database, SchemaName, Schema> {
//   get url(): string {
//     throw new Error('Method not implemented.')
//   }

//   get headers(): {
//     [key: string]: string
//   } {
//     throw new Error('Method not implemented.')
//   }

//   private state: PgHookState

//   constructor(state: PgHookState) {
//     this.state = state
//   }

//   from<TableName extends string & keyof Schema['Tables'], Table extends Schema['Tables'][TableName]>(relation: TableName): PostgrestQueryBuilder<Schema, Table, TableName, Table extends { Relationships: infer R } ? R : unknown>
//   from<ViewName extends string & keyof Schema['Views'], View extends Schema['Views'][ViewName]>(relation: ViewName): PostgrestQueryBuilder<Schema, View, ViewName, View extends { Relationships: infer R } ? R : unknown>
//   from(relation: string): PostgrestQueryBuilder<Schema, any, any, unknown>
//   from(relation: unknown) {
//     const stfn = this.state.fn as any
//     const res = (a: any) => stfn(a).from(relation)
//     return new PostgrestQueryHook({
//       fn: res,
//     }) as any
//   }

//   schema<DynamicSchema extends string & keyof Database>(schema: DynamicSchema): PostgrestClientInterface<Database, DynamicSchema, Database[DynamicSchema] extends GenericSchema ? Database[DynamicSchema] : any> {
//     const stfn = this.state.fn as any
//     const res = (a: any) => stfn(a).schema(schema)
//     return new PostgrestClientHook({
//       fn: res,
//     }) as any
//   }

//   /**
//    * Perform a function call.
//    *
//    * @param fn - The function name to call
//    * @param args - The arguments to pass to the function call
//    * @param options - Named parameters
//    * @param options.head - When set to `true`, `data` will not be returned.
//    * Useful if you only need the count.
//    * @param options.count - Count algorithm to use to count rows returned by the
//    * function. Only applicable for [set-returning
//    * functions](https://www.postgresql.org/docs/current/functions-srf.html).
//    *
//    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
//    * hood.
//    *
//    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
//    * statistics under the hood.
//    *
//    * `"estimated"`: Uses exact count for low numbers and planned count for high
//    * numbers.
//    */
//   rpc<
//     FunctionName extends string & keyof Schema['Functions'],
//     Function_ extends Schema['Functions'][FunctionName],
//   >(
//     fn: FunctionName,
//     args: Function_['Args'] = {},
//     {
//       head = false,
//       count,
//     }: {
//       head?: boolean
//       count?: 'exact' | 'planned' | 'estimated'
//     } = {},
//   ): PostgrestFilterBuilderInterface<
//     Schema,
//     Function_['Returns'] extends any[]
//       ? Function_['Returns'][number] extends Record<string, unknown>
//         ? Function_['Returns'][number]
//         : never
//       : never,
//     Function_['Returns']
//   > {
//     const stfn = this.state.fn as any
//     const res = (a: any) => stfn(a).rpc(fn, args, { head, count })
//     return new PostgrestQueryHook({
//       fn: res,
//     }) as any
//   }
// }
