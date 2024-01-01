// import type { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types'
// import type { PostgrestClient } from '@supabase/postgrest-js'
// import type { GenericSchema } from '@supabase/postgrest-js/dist/module/types'
// import type { RealtimeChannel, RealtimeClient } from '@supabase/supabase-js'
// import type { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
// import type { PostgrestQueryBuilderInterface } from '../interfaces/postgrest-query-builder'
// import type { SupabaseClientInterface } from '../interfaces/supabase-client'

// /**
//  * @class Supahook
//  * @description Takes in a supabase client and returns an identical interface wherein each
//  * resulting method has a 'use' method that runs a react hook and returns the state of the hook.
//  * the methods use the "builder" pattern to allow for chaining, with 'use' being the last method
//  * @param {SupabaseClientInterface} supabaseClient
//  * @returns {SupabaseClientInterface}
//  */
// export class Supahook<
// Database = any,
// SchemaName extends string & keyof Database = 'public' extends keyof Database
//   ? 'public'
//   : string & keyof Database,
// Schema extends GenericSchema = Database[SchemaName] extends GenericSchema
//   ? Database[SchemaName]
//   : any,
// > implements SupabaseClientInterface<Database, SchemaName, Schema> {
//   constructor(private supabaseClient: SupabaseClientInterface<Database, SchemaName, Schema>) { }
//   protected supabaseUrl: string
//   protected supabaseKey: string
//   auth: SupabaseAuthClient
//   realtime: RealtimeClient
//   protected realtimeUrl: string
//   protected authUrl: string
//   protected storageUrl: string
//   protected functionsUrl: string
//   protected rest: PostgrestClient<Database, SchemaName, Database[SchemaName] extends GenericSchema ? Database[SchemaName] : any>
//   protected storageKey: string
//   protected fetch?: ((input: string | URL | Request, init?: RequestInit | undefined) => Promise<Response>) | undefined
//   protected changedAccessToken?: string | undefined
//   protected headers: { [key: string]: string }
//   get functions() {
//     throw new Error('Method not implemented.')
//   }

//   get storage() {
//     throw new Error('Method not implemented.')
//   }

//   // public from = (schemaName: string) => {
//   //     this.supabaseClient.from(schemaName)
//   //     return this
//   // }

//   from<
//     TableName extends string & keyof Schema['Tables'],
//     Table extends Schema['Tables'][TableName],
//   >(relation: TableName): PostgrestQueryBuilderInterface<Schema, Table>
//   from<ViewName extends string & keyof Schema['Views'], View extends Schema['Views'][ViewName]>(
//     relation: ViewName
//   ): PostgrestQueryBuilderInterface<Schema, View>
//   from(relation: string): PostgrestQueryBuilderInterface<Schema, any>
//   /**
//    * Perform a query on a table or a view.
//    *
//    * @param relation - The table or view name to query
//    */
//   from(relation: string): PostgrestQueryBuilderInterface<Schema, any> {
//     return this.rest.from(relation)
//   }

//   /**
//    * Perform a query on a schema distinct from the default schema supplied via
//    * the `options.db.schema` constructor parameter.
//    *
//    * The schema needs to be on the list of exposed schemas inside Supabase.
//    *
//    * @param schema - The name of the schema to query
//    */
//   schema<DynamicSchema extends string & keyof Database>(
//     schema: DynamicSchema,
//   ): PostgrestClient<
//     Database,
//     DynamicSchema,
//     Database[DynamicSchema] extends GenericSchema ? Database[DynamicSchema] : any
//   > {
//     return this.rest.schema<DynamicSchema>(schema)
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
//     options?: {
//       head?: boolean
//       count?: 'exact' | 'planned' | 'estimated'
//     },
//   ): PostgrestFilterBuilder<
//     Schema,
//     Function_['Returns'] extends any[]
//       ? Function_['Returns'][number] extends Record<string, unknown>
//         ? Function_['Returns'][number]
//         : never
//       : never,
//     Function_['Returns']
//   > {
//     return this.rest.rpc(fn, args, options)
//   }

//   /**
//    * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
//    *
//    * @param {string} name - The name of the Realtime channel.
//    * @param {object} opts - The options to pass to the Realtime channel.
//    *
//    */
//   channel(name: string, opts: RealtimeChannelOptions = { config: {} }): RealtimeChannel {
//     return this.realtime.channel(name, opts)
//   }

//   /**
//    * Returns all Realtime channels.
//    */
//   getChannels(): RealtimeChannel[] {
//     return this.realtime.getChannels()
//   }

//   /**
//    * Unsubscribes and removes Realtime channel from Realtime client.
//    *
//    * @param {RealtimeChannel} channel - The name of the Realtime channel.
//    *
//    */
//   removeChannel(channel: RealtimeChannel): Promise<'ok' | 'timed out' | 'error'> {
//     return this.realtime.removeChannel(channel)
//   }

//   /**
//    * Unsubscribes and removes all Realtime channels from Realtime client.
//    */
//   removeAllChannels(): Promise<('ok' | 'timed out' | 'error')[]> {
//     return this.realtime.removeAllChannels()
//   }
// }
