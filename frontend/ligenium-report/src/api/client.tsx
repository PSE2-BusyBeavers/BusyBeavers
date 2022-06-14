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
  incidents: Array<Incident>;
  /** An aggregate relationship */
  incidents_aggregate: Incident_Aggregate;
  /** An array relationship */
  orders: Array<Order_Carriers>;
  /** An aggregate relationship */
  orders_aggregate: Order_Carriers_Aggregate;
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "carrier" */
export type CarrierIncidentsArgs = {
  distinct_on?: InputMaybe<Array<Incident_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Incident_Order_By>>;
  where?: InputMaybe<Incident_Bool_Exp>;
};


/** columns and relationships of "carrier" */
export type CarrierIncidents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Incident_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Incident_Order_By>>;
  where?: InputMaybe<Incident_Bool_Exp>;
};


/** columns and relationships of "carrier" */
export type CarrierOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Carriers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Carriers_Order_By>>;
  where?: InputMaybe<Order_Carriers_Bool_Exp>;
};


/** columns and relationships of "carrier" */
export type CarrierOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Carriers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Carriers_Order_By>>;
  where?: InputMaybe<Order_Carriers_Bool_Exp>;
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
  incidents?: InputMaybe<Incident_Bool_Exp>;
  orders?: InputMaybe<Order_Carriers_Bool_Exp>;
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
  incidents?: InputMaybe<Incident_Arr_Rel_Insert_Input>;
  orders?: InputMaybe<Order_Carriers_Arr_Rel_Insert_Input>;
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
  incidents_aggregate?: InputMaybe<Incident_Aggregate_Order_By>;
  orders_aggregate?: InputMaybe<Order_Carriers_Aggregate_Order_By>;
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

