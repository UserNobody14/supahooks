import type { PostgrestClient } from '@supabase/postgrest-js'
import type { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types'
import type { PostgrestClientInterface } from '../postgrest-client'
import type { PostgrestFilterBuilderIPlus } from './filter'
import type { PostgrestQueryBuilderIPlus } from './query'

/**
 * PostgREST client.
 *
 * @typeParam Database - Types for the schema from the [type
 * generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
 *
 * @typeParam SchemaName - Postgres schema to switch to. Must be a string
 * literal, the same one passed to the constructor. If the schema is not
 * `"public"`, this must be supplied manually.
 */
export interface PostgrestClientIPlus<
  Database = any,
  SchemaName extends string & keyof Database = 'public' extends keyof Database
    ? 'public'
    : string & keyof Database,
  Schema extends GenericSchema = Database[SchemaName] extends GenericSchema
    ? Database[SchemaName]
    : any,
> extends PostgrestClientInterface<Database, SchemaName, Schema> {
  from<
  TableName extends string & keyof Schema['Tables'],
  Table extends Schema['Tables'][TableName],
>(relation: TableName): PostgrestQueryBuilderIPlus<Schema, Table>
  from<ViewName extends string & keyof Schema['Views'], View extends Schema['Views'][ViewName]>(
    relation: ViewName
  ): PostgrestQueryBuilderIPlus<Schema, View>
  from(relation: string): PostgrestQueryBuilderIPlus<Schema, any>
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(relation: string): PostgrestQueryBuilderIPlus<Schema, any>

  /**
   * Perform a query on a schema distinct from the default schema supplied via
   * the `options.db.schema` constructor parameter.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The name of the schema to query
   */
  schema<DynamicSchema extends string & keyof Database>(
    schema: DynamicSchema,
  ): PostgrestClientIPlus<
  Database,
  DynamicSchema,
  Database[DynamicSchema] extends GenericSchema ? Database[DynamicSchema] : any
>

  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc<
  FunctionName extends string & keyof Schema['Functions'],
  Function_ extends Schema['Functions'][FunctionName],
>(
    fn: FunctionName,
    args: Function_['Args'],
    options?: {
      head?: boolean
      count?: 'exact' | 'planned' | 'estimated'
    },
  ): PostgrestFilterBuilderIPlus<
  Schema,
  Function_['Returns'] extends any[]
    ? Function_['Returns'][number] extends Record<string, unknown>
      ? Function_['Returns'][number]
      : never
    : never,
  Function_['Returns']
>
}
