import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "carrier" */
export type Carrier = {
  __typename?: 'carrier';
  created_at: Scalars['timestamptz'];
  customer: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "carrier" */
export type CarrierOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "carrier" */
export type CarrierOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** aggregated selection of "carrier" */
export type Carrier_Aggregate = {
  __typename?: 'carrier_aggregate';
  aggregate?: Maybe<Carrier_Aggregate_Fields>;
  nodes: Array<Carrier>;
};

/** aggregate fields of "carrier" */
export type Carrier_Aggregate_Fields = {
  __typename?: 'carrier_aggregate_fields';
  avg?: Maybe<Carrier_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Carrier_Max_Fields>;
  min?: Maybe<Carrier_Min_Fields>;
  stddev?: Maybe<Carrier_Stddev_Fields>;
  stddev_pop?: Maybe<Carrier_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Carrier_Stddev_Samp_Fields>;
  sum?: Maybe<Carrier_Sum_Fields>;
  var_pop?: Maybe<Carrier_Var_Pop_Fields>;
  var_samp?: Maybe<Carrier_Var_Samp_Fields>;
  variance?: Maybe<Carrier_Variance_Fields>;
};


/** aggregate fields of "carrier" */
export type Carrier_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Carrier_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Carrier_Avg_Fields = {
  __typename?: 'carrier_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "carrier". All fields are combined with a logical 'AND'. */
export type Carrier_Bool_Exp = {
  _and?: InputMaybe<Array<Carrier_Bool_Exp>>;
  _not?: InputMaybe<Carrier_Bool_Exp>;
  _or?: InputMaybe<Array<Carrier_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  orders?: InputMaybe<Order_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "carrier" */
export enum Carrier_Constraint {
  /** unique or primary key constraint */
  CarrierPkey = 'carrier_pkey'
}

/** input type for incrementing numeric columns in table "carrier" */
export type Carrier_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "carrier" */
export type Carrier_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  orders?: InputMaybe<Order_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Carrier_Max_Fields = {
  __typename?: 'carrier_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Carrier_Min_Fields = {
  __typename?: 'carrier_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "carrier" */
export type Carrier_Mutation_Response = {
  __typename?: 'carrier_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Carrier>;
};

/** input type for inserting object relation for remote table "carrier" */
export type Carrier_Obj_Rel_Insert_Input = {
  data: Carrier_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Carrier_On_Conflict>;
};

/** on_conflict condition type for table "carrier" */
export type Carrier_On_Conflict = {
  constraint: Carrier_Constraint;
  update_columns?: Array<Carrier_Update_Column>;
  where?: InputMaybe<Carrier_Bool_Exp>;
};

/** Ordering options when selecting data from "carrier". */
export type Carrier_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: carrier */
export type Carrier_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "carrier" */
export enum Carrier_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Customer = 'customer',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "carrier" */
export type Carrier_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Carrier_Stddev_Fields = {
  __typename?: 'carrier_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Carrier_Stddev_Pop_Fields = {
  __typename?: 'carrier_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Carrier_Stddev_Samp_Fields = {
  __typename?: 'carrier_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Carrier_Sum_Fields = {
  __typename?: 'carrier_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "carrier" */
export enum Carrier_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Customer = 'customer',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Carrier_Var_Pop_Fields = {
  __typename?: 'carrier_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Carrier_Var_Samp_Fields = {
  __typename?: 'carrier_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Carrier_Variance_Fields = {
  __typename?: 'carrier_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "carrier" */
  delete_carrier?: Maybe<Carrier_Mutation_Response>;
  /** delete single row from the table: "carrier" */
  delete_carrier_by_pk?: Maybe<Carrier>;
  /** delete data from the table: "order" */
  delete_order?: Maybe<Order_Mutation_Response>;
  /** delete single row from the table: "order" */
  delete_order_by_pk?: Maybe<Order>;
  /** insert data into the table: "carrier" */
  insert_carrier?: Maybe<Carrier_Mutation_Response>;
  /** insert a single row into the table: "carrier" */
  insert_carrier_one?: Maybe<Carrier>;
  /** insert data into the table: "order" */
  insert_order?: Maybe<Order_Mutation_Response>;
  /** insert a single row into the table: "order" */
  insert_order_one?: Maybe<Order>;
  /** update data of the table: "carrier" */
  update_carrier?: Maybe<Carrier_Mutation_Response>;
  /** update single row of the table: "carrier" */
  update_carrier_by_pk?: Maybe<Carrier>;
  /** update data of the table: "order" */
  update_order?: Maybe<Order_Mutation_Response>;
  /** update single row of the table: "order" */
  update_order_by_pk?: Maybe<Order>;
};


/** mutation root */
export type Mutation_RootDelete_CarrierArgs = {
  where: Carrier_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Carrier_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OrderArgs = {
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CarrierArgs = {
  objects: Array<Carrier_Insert_Input>;
  on_conflict?: InputMaybe<Carrier_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Carrier_OneArgs = {
  object: Carrier_Insert_Input;
  on_conflict?: InputMaybe<Carrier_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
  object: Order_Insert_Input;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CarrierArgs = {
  _inc?: InputMaybe<Carrier_Inc_Input>;
  _set?: InputMaybe<Carrier_Set_Input>;
  where: Carrier_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Carrier_By_PkArgs = {
  _inc?: InputMaybe<Carrier_Inc_Input>;
  _set?: InputMaybe<Carrier_Set_Input>;
  pk_columns: Carrier_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrderArgs = {
  _inc?: InputMaybe<Order_Inc_Input>;
  _set?: InputMaybe<Order_Set_Input>;
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_By_PkArgs = {
  _inc?: InputMaybe<Order_Inc_Input>;
  _set?: InputMaybe<Order_Set_Input>;
  pk_columns: Order_Pk_Columns_Input;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: 'order';
  assumption: Scalars['String'];
  /** An object relationship */
  carrier: Carrier;
  carrier_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "order" */
export type Order_Aggregate = {
  __typename?: 'order_aggregate';
  aggregate?: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

/** aggregate fields of "order" */
export type Order_Aggregate_Fields = {
  __typename?: 'order_aggregate_fields';
  avg?: Maybe<Order_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Max_Fields>;
  min?: Maybe<Order_Min_Fields>;
  stddev?: Maybe<Order_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Sum_Fields>;
  var_pop?: Maybe<Order_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Var_Samp_Fields>;
  variance?: Maybe<Order_Variance_Fields>;
};


/** aggregate fields of "order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order" */
export type Order_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Max_Order_By>;
  min?: InputMaybe<Order_Min_Order_By>;
  stddev?: InputMaybe<Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order" */
export type Order_Arr_Rel_Insert_Input = {
  data: Array<Order_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename?: 'order_avg_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order" */
export type Order_Avg_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Bool_Exp>>;
  _not?: InputMaybe<Order_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Bool_Exp>>;
  assumption?: InputMaybe<String_Comparison_Exp>;
  carrier?: InputMaybe<Carrier_Bool_Exp>;
  carrier_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** unique or primary key constraints on table "order" */
export enum Order_Constraint {
  /** unique or primary key constraint */
  OrderPkey = 'order_pkey'
}

/** input type for incrementing numeric columns in table "order" */
export type Order_Inc_Input = {
  carrier_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order" */
export type Order_Insert_Input = {
  assumption?: InputMaybe<Scalars['String']>;
  carrier?: InputMaybe<Carrier_Obj_Rel_Insert_Input>;
  carrier_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'order_max_fields';
  assumption?: Maybe<Scalars['String']>;
  carrier_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "order" */
export type Order_Max_Order_By = {
  assumption?: InputMaybe<Order_By>;
  carrier_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'order_min_fields';
  assumption?: Maybe<Scalars['String']>;
  carrier_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "order" */
export type Order_Min_Order_By = {
  assumption?: InputMaybe<Order_By>;
  carrier_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order" */
export type Order_Mutation_Response = {
  __typename?: 'order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order>;
};

/** on_conflict condition type for table "order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint;
  update_columns?: Array<Order_Update_Column>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** Ordering options when selecting data from "order". */
export type Order_Order_By = {
  assumption?: InputMaybe<Order_By>;
  carrier?: InputMaybe<Carrier_Order_By>;
  carrier_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order */
export type Order_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "order" */
export enum Order_Select_Column {
  /** column name */
  Assumption = 'assumption',
  /** column name */
  CarrierId = 'carrier_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "order" */
export type Order_Set_Input = {
  assumption?: InputMaybe<Scalars['String']>;
  carrier_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename?: 'order_stddev_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order" */
export type Order_Stddev_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename?: 'order_stddev_pop_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order" */
export type Order_Stddev_Pop_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename?: 'order_stddev_samp_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order" */
export type Order_Stddev_Samp_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename?: 'order_sum_fields';
  carrier_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order" */
export type Order_Sum_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "order" */
export enum Order_Update_Column {
  /** column name */
  Assumption = 'assumption',
  /** column name */
  CarrierId = 'carrier_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
  __typename?: 'order_var_pop_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order" */
export type Order_Var_Pop_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename?: 'order_var_samp_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order" */
export type Order_Var_Samp_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename?: 'order_variance_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order" */
export type Order_Variance_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "carrier" */
  carrier: Array<Carrier>;
  /** fetch aggregated fields from the table: "carrier" */
  carrier_aggregate: Carrier_Aggregate;
  /** fetch data from the table: "carrier" using primary key columns */
  carrier_by_pk?: Maybe<Carrier>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
};


export type Query_RootCarrierArgs = {
  distinct_on?: InputMaybe<Array<Carrier_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Carrier_Order_By>>;
  where?: InputMaybe<Carrier_Bool_Exp>;
};


export type Query_RootCarrier_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Carrier_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Carrier_Order_By>>;
  where?: InputMaybe<Carrier_Bool_Exp>;
};


export type Query_RootCarrier_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "carrier" */
  carrier: Array<Carrier>;
  /** fetch aggregated fields from the table: "carrier" */
  carrier_aggregate: Carrier_Aggregate;
  /** fetch data from the table: "carrier" using primary key columns */
  carrier_by_pk?: Maybe<Carrier>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
};


export type Subscription_RootCarrierArgs = {
  distinct_on?: InputMaybe<Array<Carrier_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Carrier_Order_By>>;
  where?: InputMaybe<Carrier_Bool_Exp>;
};


export type Subscription_RootCarrier_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Carrier_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Carrier_Order_By>>;
  where?: InputMaybe<Carrier_Bool_Exp>;
};


export type Subscription_RootCarrier_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type SubscribeOrdersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeOrdersSubscription = { __typename?: 'subscription_root', order: Array<{ __typename?: 'order', id: number, carrier_id: number, assumption: string, status: string, created_at: any, updated_at: any, carrier: { __typename?: 'carrier', status: string, customer: string } }> };

export type SubscribeCarriersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeCarriersSubscription = { __typename?: 'subscription_root', carrier: Array<{ __typename?: 'carrier', id: number, status: string, customer: string, created_at: any, updated_at: any }> };

export type SubscribeCarrierSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeCarrierSubscription = { __typename?: 'subscription_root', carrier: Array<{ __typename?: 'carrier', id: number, status: string, customer: string, created_at: any, updated_at: any, orders: Array<{ __typename?: 'order', id: number, status: string, assumption: string, created_at: any, updated_at: any }> }> };


export const SubscribeOrdersDocument = gql`
    subscription SubscribeOrders {
  order {
    id
    carrier_id
    carrier {
      status
      customer
    }
    assumption
    status
    created_at
    updated_at
  }
}
    `;

export function useSubscribeOrdersSubscription<TData = SubscribeOrdersSubscription>(options: Omit<Urql.UseSubscriptionArgs<SubscribeOrdersSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<SubscribeOrdersSubscription, TData>) {
  return Urql.useSubscription<SubscribeOrdersSubscription, TData, SubscribeOrdersSubscriptionVariables>({ query: SubscribeOrdersDocument, ...options }, handler);
};
export const SubscribeCarriersDocument = gql`
    subscription SubscribeCarriers {
  carrier {
    id
    status
    customer
    created_at
    updated_at
  }
}
    `;

export function useSubscribeCarriersSubscription<TData = SubscribeCarriersSubscription>(options: Omit<Urql.UseSubscriptionArgs<SubscribeCarriersSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<SubscribeCarriersSubscription, TData>) {
  return Urql.useSubscription<SubscribeCarriersSubscription, TData, SubscribeCarriersSubscriptionVariables>({ query: SubscribeCarriersDocument, ...options }, handler);
};
export const SubscribeCarrierDocument = gql`
    subscription SubscribeCarrier {
  carrier {
    id
    status
    customer
    created_at
    updated_at
    orders {
      id
      status
      assumption
      created_at
      updated_at
    }
  }
}
    `;

export function useSubscribeCarrierSubscription<TData = SubscribeCarrierSubscription>(options: Omit<Urql.UseSubscriptionArgs<SubscribeCarrierSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<SubscribeCarrierSubscription, TData>) {
  return Urql.useSubscription<SubscribeCarrierSubscription, TData, SubscribeCarrierSubscriptionVariables>({ query: SubscribeCarrierDocument, ...options }, handler);
};