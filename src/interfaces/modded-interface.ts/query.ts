import type { PostgrestQueryBuilder } from '@supabase/postgrest-js'
import type { GenericSchema, GenericTable, GenericView } from '@supabase/supabase-js/dist/module/lib/types'
import type { GetResult } from '@supabase/postgrest-js/dist/module/select-query-parser'
import type { PostgrestQueryBuilderInterface } from '../postgrest-query-builder'
import type { PostgrestFilterBuilderIPlus } from './filter'

export interface PostgrestQueryBuilderIPlus<
  Schema extends GenericSchema,
  Relation extends GenericTable | GenericView,
  RelationName = unknown,
  Relationships = Relation extends { Relationships: infer R } ? R : unknown,
> extends PostgrestQueryBuilderInterface<Schema, Relation, RelationName, Relationships> {
  select<Query extends string = '*', ResultOne = GetResult<Schema, Relation['Row'], RelationName, Relationships, Query>>(columns?: Query | undefined,
    h?: { head?: boolean | undefined, count?: 'exact' | 'planned' | 'estimated' | undefined } | undefined): PostgrestFilterBuilderIPlus<Schema, Relation['Row'], ResultOne[], RelationName, Relationships>

  // insert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(
  //   values: Row,
  //   options?: {
  //     count?: 'exact' | 'planned' | 'estimated'
  //   }
  // ): PostgrestFilterBuilderIPlus<Schema, Relation['Row'], null, RelationName, Relationships>
  // insert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(
  //   values: Row[],
  //   options?: {
  //     count?: 'exact' | 'planned' | 'estimated'
  //     defaultToNull?: boolean
  //   }
  // ): PostgrestFilterBuilderIPlus<Schema, Relation['Row'], null, RelationName, Relationships>

  // insert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(
  //   values: Row | Row[],
  //   {
  //     count,
  //     defaultToNull = true,
  //   }: {
  //     count?: 'exact' | 'planned' | 'estimated'
  //     defaultToNull?: boolean
  //   } = {}
  // ) {
  //   throw new Error('Method not implemented.')
  // }

  insert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(values: Row, options?: { count?: 'exact' | 'planned' | 'estimated' | undefined } | undefined): PostgrestFilterBuilderIPlus<Schema, Relation['Row'], null, RelationName, Relationships>
  insert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(values: Row[], options?: { count?: 'exact' | 'planned' | 'estimated' | undefined, defaultToNull?: boolean | undefined } | undefined): PostgrestFilterBuilderIPlus<Schema, Relation['Row'], null, RelationName, Relationships>

  upsert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(values: Row, options?: { count?: 'exact' | 'planned' | 'estimated' | undefined } | undefined): PostgrestFilterBuilderIPlus<Schema, Relation['Row'], null, RelationName, Relationships>
  upsert<Row extends Relation extends { Insert: unknown } ? Relation['Insert'] : never>(values: Row[], options?: { count?: 'exact' | 'planned' | 'estimated' | undefined, defaultToNull?: boolean | undefined } | undefined): PostgrestFilterBuilderIPlus<Schema, Relation['Row'], null, RelationName, Relationships>

  update<Row extends Relation extends { Update: unknown } ? Relation['Update'] :
    never>(values: Row, {
    count,
  }: {
    count?: 'exact' | 'planned' | 'estimated'
  }):
  PostgrestFilterBuilderIPlus<Schema, Relation['Row'], null, RelationName, Relationships>

  delete({
    count,
  }: {
    count?: 'exact' | 'planned' | 'estimated'
  }): PostgrestFilterBuilderIPlus<Schema, Relation['Row'], null, RelationName, Relationships>
}