/** columns and relationships of "incident" */
export type Incident = {
  __typename?: 'incident';
  assumption: Scalars['String'];
  /** An object relationship */
  carrier: Carrier;
  carrier_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "incident" */
export type Incident_Aggregate = {
  __typename?: 'incident_aggregate';
  aggregate?: Maybe<Incident_Aggregate_Fields>;
  nodes: Array<Incident>;
};

/** aggregate fields of "incident" */
export type Incident_Aggregate_Fields = {
  __typename?: 'incident_aggregate_fields';
  avg?: Maybe<Incident_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Incident_Max_Fields>;
  min?: Maybe<Incident_Min_Fields>;
  stddev?: Maybe<Incident_Stddev_Fields>;
  stddev_pop?: Maybe<Incident_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Incident_Stddev_Samp_Fields>;
  sum?: Maybe<Incident_Sum_Fields>;
  var_pop?: Maybe<Incident_Var_Pop_Fields>;
  var_samp?: Maybe<Incident_Var_Samp_Fields>;
  variance?: Maybe<Incident_Variance_Fields>;
};


/** aggregate fields of "incident" */
export type Incident_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Incident_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "incident" */
export type Incident_Aggregate_Order_By = {
  avg?: InputMaybe<Incident_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Incident_Max_Order_By>;
  min?: InputMaybe<Incident_Min_Order_By>;
  stddev?: InputMaybe<Incident_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Incident_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Incident_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Incident_Sum_Order_By>;
  var_pop?: InputMaybe<Incident_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Incident_Var_Samp_Order_By>;
  variance?: InputMaybe<Incident_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "incident" */
export type Incident_Arr_Rel_Insert_Input = {
  data: Array<Incident_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Incident_On_Conflict>;
};

/** aggregate avg on columns */
export type Incident_Avg_Fields = {
  __typename?: 'incident_avg_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "incident" */
export type Incident_Avg_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "incident". All fields are combined with a logical 'AND'. */
export type Incident_Bool_Exp = {
  _and?: InputMaybe<Array<Incident_Bool_Exp>>;
  _not?: InputMaybe<Incident_Bool_Exp>;
  _or?: InputMaybe<Array<Incident_Bool_Exp>>;
  assumption?: InputMaybe<String_Comparison_Exp>;
  carrier?: InputMaybe<Carrier_Bool_Exp>;
  carrier_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "incident" */
export enum Incident_Constraint {
  /** unique or primary key constraint */
  IncidentsPkey = 'incidents_pkey'
}

/** input type for incrementing numeric columns in table "incident" */
export type Incident_Inc_Input = {
  carrier_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "incident" */
export type Incident_Insert_Input = {
  assumption?: InputMaybe<Scalars['String']>;
  carrier?: InputMaybe<Carrier_Obj_Rel_Insert_Input>;
  carrier_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Incident_Max_Fields = {
  __typename?: 'incident_max_fields';
  assumption?: Maybe<Scalars['String']>;
  carrier_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "incident" */
export type Incident_Max_Order_By = {
  assumption?: InputMaybe<Order_By>;
  carrier_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Incident_Min_Fields = {
  __typename?: 'incident_min_fields';
  assumption?: Maybe<Scalars['String']>;
  carrier_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "incident" */
export type Incident_Min_Order_By = {
  assumption?: InputMaybe<Order_By>;
  carrier_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "incident" */
export type Incident_Mutation_Response = {
  __typename?: 'incident_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Incident>;
};

/** on_conflict condition type for table "incident" */
export type Incident_On_Conflict = {
  constraint: Incident_Constraint;
  update_columns?: Array<Incident_Update_Column>;
  where?: InputMaybe<Incident_Bool_Exp>;
};

/** Ordering options when selecting data from "incident". */
export type Incident_Order_By = {
  assumption?: InputMaybe<Order_By>;
  carrier?: InputMaybe<Carrier_Order_By>;
  carrier_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: incident */
export type Incident_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "incident" */
export enum Incident_Select_Column {
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

/** input type for updating data in table "incident" */
export type Incident_Set_Input = {
  assumption?: InputMaybe<Scalars['String']>;
  carrier_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Incident_Stddev_Fields = {
  __typename?: 'incident_stddev_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "incident" */
export type Incident_Stddev_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Incident_Stddev_Pop_Fields = {
  __typename?: 'incident_stddev_pop_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "incident" */
export type Incident_Stddev_Pop_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Incident_Stddev_Samp_Fields = {
  __typename?: 'incident_stddev_samp_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "incident" */
export type Incident_Stddev_Samp_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Incident_Sum_Fields = {
  __typename?: 'incident_sum_fields';
  carrier_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "incident" */
export type Incident_Sum_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "incident" */
export enum Incident_Update_Column {
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
export type Incident_Var_Pop_Fields = {
  __typename?: 'incident_var_pop_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "incident" */
export type Incident_Var_Pop_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Incident_Var_Samp_Fields = {
  __typename?: 'incident_var_samp_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "incident" */
export type Incident_Var_Samp_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Incident_Variance_Fields = {
  __typename?: 'incident_variance_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "incident" */
export type Incident_Variance_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "carrier" */
  delete_carrier?: Maybe<Carrier_Mutation_Response>;
  /** delete single row from the table: "carrier" */
  delete_carrier_by_pk?: Maybe<Carrier>;
  /** delete data from the table: "incident" */
  delete_incident?: Maybe<Incident_Mutation_Response>;
  /** delete single row from the table: "incident" */
  delete_incident_by_pk?: Maybe<Incident>;
  /** delete data from the table: "order" */
  delete_order?: Maybe<Order_Mutation_Response>;
  /** delete single row from the table: "order" */
  delete_order_by_pk?: Maybe<Order>;
  /** delete data from the table: "order_carriers" */
  delete_order_carriers?: Maybe<Order_Carriers_Mutation_Response>;
  /** delete single row from the table: "order_carriers" */
  delete_order_carriers_by_pk?: Maybe<Order_Carriers>;
  /** delete data from the table: "protocol" */
  delete_protocol?: Maybe<Protocol_Mutation_Response>;
  /** delete single row from the table: "protocol" */
  delete_protocol_by_pk?: Maybe<Protocol>;
  /** insert data into the table: "carrier" */
  insert_carrier?: Maybe<Carrier_Mutation_Response>;
  /** insert a single row into the table: "carrier" */
  insert_carrier_one?: Maybe<Carrier>;
  /** insert data into the table: "incident" */
  insert_incident?: Maybe<Incident_Mutation_Response>;
  /** insert a single row into the table: "incident" */
  insert_incident_one?: Maybe<Incident>;
  /** insert data into the table: "order" */
  insert_order?: Maybe<Order_Mutation_Response>;
  /** insert data into the table: "order_carriers" */
  insert_order_carriers?: Maybe<Order_Carriers_Mutation_Response>;
  /** insert a single row into the table: "order_carriers" */
  insert_order_carriers_one?: Maybe<Order_Carriers>;
  /** insert a single row into the table: "order" */
  insert_order_one?: Maybe<Order>;
  /** insert data into the table: "protocol" */
  insert_protocol?: Maybe<Protocol_Mutation_Response>;
  /** insert a single row into the table: "protocol" */
  insert_protocol_one?: Maybe<Protocol>;
  /** update data of the table: "carrier" */
  update_carrier?: Maybe<Carrier_Mutation_Response>;
  /** update single row of the table: "carrier" */
  update_carrier_by_pk?: Maybe<Carrier>;
  /** update data of the table: "incident" */
  update_incident?: Maybe<Incident_Mutation_Response>;
  /** update single row of the table: "incident" */
  update_incident_by_pk?: Maybe<Incident>;
  /** update data of the table: "order" */
  update_order?: Maybe<Order_Mutation_Response>;
  /** update single row of the table: "order" */
  update_order_by_pk?: Maybe<Order>;
  /** update data of the table: "order_carriers" */
  update_order_carriers?: Maybe<Order_Carriers_Mutation_Response>;
  /** update single row of the table: "order_carriers" */
  update_order_carriers_by_pk?: Maybe<Order_Carriers>;
  /** update data of the table: "protocol" */
  update_protocol?: Maybe<Protocol_Mutation_Response>;
  /** update single row of the table: "protocol" */
  update_protocol_by_pk?: Maybe<Protocol>;
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
export type Mutation_RootDelete_IncidentArgs = {
  where: Incident_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Incident_By_PkArgs = {
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
export type Mutation_RootDelete_Order_CarriersArgs = {
  where: Order_Carriers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Carriers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProtocolArgs = {
  where: Protocol_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Protocol_By_PkArgs = {
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
export type Mutation_RootInsert_IncidentArgs = {
  objects: Array<Incident_Insert_Input>;
  on_conflict?: InputMaybe<Incident_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Incident_OneArgs = {
  object: Incident_Insert_Input;
  on_conflict?: InputMaybe<Incident_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_CarriersArgs = {
  objects: Array<Order_Carriers_Insert_Input>;
  on_conflict?: InputMaybe<Order_Carriers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Carriers_OneArgs = {
  object: Order_Carriers_Insert_Input;
  on_conflict?: InputMaybe<Order_Carriers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
  object: Order_Insert_Input;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProtocolArgs = {
  objects: Array<Protocol_Insert_Input>;
  on_conflict?: InputMaybe<Protocol_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Protocol_OneArgs = {
  object: Protocol_Insert_Input;
  on_conflict?: InputMaybe<Protocol_On_Conflict>;
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
export type Mutation_RootUpdate_IncidentArgs = {
  _inc?: InputMaybe<Incident_Inc_Input>;
  _set?: InputMaybe<Incident_Set_Input>;
  where: Incident_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Incident_By_PkArgs = {
  _inc?: InputMaybe<Incident_Inc_Input>;
  _set?: InputMaybe<Incident_Set_Input>;
  pk_columns: Incident_Pk_Columns_Input;
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


/** mutation root */
export type Mutation_RootUpdate_Order_CarriersArgs = {
  _inc?: InputMaybe<Order_Carriers_Inc_Input>;
  _set?: InputMaybe<Order_Carriers_Set_Input>;
  where: Order_Carriers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Carriers_By_PkArgs = {
  _inc?: InputMaybe<Order_Carriers_Inc_Input>;
  _set?: InputMaybe<Order_Carriers_Set_Input>;
  pk_columns: Order_Carriers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProtocolArgs = {
  _inc?: InputMaybe<Protocol_Inc_Input>;
  _set?: InputMaybe<Protocol_Set_Input>;
  where: Protocol_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Protocol_By_PkArgs = {
  _inc?: InputMaybe<Protocol_Inc_Input>;
  _set?: InputMaybe<Protocol_Set_Input>;
  pk_columns: Protocol_Pk_Columns_Input;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: 'order';
  /** An array relationship */
  carriers: Array<Order_Carriers>;
  /** An aggregate relationship */
  carriers_aggregate: Order_Carriers_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  protocols: Array<Protocol>;
  /** An aggregate relationship */
  protocols_aggregate: Protocol_Aggregate;
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "order" */
export type OrderCarriersArgs = {
  distinct_on?: InputMaybe<Array<Order_Carriers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Carriers_Order_By>>;
  where?: InputMaybe<Order_Carriers_Bool_Exp>;
};


/** columns and relationships of "order" */
export type OrderCarriers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Carriers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Carriers_Order_By>>;
  where?: InputMaybe<Order_Carriers_Bool_Exp>;
};


/** columns and relationships of "order" */
export type OrderProtocolsArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Protocol_Order_By>>;
  where?: InputMaybe<Protocol_Bool_Exp>;
};


/** columns and relationships of "order" */
export type OrderProtocols_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Protocol_Order_By>>;
  where?: InputMaybe<Protocol_Bool_Exp>;
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

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename?: 'order_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Bool_Exp>>;
  _not?: InputMaybe<Order_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Bool_Exp>>;
  carriers?: InputMaybe<Order_Carriers_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  protocols?: InputMaybe<Protocol_Bool_Exp>;
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

/** columns and relationships of "order_carriers" */
export type Order_Carriers = {
  __typename?: 'order_carriers';
  /** An object relationship */
  carrier: Carrier;
  carrier_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  order: Order;
  order_id: Scalars['Int'];
};

/** aggregated selection of "order_carriers" */
export type Order_Carriers_Aggregate = {
  __typename?: 'order_carriers_aggregate';
  aggregate?: Maybe<Order_Carriers_Aggregate_Fields>;
  nodes: Array<Order_Carriers>;
};

/** aggregate fields of "order_carriers" */
export type Order_Carriers_Aggregate_Fields = {
  __typename?: 'order_carriers_aggregate_fields';
  avg?: Maybe<Order_Carriers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Carriers_Max_Fields>;
  min?: Maybe<Order_Carriers_Min_Fields>;
  stddev?: Maybe<Order_Carriers_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Carriers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Carriers_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Carriers_Sum_Fields>;
  var_pop?: Maybe<Order_Carriers_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Carriers_Var_Samp_Fields>;
  variance?: Maybe<Order_Carriers_Variance_Fields>;
};


/** aggregate fields of "order_carriers" */
export type Order_Carriers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Carriers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_carriers" */
export type Order_Carriers_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Carriers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Carriers_Max_Order_By>;
  min?: InputMaybe<Order_Carriers_Min_Order_By>;
  stddev?: InputMaybe<Order_Carriers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Carriers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Carriers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Carriers_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Carriers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Carriers_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Carriers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_carriers" */
export type Order_Carriers_Arr_Rel_Insert_Input = {
  data: Array<Order_Carriers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Carriers_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Carriers_Avg_Fields = {
  __typename?: 'order_carriers_avg_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_carriers" */
export type Order_Carriers_Avg_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_carriers". All fields are combined with a logical 'AND'. */
export type Order_Carriers_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Carriers_Bool_Exp>>;
  _not?: InputMaybe<Order_Carriers_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Carriers_Bool_Exp>>;
  carrier?: InputMaybe<Carrier_Bool_Exp>;
  carrier_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_carriers" */
export enum Order_Carriers_Constraint {
  /** unique or primary key constraint */
  OrderCarriersPkey = 'order_carriers_pkey'
}

/** input type for incrementing numeric columns in table "order_carriers" */
export type Order_Carriers_Inc_Input = {
  carrier_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_carriers" */
export type Order_Carriers_Insert_Input = {
  carrier?: InputMaybe<Carrier_Obj_Rel_Insert_Input>;
  carrier_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Order_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Order_Carriers_Max_Fields = {
  __typename?: 'order_carriers_max_fields';
  carrier_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "order_carriers" */
export type Order_Carriers_Max_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Carriers_Min_Fields = {
  __typename?: 'order_carriers_min_fields';
  carrier_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "order_carriers" */
export type Order_Carriers_Min_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_carriers" */
export type Order_Carriers_Mutation_Response = {
  __typename?: 'order_carriers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Carriers>;
};

/** on_conflict condition type for table "order_carriers" */
export type Order_Carriers_On_Conflict = {
  constraint: Order_Carriers_Constraint;
  update_columns?: Array<Order_Carriers_Update_Column>;
  where?: InputMaybe<Order_Carriers_Bool_Exp>;
};

/** Ordering options when selecting data from "order_carriers". */
export type Order_Carriers_Order_By = {
  carrier?: InputMaybe<Carrier_Order_By>;
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_carriers */
export type Order_Carriers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "order_carriers" */
export enum Order_Carriers_Select_Column {
  /** column name */
  CarrierId = 'carrier_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id'
}

/** input type for updating data in table "order_carriers" */
export type Order_Carriers_Set_Input = {
  carrier_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Order_Carriers_Stddev_Fields = {
  __typename?: 'order_carriers_stddev_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_carriers" */
export type Order_Carriers_Stddev_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Carriers_Stddev_Pop_Fields = {
  __typename?: 'order_carriers_stddev_pop_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_carriers" */
export type Order_Carriers_Stddev_Pop_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Carriers_Stddev_Samp_Fields = {
  __typename?: 'order_carriers_stddev_samp_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_carriers" */
export type Order_Carriers_Stddev_Samp_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Carriers_Sum_Fields = {
  __typename?: 'order_carriers_sum_fields';
  carrier_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_carriers" */
export type Order_Carriers_Sum_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** update columns of table "order_carriers" */
export enum Order_Carriers_Update_Column {
  /** column name */
  CarrierId = 'carrier_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id'
}

/** aggregate var_pop on columns */
export type Order_Carriers_Var_Pop_Fields = {
  __typename?: 'order_carriers_var_pop_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_carriers" */
export type Order_Carriers_Var_Pop_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Carriers_Var_Samp_Fields = {
  __typename?: 'order_carriers_var_samp_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_carriers" */
export type Order_Carriers_Var_Samp_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Carriers_Variance_Fields = {
  __typename?: 'order_carriers_variance_fields';
  carrier_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_carriers" */
export type Order_Carriers_Variance_Order_By = {
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "order" */
export enum Order_Constraint {
  /** unique or primary key constraint */
  OrderPkey = 'order_pkey'
}

/** input type for incrementing numeric columns in table "order" */
export type Order_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order" */
export type Order_Insert_Input = {
  carriers?: InputMaybe<Order_Carriers_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  protocols?: InputMaybe<Protocol_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'order_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'order_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "order" */
export type Order_Mutation_Response = {
  __typename?: 'order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order>;
};

/** input type for inserting object relation for remote table "order" */
export type Order_Obj_Rel_Insert_Input = {
  data: Order_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** on_conflict condition type for table "order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint;
  update_columns?: Array<Order_Update_Column>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** Ordering options when selecting data from "order". */
export type Order_Order_By = {
  carriers_aggregate?: InputMaybe<Order_Carriers_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  protocols_aggregate?: InputMaybe<Protocol_Aggregate_Order_By>;
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
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename?: 'order_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename?: 'order_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename?: 'order_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename?: 'order_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "order" */
export enum Order_Update_Column {
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
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename?: 'order_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename?: 'order_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "protocol" */
export type Protocol = {
  __typename?: 'protocol';
  body: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An object relationship */
  order: Order;
  order_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  user: Scalars['String'];
};

/** aggregated selection of "protocol" */
export type Protocol_Aggregate = {
  __typename?: 'protocol_aggregate';
  aggregate?: Maybe<Protocol_Aggregate_Fields>;
  nodes: Array<Protocol>;
};

/** aggregate fields of "protocol" */
export type Protocol_Aggregate_Fields = {
  __typename?: 'protocol_aggregate_fields';
  avg?: Maybe<Protocol_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Protocol_Max_Fields>;
  min?: Maybe<Protocol_Min_Fields>;
  stddev?: Maybe<Protocol_Stddev_Fields>;
  stddev_pop?: Maybe<Protocol_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Protocol_Stddev_Samp_Fields>;
  sum?: Maybe<Protocol_Sum_Fields>;
  var_pop?: Maybe<Protocol_Var_Pop_Fields>;
  var_samp?: Maybe<Protocol_Var_Samp_Fields>;
  variance?: Maybe<Protocol_Variance_Fields>;
};


/** aggregate fields of "protocol" */
export type Protocol_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Protocol_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "protocol" */
export type Protocol_Aggregate_Order_By = {
  avg?: InputMaybe<Protocol_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Protocol_Max_Order_By>;
  min?: InputMaybe<Protocol_Min_Order_By>;
  stddev?: InputMaybe<Protocol_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Protocol_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Protocol_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Protocol_Sum_Order_By>;
  var_pop?: InputMaybe<Protocol_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Protocol_Var_Samp_Order_By>;
  variance?: InputMaybe<Protocol_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "protocol" */
export type Protocol_Arr_Rel_Insert_Input = {
  data: Array<Protocol_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Protocol_On_Conflict>;
};

/** aggregate avg on columns */
export type Protocol_Avg_Fields = {
  __typename?: 'protocol_avg_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "protocol" */
export type Protocol_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "protocol". All fields are combined with a logical 'AND'. */
export type Protocol_Bool_Exp = {
  _and?: InputMaybe<Array<Protocol_Bool_Exp>>;
  _not?: InputMaybe<Protocol_Bool_Exp>;
  _or?: InputMaybe<Array<Protocol_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "protocol" */
export enum Protocol_Constraint {
  /** unique or primary key constraint */
  ProtocolPkey = 'protocol_pkey'
}

/** input type for incrementing numeric columns in table "protocol" */
export type Protocol_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "protocol" */
export type Protocol_Insert_Input = {
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Order_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Protocol_Max_Fields = {
  __typename?: 'protocol_max_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "protocol" */
export type Protocol_Max_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Protocol_Min_Fields = {
  __typename?: 'protocol_min_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "protocol" */
export type Protocol_Min_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "protocol" */
export type Protocol_Mutation_Response = {
  __typename?: 'protocol_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Protocol>;
};

/** on_conflict condition type for table "protocol" */
export type Protocol_On_Conflict = {
  constraint: Protocol_Constraint;
  update_columns?: Array<Protocol_Update_Column>;
  where?: InputMaybe<Protocol_Bool_Exp>;
};

/** Ordering options when selecting data from "protocol". */
export type Protocol_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  order_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** primary key columns input for table: protocol */
export type Protocol_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "protocol" */
export enum Protocol_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "protocol" */
export type Protocol_Set_Input = {
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Protocol_Stddev_Fields = {
  __typename?: 'protocol_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "protocol" */
export type Protocol_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Protocol_Stddev_Pop_Fields = {
  __typename?: 'protocol_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "protocol" */
export type Protocol_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Protocol_Stddev_Samp_Fields = {
  __typename?: 'protocol_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "protocol" */
export type Protocol_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Protocol_Sum_Fields = {
  __typename?: 'protocol_sum_fields';
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "protocol" */
export type Protocol_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** update columns of table "protocol" */
export enum Protocol_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** aggregate var_pop on columns */
export type Protocol_Var_Pop_Fields = {
  __typename?: 'protocol_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "protocol" */
export type Protocol_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Protocol_Var_Samp_Fields = {
  __typename?: 'protocol_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "protocol" */
export type Protocol_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Protocol_Variance_Fields = {
  __typename?: 'protocol_variance_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "protocol" */
export type Protocol_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "carrier" */
  carrier: Array<Carrier>;
  /** fetch aggregated fields from the table: "carrier" */
  carrier_aggregate: Carrier_Aggregate;
  /** fetch data from the table: "carrier" using primary key columns */
  carrier_by_pk?: Maybe<Carrier>;
  /** fetch data from the table: "incident" */
  incident: Array<Incident>;
  /** fetch aggregated fields from the table: "incident" */
  incident_aggregate: Incident_Aggregate;
  /** fetch data from the table: "incident" using primary key columns */
  incident_by_pk?: Maybe<Incident>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "order_carriers" */
  order_carriers: Array<Order_Carriers>;
  /** fetch aggregated fields from the table: "order_carriers" */
  order_carriers_aggregate: Order_Carriers_Aggregate;
  /** fetch data from the table: "order_carriers" using primary key columns */
  order_carriers_by_pk?: Maybe<Order_Carriers>;
  /** fetch data from the table: "protocol" */
  protocol: Array<Protocol>;
  /** fetch aggregated fields from the table: "protocol" */
  protocol_aggregate: Protocol_Aggregate;
  /** fetch data from the table: "protocol" using primary key columns */
  protocol_by_pk?: Maybe<Protocol>;
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


export type Query_RootIncidentArgs = {
  distinct_on?: InputMaybe<Array<Incident_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Incident_Order_By>>;
  where?: InputMaybe<Incident_Bool_Exp>;
};


export type Query_RootIncident_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Incident_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Incident_Order_By>>;
  where?: InputMaybe<Incident_Bool_Exp>;
};


export type Query_RootIncident_By_PkArgs = {
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


export type Query_RootOrder_CarriersArgs = {
  distinct_on?: InputMaybe<Array<Order_Carriers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Carriers_Order_By>>;
  where?: InputMaybe<Order_Carriers_Bool_Exp>;
};


export type Query_RootOrder_Carriers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Carriers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Carriers_Order_By>>;
  where?: InputMaybe<Order_Carriers_Bool_Exp>;
};


export type Query_RootOrder_Carriers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProtocolArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Protocol_Order_By>>;
  where?: InputMaybe<Protocol_Bool_Exp>;
};


export type Query_RootProtocol_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Protocol_Order_By>>;
  where?: InputMaybe<Protocol_Bool_Exp>;
};


export type Query_RootProtocol_By_PkArgs = {
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
  /** fetch data from the table: "incident" */
  incident: Array<Incident>;
  /** fetch aggregated fields from the table: "incident" */
  incident_aggregate: Incident_Aggregate;
  /** fetch data from the table: "incident" using primary key columns */
  incident_by_pk?: Maybe<Incident>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "order_carriers" */
  order_carriers: Array<Order_Carriers>;
  /** fetch aggregated fields from the table: "order_carriers" */
  order_carriers_aggregate: Order_Carriers_Aggregate;
  /** fetch data from the table: "order_carriers" using primary key columns */
  order_carriers_by_pk?: Maybe<Order_Carriers>;
  /** fetch data from the table: "protocol" */
  protocol: Array<Protocol>;
  /** fetch aggregated fields from the table: "protocol" */
  protocol_aggregate: Protocol_Aggregate;
  /** fetch data from the table: "protocol" using primary key columns */
  protocol_by_pk?: Maybe<Protocol>;
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


export type Subscription_RootIncidentArgs = {
  distinct_on?: InputMaybe<Array<Incident_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Incident_Order_By>>;
  where?: InputMaybe<Incident_Bool_Exp>;
};


export type Subscription_RootIncident_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Incident_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Incident_Order_By>>;
  where?: InputMaybe<Incident_Bool_Exp>;
};


export type Subscription_RootIncident_By_PkArgs = {
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


export type Subscription_RootOrder_CarriersArgs = {
  distinct_on?: InputMaybe<Array<Order_Carriers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Carriers_Order_By>>;
  where?: InputMaybe<Order_Carriers_Bool_Exp>;
};


export type Subscription_RootOrder_Carriers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Carriers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Carriers_Order_By>>;
  where?: InputMaybe<Order_Carriers_Bool_Exp>;
};


export type Subscription_RootOrder_Carriers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProtocolArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Protocol_Order_By>>;
  where?: InputMaybe<Protocol_Bool_Exp>;
};


export type Subscription_RootProtocol_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Protocol_Order_By>>;
  where?: InputMaybe<Protocol_Bool_Exp>;
};


export type Subscription_RootProtocol_By_PkArgs = {
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


export type SubscribeOrdersSubscription = { __typename?: 'subscription_root', order: Array<{ __typename?: 'order', id: number, status: string, created_at: any, updated_at: any }> };

export type SubscribeOrderSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeOrderSubscription = { __typename?: 'subscription_root', order: Array<{ __typename?: 'order', id: number, status: string, created_at: any, updated_at: any, protocols: Array<{ __typename?: 'protocol', id: number, user: string, body: string, created_at?: any | null }>, carriers: Array<{ __typename?: 'order_carriers', carrier: { __typename?: 'carrier', id: number, status: string } }> }> };

export type SubscribeCarriersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeCarriersSubscription = { __typename?: 'subscription_root', carrier: Array<{ __typename?: 'carrier', id: number, status: string, customer: string, created_at: any, updated_at: any }> };

export type SubscribeCarrierSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeCarrierSubscription = { __typename?: 'subscription_root', carrier: Array<{ __typename?: 'carrier', id: number, status: string, customer: string, created_at: any, updated_at: any }> };

export type SubscribeIncidentsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeIncidentsSubscription = { __typename?: 'subscription_root', incident: Array<{ __typename?: 'incident', id: number, carrier_id: number, assumption: string, status: string, created_at: any, updated_at: any }> };

export type UpdateCarrierMutationVariables = Exact<{
  id: Scalars['Int'];
  status: Scalars['String'];
}>;


export type UpdateCarrierMutation = { __typename?: 'mutation_root', update_carrier?: { __typename?: 'carrier_mutation_response', affected_rows: number } | null };

export type UpdateIncidentMutationVariables = Exact<{
  id: Scalars['Int'];
  status: Scalars['String'];
}>;


export type UpdateIncidentMutation = { __typename?: 'mutation_root', update_incident?: { __typename?: 'incident_mutation_response', affected_rows: number } | null };


export const SubscribeOrdersDocument = gql`
    subscription SubscribeOrders {
  order {
    id
    status
    created_at
    updated_at
  }
}
    `;

export function useSubscribeOrdersSubscription<TData = SubscribeOrdersSubscription>(options: Omit<Urql.UseSubscriptionArgs<SubscribeOrdersSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<SubscribeOrdersSubscription, TData>) {
  return Urql.useSubscription<SubscribeOrdersSubscription, TData, SubscribeOrdersSubscriptionVariables>({ query: SubscribeOrdersDocument, ...options }, handler);
};
export const SubscribeOrderDocument = gql`
    subscription SubscribeOrder {
  order {
    id
    status
    protocols {
      id
      user
      body
      created_at
    }
    carriers {
      carrier {
        id
        status
      }
    }
    created_at
    updated_at
  }
}
    `;

export function useSubscribeOrderSubscription<TData = SubscribeOrderSubscription>(options: Omit<Urql.UseSubscriptionArgs<SubscribeOrderSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<SubscribeOrderSubscription, TData>) {
  return Urql.useSubscription<SubscribeOrderSubscription, TData, SubscribeOrderSubscriptionVariables>({ query: SubscribeOrderDocument, ...options }, handler);
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
  }
}
    `;

export function useSubscribeCarrierSubscription<TData = SubscribeCarrierSubscription>(options: Omit<Urql.UseSubscriptionArgs<SubscribeCarrierSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<SubscribeCarrierSubscription, TData>) {
  return Urql.useSubscription<SubscribeCarrierSubscription, TData, SubscribeCarrierSubscriptionVariables>({ query: SubscribeCarrierDocument, ...options }, handler);
};
export const SubscribeIncidentsDocument = gql`
    subscription SubscribeIncidents {
  incident {
    id
    carrier_id
    assumption
    status
    created_at
    updated_at
  }
}
    `;

export function useSubscribeIncidentsSubscription<TData = SubscribeIncidentsSubscription>(options: Omit<Urql.UseSubscriptionArgs<SubscribeIncidentsSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<SubscribeIncidentsSubscription, TData>) {
  return Urql.useSubscription<SubscribeIncidentsSubscription, TData, SubscribeIncidentsSubscriptionVariables>({ query: SubscribeIncidentsDocument, ...options }, handler);
};
export const UpdateCarrierDocument = gql`
    mutation UpdateCarrier($id: Int!, $status: String!) {
  update_carrier(where: {id: {_eq: $id}}, _set: {status: $status}) {
    affected_rows
  }
}
    `;

export function useUpdateCarrierMutation() {
  return Urql.useMutation<UpdateCarrierMutation, UpdateCarrierMutationVariables>(UpdateCarrierDocument);
};
export const UpdateIncidentDocument = gql`
    mutation UpdateIncident($id: Int!, $status: String!) {
  update_incident(where: {id: {_eq: $id}}, _set: {status: $status}) {
    affected_rows
  }
}
    `;

export function useUpdateIncidentMutation() {
  return Urql.useMutation<UpdateIncidentMutation, UpdateIncidentMutationVariables>(UpdateIncidentDocument);
};