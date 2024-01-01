// import { PostgrestFilterBuilder } from '@supabase/postgrest-js'
// import type { PostgrestQueryBuilder } from '@supabase/postgrest-js'
// import type { GenericSchema, GenericTable, GenericView } from '@supabase/supabase-js/dist/module/lib/types'
// import type { GetResult } from '@supabase/postgrest-js/dist/module/select-query-parser'
// import { PostgrestClientInterface } from '../interfaces/postgrest-client'
// import type { PostgrestQueryBuilderInterface } from '../interfaces/postgrest-query-builder'
// import type { PgHookState } from '../types/pass-state'
// import type { PostgrestFilterBuilderInterface } from '../interfaces/postgrest-filter-builder'

// /**
//  * @class PostgrestQueryHook
//  * @description returns an identical interface to a postgrest query builder wherein each
//  * resulting method has a 'use' method that runs a react hook and returns the state of the hook.
//  * the methods use the "builder" pattern to allow for chaining, with 'use' being the last method
//  * @returns {PostgrestClientInterface}
//  */

// export class PostgrestQueryHook<
//   Schema extends GenericSchema,
//   Relation extends GenericTable | GenericView,
//   RelationName = unknown,
//   Relationships = Relation extends { Relationships: infer R } ? R : unknown,
// > implements PostgrestQueryBuilderInterface<Schema, Relation, RelationName, Relationships> {
//   private state: PgHookState

//   constructor(state: PgHookState) {
//     this.state = state
//   }

//   get url(): URL {
//     throw new Error('Method not implemented.')
//   }

//   get headers(): {
//     [key: string]: string
//   } {
//     throw new Error('Method not implemented.')
//   }

//   select<Query extends string = '*', ResultOne = GetResult<Schema, Relation['Row'], RelationName, Relationships, Query>>(columns?: Query | undefined, { head, count }?: { head?: boolean | undefined, count?: 'exact' | 'planned' | 'estimated' | undefined } | undefined): PostgrestFilterBuilder<Schema, Relation['Row'], ResultOne[], RelationName, Relationships> {
//     const stfn = this.state.fn as any
//     const res = (a: any) => stfn(a).select(columns, { head, count })
//     return new PostgrestFilterBuilder({
//       fn: res,
//     }) as any
//   }

//   // insert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(
//   //   values: Row,
//   //   options?: {
//   //     count?: 'exact' | 'planned' | 'estimated'
//   //   }
//   // ): PostgrestFilterBuilderInterface<Schema, Relation['Row'], null, RelationName, Relationships>
//   // insert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(
//   //   values: Row[],
//   //   options?: {
//   //     count?: 'exact' | 'planned' | 'estimated'
//   //     defaultToNull?: boolean
//   //   }
//   // ): PostgrestFilterBuilderInterface<Schema, Relation['Row'], null, RelationName, Relationships>

//   // insert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(
//   //   values: Row | Row[],
//   //   {
//   //     count,
//   //     defaultToNull = true,
//   //   }: {
//   //     count?: 'exact' | 'planned' | 'estimated'
//   //     defaultToNull?: boolean
//   //   } = {}
//   // ) {
//   //   throw new Error('Method not implemented.')
//   // }

//   insert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(values: Row, options?: { count?: 'exact' | 'planned' | 'estimated' | undefined } | undefined): PostgrestFilterBuilder<Schema, Relation['Row'], null, RelationName, Relationships>
//   insert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(values: Row[], options?: { count?: 'exact' | 'planned' | 'estimated' | undefined, defaultToNull?: boolean | undefined } | undefined): PostgrestFilterBuilder<Schema, Relation['Row'], null, RelationName, Relationships>
//   insert<R>(_values: R | R[], _options?: unknown): PostgrestFilterBuilderInterface<Schema, Relation['Row'], null, RelationName, Relationships> {
//     throw new Error('Method not implemented.')
//   }

//   upsert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(values: Row, options?: { count?: 'exact' | 'planned' | 'estimated' | undefined } | undefined): PostgrestFilterBuilder<Schema, Relation['Row'], null, RelationName, Relationships>
//   upsert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(values: Row[], options?: { count?: 'exact' | 'planned' | 'estimated' | undefined, defaultToNull?: boolean | undefined } | undefined): PostgrestFilterBuilder<Schema, Relation['Row'], null, RelationName, Relationships>
//   upsert<R>(_values: R | R[], _options?: unknown): PostgrestFilterBuilderInterface<Schema, Relation['Row'], null, RelationName, Relationships> {
//     throw new Error('Method not implemented.')
//   }

//   update<Row extends Relation extends { Update: unknown } ? Relation['Update'] :
//     never>(values: Row, {
//     count,
//   }: {
//     count?: 'exact' | 'planned' | 'estimated'
//   } = {}):
//     PostgrestFilterBuilderInterface<Schema, Relation['Row'], null, RelationName, Relationships> {
//     throw new Error('Method not implemented.')
//   }

//   delete({
//     count,
//   }: {
//     count?: 'exact' | 'planned' | 'estimated'
//   } = {}): PostgrestFilterBuilderInterface<Schema, Relation['Row'], null, RelationName, Relationships> {
//     throw new Error('Method not implemented.')
//   }
// }
