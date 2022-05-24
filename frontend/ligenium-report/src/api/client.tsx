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
  uuid: any;
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

/** columns and relationships of "maintenance_orders" */
export type Maintenance_Orders = {
  __typename?: 'maintenance_orders';
  assumption: Scalars['String'];
  carrier_id: Scalars['String'];
  id: Scalars['uuid'];
};

/** aggregated selection of "maintenance_orders" */
export type Maintenance_Orders_Aggregate = {
  __typename?: 'maintenance_orders_aggregate';
  aggregate?: Maybe<Maintenance_Orders_Aggregate_Fields>;
  nodes: Array<Maintenance_Orders>;
};

/** aggregate fields of "maintenance_orders" */
export type Maintenance_Orders_Aggregate_Fields = {
  __typename?: 'maintenance_orders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Maintenance_Orders_Max_Fields>;
  min?: Maybe<Maintenance_Orders_Min_Fields>;
};


/** aggregate fields of "maintenance_orders" */
export type Maintenance_Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Maintenance_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "maintenance_orders". All fields are combined with a logical 'AND'. */
export type Maintenance_Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Maintenance_Orders_Bool_Exp>>;
  _not?: InputMaybe<Maintenance_Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Maintenance_Orders_Bool_Exp>>;
  assumption?: InputMaybe<String_Comparison_Exp>;
  carrier_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "maintenance_orders" */
export enum Maintenance_Orders_Constraint {
  /** unique or primary key constraint */
  MaintanceOrdersPkey = 'maintance_orders_pkey'
}

/** input type for inserting data into table "maintenance_orders" */
export type Maintenance_Orders_Insert_Input = {
  assumption?: InputMaybe<Scalars['String']>;
  carrier_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Maintenance_Orders_Max_Fields = {
  __typename?: 'maintenance_orders_max_fields';
  assumption?: Maybe<Scalars['String']>;
  carrier_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Maintenance_Orders_Min_Fields = {
  __typename?: 'maintenance_orders_min_fields';
  assumption?: Maybe<Scalars['String']>;
  carrier_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "maintenance_orders" */
export type Maintenance_Orders_Mutation_Response = {
  __typename?: 'maintenance_orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Maintenance_Orders>;
};

/** on_conflict condition type for table "maintenance_orders" */
export type Maintenance_Orders_On_Conflict = {
  constraint: Maintenance_Orders_Constraint;
  update_columns?: Array<Maintenance_Orders_Update_Column>;
  where?: InputMaybe<Maintenance_Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "maintenance_orders". */
export type Maintenance_Orders_Order_By = {
  assumption?: InputMaybe<Order_By>;
  carrier_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: maintenance_orders */
export type Maintenance_Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "maintenance_orders" */
export enum Maintenance_Orders_Select_Column {
  /** column name */
  Assumption = 'assumption',
  /** column name */
  CarrierId = 'carrier_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "maintenance_orders" */
export type Maintenance_Orders_Set_Input = {
  assumption?: InputMaybe<Scalars['String']>;
  carrier_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "maintenance_orders" */
export enum Maintenance_Orders_Update_Column {
  /** column name */
  Assumption = 'assumption',
  /** column name */
  CarrierId = 'carrier_id',
  /** column name */
  Id = 'id'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "maintenance_orders" */
  delete_maintenance_orders?: Maybe<Maintenance_Orders_Mutation_Response>;
  /** delete single row from the table: "maintenance_orders" */
  delete_maintenance_orders_by_pk?: Maybe<Maintenance_Orders>;
  /** insert data into the table: "maintenance_orders" */
  insert_maintenance_orders?: Maybe<Maintenance_Orders_Mutation_Response>;
  /** insert a single row into the table: "maintenance_orders" */
  insert_maintenance_orders_one?: Maybe<Maintenance_Orders>;
  /** update data of the table: "maintenance_orders" */
  update_maintenance_orders?: Maybe<Maintenance_Orders_Mutation_Response>;
  /** update single row of the table: "maintenance_orders" */
  update_maintenance_orders_by_pk?: Maybe<Maintenance_Orders>;
};


/** mutation root */
export type Mutation_RootDelete_Maintenance_OrdersArgs = {
  where: Maintenance_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Maintenance_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Maintenance_OrdersArgs = {
  objects: Array<Maintenance_Orders_Insert_Input>;
  on_conflict?: InputMaybe<Maintenance_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Maintenance_Orders_OneArgs = {
  object: Maintenance_Orders_Insert_Input;
  on_conflict?: InputMaybe<Maintenance_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Maintenance_OrdersArgs = {
  _set?: InputMaybe<Maintenance_Orders_Set_Input>;
  where: Maintenance_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Maintenance_Orders_By_PkArgs = {
  _set?: InputMaybe<Maintenance_Orders_Set_Input>;
  pk_columns: Maintenance_Orders_Pk_Columns_Input;
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

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "maintenance_orders" */
  maintenance_orders: Array<Maintenance_Orders>;
  /** fetch aggregated fields from the table: "maintenance_orders" */
  maintenance_orders_aggregate: Maintenance_Orders_Aggregate;
  /** fetch data from the table: "maintenance_orders" using primary key columns */
  maintenance_orders_by_pk?: Maybe<Maintenance_Orders>;
};


export type Query_RootMaintenance_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Maintenance_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Maintenance_Orders_Order_By>>;
  where?: InputMaybe<Maintenance_Orders_Bool_Exp>;
};


export type Query_RootMaintenance_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Maintenance_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Maintenance_Orders_Order_By>>;
  where?: InputMaybe<Maintenance_Orders_Bool_Exp>;
};


export type Query_RootMaintenance_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "maintenance_orders" */
  maintenance_orders: Array<Maintenance_Orders>;
  /** fetch aggregated fields from the table: "maintenance_orders" */
  maintenance_orders_aggregate: Maintenance_Orders_Aggregate;
  /** fetch data from the table: "maintenance_orders" using primary key columns */
  maintenance_orders_by_pk?: Maybe<Maintenance_Orders>;
};


export type Subscription_RootMaintenance_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Maintenance_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Maintenance_Orders_Order_By>>;
  where?: InputMaybe<Maintenance_Orders_Bool_Exp>;
};


export type Subscription_RootMaintenance_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Maintenance_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Maintenance_Orders_Order_By>>;
  where?: InputMaybe<Maintenance_Orders_Bool_Exp>;
};


export type Subscription_RootMaintenance_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type SubscribeMaintenanceOrdersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeMaintenanceOrdersSubscription = { __typename?: 'subscription_root', maintenance_orders: Array<{ __typename?: 'maintenance_orders', id: any, carrier_id: string, assumption: string }> };


export const SubscribeMaintenanceOrdersDocument = gql`
    subscription SubscribeMaintenanceOrders {
  maintenance_orders {
    id
    carrier_id
    assumption
  }
}
    `;

export function useSubscribeMaintenanceOrdersSubscription<TData = SubscribeMaintenanceOrdersSubscription>(options: Omit<Urql.UseSubscriptionArgs<SubscribeMaintenanceOrdersSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<SubscribeMaintenanceOrdersSubscription, TData>) {
  return Urql.useSubscription<SubscribeMaintenanceOrdersSubscription, TData, SubscribeMaintenanceOrdersSubscriptionVariables>({ query: SubscribeMaintenanceOrdersDocument, ...options }, handler);
};