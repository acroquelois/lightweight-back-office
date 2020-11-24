export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/** columns and relationships of "QuestionAnswers" */
export type QuestionAnswers = {
  __typename?: 'QuestionAnswers'
  Id: Scalars['Int']
  Libelle?: Maybe<Scalars['String']>
}

/** aggregated selection of "QuestionAnswers" */
export type QuestionAnswers_Aggregate = {
  __typename?: 'QuestionAnswers_aggregate'
  aggregate?: Maybe<QuestionAnswers_Aggregate_Fields>
  nodes: Array<QuestionAnswers>
}

/** aggregate fields of "QuestionAnswers" */
export type QuestionAnswers_Aggregate_Fields = {
  __typename?: 'QuestionAnswers_aggregate_fields'
  avg?: Maybe<QuestionAnswers_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<QuestionAnswers_Max_Fields>
  min?: Maybe<QuestionAnswers_Min_Fields>
  stddev?: Maybe<QuestionAnswers_Stddev_Fields>
  stddev_pop?: Maybe<QuestionAnswers_Stddev_Pop_Fields>
  stddev_samp?: Maybe<QuestionAnswers_Stddev_Samp_Fields>
  sum?: Maybe<QuestionAnswers_Sum_Fields>
  var_pop?: Maybe<QuestionAnswers_Var_Pop_Fields>
  var_samp?: Maybe<QuestionAnswers_Var_Samp_Fields>
  variance?: Maybe<QuestionAnswers_Variance_Fields>
}

/** aggregate fields of "QuestionAnswers" */
export type QuestionAnswers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<QuestionAnswers_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "QuestionAnswers" */
export type QuestionAnswers_Aggregate_Order_By = {
  avg?: Maybe<QuestionAnswers_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<QuestionAnswers_Max_Order_By>
  min?: Maybe<QuestionAnswers_Min_Order_By>
  stddev?: Maybe<QuestionAnswers_Stddev_Order_By>
  stddev_pop?: Maybe<QuestionAnswers_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<QuestionAnswers_Stddev_Samp_Order_By>
  sum?: Maybe<QuestionAnswers_Sum_Order_By>
  var_pop?: Maybe<QuestionAnswers_Var_Pop_Order_By>
  var_samp?: Maybe<QuestionAnswers_Var_Samp_Order_By>
  variance?: Maybe<QuestionAnswers_Variance_Order_By>
}

/** input type for inserting array relation for remote table "QuestionAnswers" */
export type QuestionAnswers_Arr_Rel_Insert_Input = {
  data: Array<QuestionAnswers_Insert_Input>
  on_conflict?: Maybe<QuestionAnswers_On_Conflict>
}

/** aggregate avg on columns */
export type QuestionAnswers_Avg_Fields = {
  __typename?: 'QuestionAnswers_avg_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "QuestionAnswers" */
export type QuestionAnswers_Avg_Order_By = {
  Id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "QuestionAnswers". All fields are combined with a logical 'AND'. */
export type QuestionAnswers_Bool_Exp = {
  Id?: Maybe<Int_Comparison_Exp>
  Libelle?: Maybe<String_Comparison_Exp>
  _and?: Maybe<Array<Maybe<QuestionAnswers_Bool_Exp>>>
  _not?: Maybe<QuestionAnswers_Bool_Exp>
  _or?: Maybe<Array<Maybe<QuestionAnswers_Bool_Exp>>>
}

/** unique or primary key constraints on table "QuestionAnswers" */
export enum QuestionAnswers_Constraint {
  /** unique or primary key constraint */
  PkQuestionAnswers = 'PK_QuestionAnswers',
}

/** input type for incrementing integer column in table "QuestionAnswers" */
export type QuestionAnswers_Inc_Input = {
  Id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "QuestionAnswers" */
export type QuestionAnswers_Insert_Input = {
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type QuestionAnswers_Max_Fields = {
  __typename?: 'QuestionAnswers_max_fields'
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "QuestionAnswers" */
export type QuestionAnswers_Max_Order_By = {
  Id?: Maybe<Order_By>
  Libelle?: Maybe<Order_By>
}

/** aggregate min on columns */
export type QuestionAnswers_Min_Fields = {
  __typename?: 'QuestionAnswers_min_fields'
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "QuestionAnswers" */
export type QuestionAnswers_Min_Order_By = {
  Id?: Maybe<Order_By>
  Libelle?: Maybe<Order_By>
}

/** response of any mutation on the table "QuestionAnswers" */
export type QuestionAnswers_Mutation_Response = {
  __typename?: 'QuestionAnswers_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<QuestionAnswers>
}

/** input type for inserting object relation for remote table "QuestionAnswers" */
export type QuestionAnswers_Obj_Rel_Insert_Input = {
  data: QuestionAnswers_Insert_Input
  on_conflict?: Maybe<QuestionAnswers_On_Conflict>
}

/** on conflict condition type for table "QuestionAnswers" */
export type QuestionAnswers_On_Conflict = {
  constraint: QuestionAnswers_Constraint
  update_columns: Array<QuestionAnswers_Update_Column>
  where?: Maybe<QuestionAnswers_Bool_Exp>
}

/** ordering options when selecting data from "QuestionAnswers" */
export type QuestionAnswers_Order_By = {
  Id?: Maybe<Order_By>
  Libelle?: Maybe<Order_By>
}

/** primary key columns input for table: "QuestionAnswers" */
export type QuestionAnswers_Pk_Columns_Input = {
  Id: Scalars['Int']
}

/** select columns of table "QuestionAnswers" */
export enum QuestionAnswers_Select_Column {
  /** column name */
  Id = 'Id',
  /** column name */
  Libelle = 'Libelle',
}

/** input type for updating data in table "QuestionAnswers" */
export type QuestionAnswers_Set_Input = {
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type QuestionAnswers_Stddev_Fields = {
  __typename?: 'QuestionAnswers_stddev_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "QuestionAnswers" */
export type QuestionAnswers_Stddev_Order_By = {
  Id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type QuestionAnswers_Stddev_Pop_Fields = {
  __typename?: 'QuestionAnswers_stddev_pop_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "QuestionAnswers" */
export type QuestionAnswers_Stddev_Pop_Order_By = {
  Id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type QuestionAnswers_Stddev_Samp_Fields = {
  __typename?: 'QuestionAnswers_stddev_samp_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "QuestionAnswers" */
export type QuestionAnswers_Stddev_Samp_Order_By = {
  Id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type QuestionAnswers_Sum_Fields = {
  __typename?: 'QuestionAnswers_sum_fields'
  Id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "QuestionAnswers" */
export type QuestionAnswers_Sum_Order_By = {
  Id?: Maybe<Order_By>
}

/** update columns of table "QuestionAnswers" */
export enum QuestionAnswers_Update_Column {
  /** column name */
  Id = 'Id',
  /** column name */
  Libelle = 'Libelle',
}

/** aggregate var_pop on columns */
export type QuestionAnswers_Var_Pop_Fields = {
  __typename?: 'QuestionAnswers_var_pop_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "QuestionAnswers" */
export type QuestionAnswers_Var_Pop_Order_By = {
  Id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type QuestionAnswers_Var_Samp_Fields = {
  __typename?: 'QuestionAnswers_var_samp_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "QuestionAnswers" */
export type QuestionAnswers_Var_Samp_Order_By = {
  Id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type QuestionAnswers_Variance_Fields = {
  __typename?: 'QuestionAnswers_variance_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "QuestionAnswers" */
export type QuestionAnswers_Variance_Order_By = {
  Id?: Maybe<Order_By>
}

/** columns and relationships of "QuestionCategories" */
export type QuestionCategories = {
  __typename?: 'QuestionCategories'
  Id: Scalars['Int']
  Libelle?: Maybe<Scalars['String']>
}

/** aggregated selection of "QuestionCategories" */
export type QuestionCategories_Aggregate = {
  __typename?: 'QuestionCategories_aggregate'
  aggregate?: Maybe<QuestionCategories_Aggregate_Fields>
  nodes: Array<QuestionCategories>
}

/** aggregate fields of "QuestionCategories" */
export type QuestionCategories_Aggregate_Fields = {
  __typename?: 'QuestionCategories_aggregate_fields'
  avg?: Maybe<QuestionCategories_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<QuestionCategories_Max_Fields>
  min?: Maybe<QuestionCategories_Min_Fields>
  stddev?: Maybe<QuestionCategories_Stddev_Fields>
  stddev_pop?: Maybe<QuestionCategories_Stddev_Pop_Fields>
  stddev_samp?: Maybe<QuestionCategories_Stddev_Samp_Fields>
  sum?: Maybe<QuestionCategories_Sum_Fields>
  var_pop?: Maybe<QuestionCategories_Var_Pop_Fields>
  var_samp?: Maybe<QuestionCategories_Var_Samp_Fields>
  variance?: Maybe<QuestionCategories_Variance_Fields>
}

/** aggregate fields of "QuestionCategories" */
export type QuestionCategories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<QuestionCategories_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "QuestionCategories" */
export type QuestionCategories_Aggregate_Order_By = {
  avg?: Maybe<QuestionCategories_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<QuestionCategories_Max_Order_By>
  min?: Maybe<QuestionCategories_Min_Order_By>
  stddev?: Maybe<QuestionCategories_Stddev_Order_By>
  stddev_pop?: Maybe<QuestionCategories_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<QuestionCategories_Stddev_Samp_Order_By>
  sum?: Maybe<QuestionCategories_Sum_Order_By>
  var_pop?: Maybe<QuestionCategories_Var_Pop_Order_By>
  var_samp?: Maybe<QuestionCategories_Var_Samp_Order_By>
  variance?: Maybe<QuestionCategories_Variance_Order_By>
}

/** input type for inserting array relation for remote table "QuestionCategories" */
export type QuestionCategories_Arr_Rel_Insert_Input = {
  data: Array<QuestionCategories_Insert_Input>
  on_conflict?: Maybe<QuestionCategories_On_Conflict>
}

/** aggregate avg on columns */
export type QuestionCategories_Avg_Fields = {
  __typename?: 'QuestionCategories_avg_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "QuestionCategories" */
export type QuestionCategories_Avg_Order_By = {
  Id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "QuestionCategories". All fields are combined with a logical 'AND'. */
export type QuestionCategories_Bool_Exp = {
  Id?: Maybe<Int_Comparison_Exp>
  Libelle?: Maybe<String_Comparison_Exp>
  _and?: Maybe<Array<Maybe<QuestionCategories_Bool_Exp>>>
  _not?: Maybe<QuestionCategories_Bool_Exp>
  _or?: Maybe<Array<Maybe<QuestionCategories_Bool_Exp>>>
}

/** unique or primary key constraints on table "QuestionCategories" */
export enum QuestionCategories_Constraint {
  /** unique or primary key constraint */
  PkQuestionCategories = 'PK_QuestionCategories',
}

/** input type for incrementing integer column in table "QuestionCategories" */
export type QuestionCategories_Inc_Input = {
  Id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "QuestionCategories" */
export type QuestionCategories_Insert_Input = {
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type QuestionCategories_Max_Fields = {
  __typename?: 'QuestionCategories_max_fields'
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "QuestionCategories" */
export type QuestionCategories_Max_Order_By = {
  Id?: Maybe<Order_By>
  Libelle?: Maybe<Order_By>
}

/** aggregate min on columns */
export type QuestionCategories_Min_Fields = {
  __typename?: 'QuestionCategories_min_fields'
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "QuestionCategories" */
export type QuestionCategories_Min_Order_By = {
  Id?: Maybe<Order_By>
  Libelle?: Maybe<Order_By>
}

/** response of any mutation on the table "QuestionCategories" */
export type QuestionCategories_Mutation_Response = {
  __typename?: 'QuestionCategories_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<QuestionCategories>
}

/** input type for inserting object relation for remote table "QuestionCategories" */
export type QuestionCategories_Obj_Rel_Insert_Input = {
  data: QuestionCategories_Insert_Input
  on_conflict?: Maybe<QuestionCategories_On_Conflict>
}

/** on conflict condition type for table "QuestionCategories" */
export type QuestionCategories_On_Conflict = {
  constraint: QuestionCategories_Constraint
  update_columns: Array<QuestionCategories_Update_Column>
  where?: Maybe<QuestionCategories_Bool_Exp>
}

/** ordering options when selecting data from "QuestionCategories" */
export type QuestionCategories_Order_By = {
  Id?: Maybe<Order_By>
  Libelle?: Maybe<Order_By>
}

/** primary key columns input for table: "QuestionCategories" */
export type QuestionCategories_Pk_Columns_Input = {
  Id: Scalars['Int']
}

/** select columns of table "QuestionCategories" */
export enum QuestionCategories_Select_Column {
  /** column name */
  Id = 'Id',
  /** column name */
  Libelle = 'Libelle',
}

/** input type for updating data in table "QuestionCategories" */
export type QuestionCategories_Set_Input = {
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type QuestionCategories_Stddev_Fields = {
  __typename?: 'QuestionCategories_stddev_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "QuestionCategories" */
export type QuestionCategories_Stddev_Order_By = {
  Id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type QuestionCategories_Stddev_Pop_Fields = {
  __typename?: 'QuestionCategories_stddev_pop_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "QuestionCategories" */
export type QuestionCategories_Stddev_Pop_Order_By = {
  Id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type QuestionCategories_Stddev_Samp_Fields = {
  __typename?: 'QuestionCategories_stddev_samp_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "QuestionCategories" */
export type QuestionCategories_Stddev_Samp_Order_By = {
  Id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type QuestionCategories_Sum_Fields = {
  __typename?: 'QuestionCategories_sum_fields'
  Id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "QuestionCategories" */
export type QuestionCategories_Sum_Order_By = {
  Id?: Maybe<Order_By>
}

/** update columns of table "QuestionCategories" */
export enum QuestionCategories_Update_Column {
  /** column name */
  Id = 'Id',
  /** column name */
  Libelle = 'Libelle',
}

/** aggregate var_pop on columns */
export type QuestionCategories_Var_Pop_Fields = {
  __typename?: 'QuestionCategories_var_pop_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "QuestionCategories" */
export type QuestionCategories_Var_Pop_Order_By = {
  Id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type QuestionCategories_Var_Samp_Fields = {
  __typename?: 'QuestionCategories_var_samp_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "QuestionCategories" */
export type QuestionCategories_Var_Samp_Order_By = {
  Id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type QuestionCategories_Variance_Fields = {
  __typename?: 'QuestionCategories_variance_fields'
  Id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "QuestionCategories" */
export type QuestionCategories_Variance_Order_By = {
  Id?: Maybe<Order_By>
}

/** columns and relationships of "QuestionPropositions" */
export type QuestionPropositions = {
  __typename?: 'QuestionPropositions'
  Id: Scalars['Int']
  Libelle?: Maybe<Scalars['String']>
  /** An object relationship */
  Question: Questions
  QuestionId: Scalars['Int']
}

/** aggregated selection of "QuestionPropositions" */
export type QuestionPropositions_Aggregate = {
  __typename?: 'QuestionPropositions_aggregate'
  aggregate?: Maybe<QuestionPropositions_Aggregate_Fields>
  nodes: Array<QuestionPropositions>
}

/** aggregate fields of "QuestionPropositions" */
export type QuestionPropositions_Aggregate_Fields = {
  __typename?: 'QuestionPropositions_aggregate_fields'
  avg?: Maybe<QuestionPropositions_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<QuestionPropositions_Max_Fields>
  min?: Maybe<QuestionPropositions_Min_Fields>
  stddev?: Maybe<QuestionPropositions_Stddev_Fields>
  stddev_pop?: Maybe<QuestionPropositions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<QuestionPropositions_Stddev_Samp_Fields>
  sum?: Maybe<QuestionPropositions_Sum_Fields>
  var_pop?: Maybe<QuestionPropositions_Var_Pop_Fields>
  var_samp?: Maybe<QuestionPropositions_Var_Samp_Fields>
  variance?: Maybe<QuestionPropositions_Variance_Fields>
}

/** aggregate fields of "QuestionPropositions" */
export type QuestionPropositions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<QuestionPropositions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "QuestionPropositions" */
export type QuestionPropositions_Aggregate_Order_By = {
  avg?: Maybe<QuestionPropositions_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<QuestionPropositions_Max_Order_By>
  min?: Maybe<QuestionPropositions_Min_Order_By>
  stddev?: Maybe<QuestionPropositions_Stddev_Order_By>
  stddev_pop?: Maybe<QuestionPropositions_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<QuestionPropositions_Stddev_Samp_Order_By>
  sum?: Maybe<QuestionPropositions_Sum_Order_By>
  var_pop?: Maybe<QuestionPropositions_Var_Pop_Order_By>
  var_samp?: Maybe<QuestionPropositions_Var_Samp_Order_By>
  variance?: Maybe<QuestionPropositions_Variance_Order_By>
}

/** input type for inserting array relation for remote table "QuestionPropositions" */
export type QuestionPropositions_Arr_Rel_Insert_Input = {
  data: Array<QuestionPropositions_Insert_Input>
  on_conflict?: Maybe<QuestionPropositions_On_Conflict>
}

/** aggregate avg on columns */
export type QuestionPropositions_Avg_Fields = {
  __typename?: 'QuestionPropositions_avg_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "QuestionPropositions" */
export type QuestionPropositions_Avg_Order_By = {
  Id?: Maybe<Order_By>
  QuestionId?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "QuestionPropositions". All fields are combined with a logical 'AND'. */
export type QuestionPropositions_Bool_Exp = {
  Id?: Maybe<Int_Comparison_Exp>
  Libelle?: Maybe<String_Comparison_Exp>
  Question?: Maybe<Questions_Bool_Exp>
  QuestionId?: Maybe<Int_Comparison_Exp>
  _and?: Maybe<Array<Maybe<QuestionPropositions_Bool_Exp>>>
  _not?: Maybe<QuestionPropositions_Bool_Exp>
  _or?: Maybe<Array<Maybe<QuestionPropositions_Bool_Exp>>>
}

/** unique or primary key constraints on table "QuestionPropositions" */
export enum QuestionPropositions_Constraint {
  /** unique or primary key constraint */
  PkQuestionPropositions = 'PK_QuestionPropositions',
}

/** input type for incrementing integer column in table "QuestionPropositions" */
export type QuestionPropositions_Inc_Input = {
  Id?: Maybe<Scalars['Int']>
  QuestionId?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "QuestionPropositions" */
export type QuestionPropositions_Insert_Input = {
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
  Question?: Maybe<Questions_Obj_Rel_Insert_Input>
  QuestionId?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type QuestionPropositions_Max_Fields = {
  __typename?: 'QuestionPropositions_max_fields'
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
  QuestionId?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "QuestionPropositions" */
export type QuestionPropositions_Max_Order_By = {
  Id?: Maybe<Order_By>
  Libelle?: Maybe<Order_By>
  QuestionId?: Maybe<Order_By>
}

/** aggregate min on columns */
export type QuestionPropositions_Min_Fields = {
  __typename?: 'QuestionPropositions_min_fields'
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
  QuestionId?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "QuestionPropositions" */
export type QuestionPropositions_Min_Order_By = {
  Id?: Maybe<Order_By>
  Libelle?: Maybe<Order_By>
  QuestionId?: Maybe<Order_By>
}

/** response of any mutation on the table "QuestionPropositions" */
export type QuestionPropositions_Mutation_Response = {
  __typename?: 'QuestionPropositions_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<QuestionPropositions>
}

/** input type for inserting object relation for remote table "QuestionPropositions" */
export type QuestionPropositions_Obj_Rel_Insert_Input = {
  data: QuestionPropositions_Insert_Input
  on_conflict?: Maybe<QuestionPropositions_On_Conflict>
}

/** on conflict condition type for table "QuestionPropositions" */
export type QuestionPropositions_On_Conflict = {
  constraint: QuestionPropositions_Constraint
  update_columns: Array<QuestionPropositions_Update_Column>
  where?: Maybe<QuestionPropositions_Bool_Exp>
}

/** ordering options when selecting data from "QuestionPropositions" */
export type QuestionPropositions_Order_By = {
  Id?: Maybe<Order_By>
  Libelle?: Maybe<Order_By>
  Question?: Maybe<Questions_Order_By>
  QuestionId?: Maybe<Order_By>
}

/** primary key columns input for table: "QuestionPropositions" */
export type QuestionPropositions_Pk_Columns_Input = {
  Id: Scalars['Int']
}

/** select columns of table "QuestionPropositions" */
export enum QuestionPropositions_Select_Column {
  /** column name */
  Id = 'Id',
  /** column name */
  Libelle = 'Libelle',
  /** column name */
  QuestionId = 'QuestionId',
}

/** input type for updating data in table "QuestionPropositions" */
export type QuestionPropositions_Set_Input = {
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
  QuestionId?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type QuestionPropositions_Stddev_Fields = {
  __typename?: 'QuestionPropositions_stddev_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "QuestionPropositions" */
export type QuestionPropositions_Stddev_Order_By = {
  Id?: Maybe<Order_By>
  QuestionId?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type QuestionPropositions_Stddev_Pop_Fields = {
  __typename?: 'QuestionPropositions_stddev_pop_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "QuestionPropositions" */
export type QuestionPropositions_Stddev_Pop_Order_By = {
  Id?: Maybe<Order_By>
  QuestionId?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type QuestionPropositions_Stddev_Samp_Fields = {
  __typename?: 'QuestionPropositions_stddev_samp_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "QuestionPropositions" */
export type QuestionPropositions_Stddev_Samp_Order_By = {
  Id?: Maybe<Order_By>
  QuestionId?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type QuestionPropositions_Sum_Fields = {
  __typename?: 'QuestionPropositions_sum_fields'
  Id?: Maybe<Scalars['Int']>
  QuestionId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "QuestionPropositions" */
export type QuestionPropositions_Sum_Order_By = {
  Id?: Maybe<Order_By>
  QuestionId?: Maybe<Order_By>
}

/** update columns of table "QuestionPropositions" */
export enum QuestionPropositions_Update_Column {
  /** column name */
  Id = 'Id',
  /** column name */
  Libelle = 'Libelle',
  /** column name */
  QuestionId = 'QuestionId',
}

/** aggregate var_pop on columns */
export type QuestionPropositions_Var_Pop_Fields = {
  __typename?: 'QuestionPropositions_var_pop_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "QuestionPropositions" */
export type QuestionPropositions_Var_Pop_Order_By = {
  Id?: Maybe<Order_By>
  QuestionId?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type QuestionPropositions_Var_Samp_Fields = {
  __typename?: 'QuestionPropositions_var_samp_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "QuestionPropositions" */
export type QuestionPropositions_Var_Samp_Order_By = {
  Id?: Maybe<Order_By>
  QuestionId?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type QuestionPropositions_Variance_Fields = {
  __typename?: 'QuestionPropositions_variance_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "QuestionPropositions" */
export type QuestionPropositions_Variance_Order_By = {
  Id?: Maybe<Order_By>
  QuestionId?: Maybe<Order_By>
}

/** columns and relationships of "Questions" */
export type Questions = {
  __typename?: 'Questions'
  Id: Scalars['Int']
  Libelle?: Maybe<Scalars['String']>
  /** An object relationship */
  QuestionAnswer: QuestionAnswers
  QuestionAnswerId?: Scalars['Int']
  QuestionCategorieId?: Scalars['Int']
  /** An object relationship */
  QuestionCategory: QuestionCategories
  /** An array relationship */
  QuestionPropositions: Array<QuestionPropositions>
  /** An aggregated array relationship */
  QuestionPropositions_aggregate?: QuestionPropositions_Aggregate
}

/** columns and relationships of "Questions" */
export type QuestionsQuestionPropositionsArgs = {
  distinct_on?: Maybe<Array<QuestionPropositions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionPropositions_Order_By>>
  where?: Maybe<QuestionPropositions_Bool_Exp>
}

/** columns and relationships of "Questions" */
export type QuestionsQuestionPropositions_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestionPropositions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionPropositions_Order_By>>
  where?: Maybe<QuestionPropositions_Bool_Exp>
}

/** aggregated selection of "Questions" */
export type Questions_Aggregate = {
  __typename?: 'Questions_aggregate'
  aggregate?: Maybe<Questions_Aggregate_Fields>
  nodes: Array<Questions>
}

/** aggregate fields of "Questions" */
export type Questions_Aggregate_Fields = {
  __typename?: 'Questions_aggregate_fields'
  avg?: Maybe<Questions_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Questions_Max_Fields>
  min?: Maybe<Questions_Min_Fields>
  stddev?: Maybe<Questions_Stddev_Fields>
  stddev_pop?: Maybe<Questions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Questions_Stddev_Samp_Fields>
  sum?: Maybe<Questions_Sum_Fields>
  var_pop?: Maybe<Questions_Var_Pop_Fields>
  var_samp?: Maybe<Questions_Var_Samp_Fields>
  variance?: Maybe<Questions_Variance_Fields>
}

/** aggregate fields of "Questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Questions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "Questions" */
export type Questions_Aggregate_Order_By = {
  avg?: Maybe<Questions_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Questions_Max_Order_By>
  min?: Maybe<Questions_Min_Order_By>
  stddev?: Maybe<Questions_Stddev_Order_By>
  stddev_pop?: Maybe<Questions_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Questions_Stddev_Samp_Order_By>
  sum?: Maybe<Questions_Sum_Order_By>
  var_pop?: Maybe<Questions_Var_Pop_Order_By>
  var_samp?: Maybe<Questions_Var_Samp_Order_By>
  variance?: Maybe<Questions_Variance_Order_By>
}

/** input type for inserting array relation for remote table "Questions" */
export type Questions_Arr_Rel_Insert_Input = {
  data: Array<Questions_Insert_Input>
  on_conflict?: Maybe<Questions_On_Conflict>
}

/** aggregate avg on columns */
export type Questions_Avg_Fields = {
  __typename?: 'Questions_avg_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionAnswerId?: Maybe<Scalars['Float']>
  QuestionCategorieId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "Questions" */
export type Questions_Avg_Order_By = {
  Id?: Maybe<Order_By>
  QuestionAnswerId?: Maybe<Order_By>
  QuestionCategorieId?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "Questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  Id?: Maybe<Int_Comparison_Exp>
  Libelle?: Maybe<String_Comparison_Exp>
  QuestionAnswer?: Maybe<QuestionAnswers_Bool_Exp>
  QuestionAnswerId?: Maybe<Int_Comparison_Exp>
  QuestionCategorieId?: Maybe<Int_Comparison_Exp>
  QuestionCategory?: Maybe<QuestionCategories_Bool_Exp>
  QuestionPropositions?: Maybe<QuestionPropositions_Bool_Exp>
  _and?: Maybe<Array<Maybe<Questions_Bool_Exp>>>
  _not?: Maybe<Questions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Questions_Bool_Exp>>>
}

/** unique or primary key constraints on table "Questions" */
export enum Questions_Constraint {
  /** unique or primary key constraint */
  PkQuestions = 'PK_Questions',
}

/** input type for incrementing integer column in table "Questions" */
export type Questions_Inc_Input = {
  Id?: Maybe<Scalars['Int']>
  QuestionAnswerId?: Maybe<Scalars['Int']>
  QuestionCategorieId?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "Questions" */
export type Questions_Insert_Input = {
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
  QuestionAnswer?: Maybe<QuestionAnswers_Obj_Rel_Insert_Input>
  QuestionAnswerId?: Maybe<Scalars['Int']>
  QuestionCategorieId?: Maybe<Scalars['Int']>
  QuestionCategory?: Maybe<QuestionCategories_Obj_Rel_Insert_Input>
  QuestionPropositions?: Maybe<QuestionPropositions_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Questions_Max_Fields = {
  __typename?: 'Questions_max_fields'
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
  QuestionAnswerId?: Maybe<Scalars['Int']>
  QuestionCategorieId?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "Questions" */
export type Questions_Max_Order_By = {
  Id?: Maybe<Order_By>
  Libelle?: Maybe<Order_By>
  QuestionAnswerId?: Maybe<Order_By>
  QuestionCategorieId?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Questions_Min_Fields = {
  __typename?: 'Questions_min_fields'
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
  QuestionAnswerId?: Maybe<Scalars['Int']>
  QuestionCategorieId?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "Questions" */
export type Questions_Min_Order_By = {
  Id?: Maybe<Order_By>
  Libelle?: Maybe<Order_By>
  QuestionAnswerId?: Maybe<Order_By>
  QuestionCategorieId?: Maybe<Order_By>
}

/** response of any mutation on the table "Questions" */
export type Questions_Mutation_Response = {
  __typename?: 'Questions_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Questions>
}

/** input type for inserting object relation for remote table "Questions" */
export type Questions_Obj_Rel_Insert_Input = {
  data: Questions_Insert_Input
  on_conflict?: Maybe<Questions_On_Conflict>
}

/** on conflict condition type for table "Questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint
  update_columns: Array<Questions_Update_Column>
  where?: Maybe<Questions_Bool_Exp>
}

/** ordering options when selecting data from "Questions" */
export type Questions_Order_By = {
  Id?: Maybe<Order_By>
  Libelle?: Maybe<Order_By>
  QuestionAnswer?: Maybe<QuestionAnswers_Order_By>
  QuestionAnswerId?: Maybe<Order_By>
  QuestionCategorieId?: Maybe<Order_By>
  QuestionCategory?: Maybe<QuestionCategories_Order_By>
  QuestionPropositions_aggregate?: Maybe<
    QuestionPropositions_Aggregate_Order_By
  >
}

/** primary key columns input for table: "Questions" */
export type Questions_Pk_Columns_Input = {
  Id: Scalars['Int']
}

/** select columns of table "Questions" */
export enum Questions_Select_Column {
  /** column name */
  Id = 'Id',
  /** column name */
  Libelle = 'Libelle',
  /** column name */
  QuestionAnswerId = 'QuestionAnswerId',
  /** column name */
  QuestionCategorieId = 'QuestionCategorieId',
}

/** input type for updating data in table "Questions" */
export type Questions_Set_Input = {
  Id?: Maybe<Scalars['Int']>
  Libelle?: Maybe<Scalars['String']>
  QuestionAnswerId?: Maybe<Scalars['Int']>
  QuestionCategorieId?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Questions_Stddev_Fields = {
  __typename?: 'Questions_stddev_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionAnswerId?: Maybe<Scalars['Float']>
  QuestionCategorieId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "Questions" */
export type Questions_Stddev_Order_By = {
  Id?: Maybe<Order_By>
  QuestionAnswerId?: Maybe<Order_By>
  QuestionCategorieId?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Questions_Stddev_Pop_Fields = {
  __typename?: 'Questions_stddev_pop_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionAnswerId?: Maybe<Scalars['Float']>
  QuestionCategorieId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "Questions" */
export type Questions_Stddev_Pop_Order_By = {
  Id?: Maybe<Order_By>
  QuestionAnswerId?: Maybe<Order_By>
  QuestionCategorieId?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Questions_Stddev_Samp_Fields = {
  __typename?: 'Questions_stddev_samp_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionAnswerId?: Maybe<Scalars['Float']>
  QuestionCategorieId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "Questions" */
export type Questions_Stddev_Samp_Order_By = {
  Id?: Maybe<Order_By>
  QuestionAnswerId?: Maybe<Order_By>
  QuestionCategorieId?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Questions_Sum_Fields = {
  __typename?: 'Questions_sum_fields'
  Id?: Maybe<Scalars['Int']>
  QuestionAnswerId?: Maybe<Scalars['Int']>
  QuestionCategorieId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "Questions" */
export type Questions_Sum_Order_By = {
  Id?: Maybe<Order_By>
  QuestionAnswerId?: Maybe<Order_By>
  QuestionCategorieId?: Maybe<Order_By>
}

/** update columns of table "Questions" */
export enum Questions_Update_Column {
  /** column name */
  Id = 'Id',
  /** column name */
  Libelle = 'Libelle',
  /** column name */
  QuestionAnswerId = 'QuestionAnswerId',
  /** column name */
  QuestionCategorieId = 'QuestionCategorieId',
}

/** aggregate var_pop on columns */
export type Questions_Var_Pop_Fields = {
  __typename?: 'Questions_var_pop_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionAnswerId?: Maybe<Scalars['Float']>
  QuestionCategorieId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "Questions" */
export type Questions_Var_Pop_Order_By = {
  Id?: Maybe<Order_By>
  QuestionAnswerId?: Maybe<Order_By>
  QuestionCategorieId?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Questions_Var_Samp_Fields = {
  __typename?: 'Questions_var_samp_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionAnswerId?: Maybe<Scalars['Float']>
  QuestionCategorieId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "Questions" */
export type Questions_Var_Samp_Order_By = {
  Id?: Maybe<Order_By>
  QuestionAnswerId?: Maybe<Order_By>
  QuestionCategorieId?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Questions_Variance_Fields = {
  __typename?: 'Questions_variance_fields'
  Id?: Maybe<Scalars['Float']>
  QuestionAnswerId?: Maybe<Scalars['Float']>
  QuestionCategorieId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "Questions" */
export type Questions_Variance_Order_By = {
  Id?: Maybe<Order_By>
  QuestionAnswerId?: Maybe<Order_By>
  QuestionCategorieId?: Maybe<Order_By>
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "QuestionAnswers" */
  delete_QuestionAnswers?: Maybe<QuestionAnswers_Mutation_Response>
  /** delete single row from the table: "QuestionAnswers" */
  delete_QuestionAnswers_by_pk?: Maybe<QuestionAnswers>
  /** delete data from the table: "QuestionCategories" */
  delete_QuestionCategories?: Maybe<QuestionCategories_Mutation_Response>
  /** delete single row from the table: "QuestionCategories" */
  delete_QuestionCategories_by_pk?: Maybe<QuestionCategories>
  /** delete data from the table: "QuestionPropositions" */
  delete_QuestionPropositions?: Maybe<QuestionPropositions_Mutation_Response>
  /** delete single row from the table: "QuestionPropositions" */
  delete_QuestionPropositions_by_pk?: Maybe<QuestionPropositions>
  /** delete data from the table: "Questions" */
  delete_Questions?: Maybe<Questions_Mutation_Response>
  /** delete single row from the table: "Questions" */
  delete_Questions_by_pk?: Maybe<Questions>
  /** insert data into the table: "QuestionAnswers" */
  insert_QuestionAnswers?: Maybe<QuestionAnswers_Mutation_Response>
  /** insert a single row into the table: "QuestionAnswers" */
  insert_QuestionAnswers_one?: Maybe<QuestionAnswers>
  /** insert data into the table: "QuestionCategories" */
  insert_QuestionCategories?: Maybe<QuestionCategories_Mutation_Response>
  /** insert a single row into the table: "QuestionCategories" */
  insert_QuestionCategories_one?: Maybe<QuestionCategories>
  /** insert data into the table: "QuestionPropositions" */
  insert_QuestionPropositions?: Maybe<QuestionPropositions_Mutation_Response>
  /** insert a single row into the table: "QuestionPropositions" */
  insert_QuestionPropositions_one?: Maybe<QuestionPropositions>
  /** insert data into the table: "Questions" */
  insert_Questions?: Maybe<Questions_Mutation_Response>
  /** insert a single row into the table: "Questions" */
  insert_Questions_one?: Maybe<Questions>
  /** update data of the table: "QuestionAnswers" */
  update_QuestionAnswers?: Maybe<QuestionAnswers_Mutation_Response>
  /** update single row of the table: "QuestionAnswers" */
  update_QuestionAnswers_by_pk?: Maybe<QuestionAnswers>
  /** update data of the table: "QuestionCategories" */
  update_QuestionCategories?: Maybe<QuestionCategories_Mutation_Response>
  /** update single row of the table: "QuestionCategories" */
  update_QuestionCategories_by_pk?: Maybe<QuestionCategories>
  /** update data of the table: "QuestionPropositions" */
  update_QuestionPropositions?: Maybe<QuestionPropositions_Mutation_Response>
  /** update single row of the table: "QuestionPropositions" */
  update_QuestionPropositions_by_pk?: Maybe<QuestionPropositions>
  /** update data of the table: "Questions" */
  update_Questions?: Maybe<Questions_Mutation_Response>
  /** update single row of the table: "Questions" */
  update_Questions_by_pk?: Maybe<Questions>
}

/** mutation root */
export type Mutation_RootDelete_QuestionAnswersArgs = {
  where: QuestionAnswers_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_QuestionAnswers_By_PkArgs = {
  Id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_QuestionCategoriesArgs = {
  where: QuestionCategories_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_QuestionCategories_By_PkArgs = {
  Id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_QuestionPropositionsArgs = {
  where: QuestionPropositions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_QuestionPropositions_By_PkArgs = {
  Id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Questions_By_PkArgs = {
  Id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootInsert_QuestionAnswersArgs = {
  objects: Array<QuestionAnswers_Insert_Input>
  on_conflict?: Maybe<QuestionAnswers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_QuestionAnswers_OneArgs = {
  object: QuestionAnswers_Insert_Input
  on_conflict?: Maybe<QuestionAnswers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_QuestionCategoriesArgs = {
  objects: Array<QuestionCategories_Insert_Input>
  on_conflict?: Maybe<QuestionCategories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_QuestionCategories_OneArgs = {
  object: QuestionCategories_Insert_Input
  on_conflict?: Maybe<QuestionCategories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_QuestionPropositionsArgs = {
  objects: Array<QuestionPropositions_Insert_Input>
  on_conflict?: Maybe<QuestionPropositions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_QuestionPropositions_OneArgs = {
  object: QuestionPropositions_Insert_Input
  on_conflict?: Maybe<QuestionPropositions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_QuestionsArgs = {
  objects: Array<Questions_Insert_Input>
  on_conflict?: Maybe<Questions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Questions_OneArgs = {
  object: Questions_Insert_Input
  on_conflict?: Maybe<Questions_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_QuestionAnswersArgs = {
  _inc?: Maybe<QuestionAnswers_Inc_Input>
  _set?: Maybe<QuestionAnswers_Set_Input>
  where: QuestionAnswers_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_QuestionAnswers_By_PkArgs = {
  _inc?: Maybe<QuestionAnswers_Inc_Input>
  _set?: Maybe<QuestionAnswers_Set_Input>
  pk_columns: QuestionAnswers_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_QuestionCategoriesArgs = {
  _inc?: Maybe<QuestionCategories_Inc_Input>
  _set?: Maybe<QuestionCategories_Set_Input>
  where: QuestionCategories_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_QuestionCategories_By_PkArgs = {
  _inc?: Maybe<QuestionCategories_Inc_Input>
  _set?: Maybe<QuestionCategories_Set_Input>
  pk_columns: QuestionCategories_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_QuestionPropositionsArgs = {
  _inc?: Maybe<QuestionPropositions_Inc_Input>
  _set?: Maybe<QuestionPropositions_Set_Input>
  where: QuestionPropositions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_QuestionPropositions_By_PkArgs = {
  _inc?: Maybe<QuestionPropositions_Inc_Input>
  _set?: Maybe<QuestionPropositions_Set_Input>
  pk_columns: QuestionPropositions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_QuestionsArgs = {
  _inc?: Maybe<Questions_Inc_Input>
  _set?: Maybe<Questions_Set_Input>
  where: Questions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Questions_By_PkArgs = {
  _inc?: Maybe<Questions_Inc_Input>
  _set?: Maybe<Questions_Set_Input>
  pk_columns: Questions_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "QuestionAnswers" */
  QuestionAnswers: Array<QuestionAnswers>
  /** fetch aggregated fields from the table: "QuestionAnswers" */
  QuestionAnswers_aggregate: QuestionAnswers_Aggregate
  /** fetch data from the table: "QuestionAnswers" using primary key columns */
  QuestionAnswers_by_pk?: Maybe<QuestionAnswers>
  /** fetch data from the table: "QuestionCategories" */
  QuestionCategories: Array<QuestionCategories>
  /** fetch aggregated fields from the table: "QuestionCategories" */
  QuestionCategories_aggregate: QuestionCategories_Aggregate
  /** fetch data from the table: "QuestionCategories" using primary key columns */
  QuestionCategories_by_pk?: Maybe<QuestionCategories>
  /** fetch data from the table: "QuestionPropositions" */
  QuestionPropositions: Array<QuestionPropositions>
  /** fetch aggregated fields from the table: "QuestionPropositions" */
  QuestionPropositions_aggregate: QuestionPropositions_Aggregate
  /** fetch data from the table: "QuestionPropositions" using primary key columns */
  QuestionPropositions_by_pk?: Maybe<QuestionPropositions>
  /** fetch data from the table: "Questions" */
  Questions: Array<Questions>
  /** fetch aggregated fields from the table: "Questions" */
  Questions_aggregate: Questions_Aggregate
  /** fetch data from the table: "Questions" using primary key columns */
  Questions_by_pk?: Maybe<Questions>
}

/** query root */
export type Query_RootQuestionAnswersArgs = {
  distinct_on?: Maybe<Array<QuestionAnswers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionAnswers_Order_By>>
  where?: Maybe<QuestionAnswers_Bool_Exp>
}

/** query root */
export type Query_RootQuestionAnswers_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestionAnswers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionAnswers_Order_By>>
  where?: Maybe<QuestionAnswers_Bool_Exp>
}

/** query root */
export type Query_RootQuestionAnswers_By_PkArgs = {
  Id: Scalars['Int']
}

/** query root */
export type Query_RootQuestionCategoriesArgs = {
  distinct_on?: Maybe<Array<QuestionCategories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionCategories_Order_By>>
  where?: Maybe<QuestionCategories_Bool_Exp>
}

/** query root */
export type Query_RootQuestionCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestionCategories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionCategories_Order_By>>
  where?: Maybe<QuestionCategories_Bool_Exp>
}

/** query root */
export type Query_RootQuestionCategories_By_PkArgs = {
  Id: Scalars['Int']
}

/** query root */
export type Query_RootQuestionPropositionsArgs = {
  distinct_on?: Maybe<Array<QuestionPropositions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionPropositions_Order_By>>
  where?: Maybe<QuestionPropositions_Bool_Exp>
}

/** query root */
export type Query_RootQuestionPropositions_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestionPropositions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionPropositions_Order_By>>
  where?: Maybe<QuestionPropositions_Bool_Exp>
}

/** query root */
export type Query_RootQuestionPropositions_By_PkArgs = {
  Id: Scalars['Int']
}

/** query root */
export type Query_RootQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Questions_Order_By>>
  where?: Maybe<Questions_Bool_Exp>
}

/** query root */
export type Query_RootQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Questions_Order_By>>
  where?: Maybe<Questions_Bool_Exp>
}

/** query root */
export type Query_RootQuestions_By_PkArgs = {
  Id: Scalars['Int']
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "QuestionAnswers" */
  QuestionAnswers: Array<QuestionAnswers>
  /** fetch aggregated fields from the table: "QuestionAnswers" */
  QuestionAnswers_aggregate: QuestionAnswers_Aggregate
  /** fetch data from the table: "QuestionAnswers" using primary key columns */
  QuestionAnswers_by_pk?: Maybe<QuestionAnswers>
  /** fetch data from the table: "QuestionCategories" */
  QuestionCategories: Array<QuestionCategories>
  /** fetch aggregated fields from the table: "QuestionCategories" */
  QuestionCategories_aggregate: QuestionCategories_Aggregate
  /** fetch data from the table: "QuestionCategories" using primary key columns */
  QuestionCategories_by_pk?: Maybe<QuestionCategories>
  /** fetch data from the table: "QuestionPropositions" */
  QuestionPropositions: Array<QuestionPropositions>
  /** fetch aggregated fields from the table: "QuestionPropositions" */
  QuestionPropositions_aggregate: QuestionPropositions_Aggregate
  /** fetch data from the table: "QuestionPropositions" using primary key columns */
  QuestionPropositions_by_pk?: Maybe<QuestionPropositions>
  /** fetch data from the table: "Questions" */
  Questions: Array<Questions>
  /** fetch aggregated fields from the table: "Questions" */
  Questions_aggregate: Questions_Aggregate
  /** fetch data from the table: "Questions" using primary key columns */
  Questions_by_pk?: Maybe<Questions>
}

/** subscription root */
export type Subscription_RootQuestionAnswersArgs = {
  distinct_on?: Maybe<Array<QuestionAnswers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionAnswers_Order_By>>
  where?: Maybe<QuestionAnswers_Bool_Exp>
}

/** subscription root */
export type Subscription_RootQuestionAnswers_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestionAnswers_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionAnswers_Order_By>>
  where?: Maybe<QuestionAnswers_Bool_Exp>
}

/** subscription root */
export type Subscription_RootQuestionAnswers_By_PkArgs = {
  Id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootQuestionCategoriesArgs = {
  distinct_on?: Maybe<Array<QuestionCategories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionCategories_Order_By>>
  where?: Maybe<QuestionCategories_Bool_Exp>
}

/** subscription root */
export type Subscription_RootQuestionCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestionCategories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionCategories_Order_By>>
  where?: Maybe<QuestionCategories_Bool_Exp>
}

/** subscription root */
export type Subscription_RootQuestionCategories_By_PkArgs = {
  Id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootQuestionPropositionsArgs = {
  distinct_on?: Maybe<Array<QuestionPropositions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionPropositions_Order_By>>
  where?: Maybe<QuestionPropositions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootQuestionPropositions_AggregateArgs = {
  distinct_on?: Maybe<Array<QuestionPropositions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionPropositions_Order_By>>
  where?: Maybe<QuestionPropositions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootQuestionPropositions_By_PkArgs = {
  Id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Questions_Order_By>>
  where?: Maybe<Questions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Questions_Order_By>>
  where?: Maybe<Questions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootQuestions_By_PkArgs = {
  Id: Scalars['Int']
}
