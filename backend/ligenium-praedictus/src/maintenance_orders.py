from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

# Select your transport with a defined url endpoint
transport = AIOHTTPTransport(url="http://localhost:8124/v1/graphql", headers={'x-hasura-admin-secret': 'myadminsecretkey'})

# Create a GraphQL client using the defined transport
client = Client(transport=transport, fetch_schema_from_transport=True)

def create_carrier(carrier_id: str):
    addCarrierQuery = gql(
    """
    mutation MyQuery($carrier_id: Int!, $customer: String!, $status: String!) {
        insert_carrier_one(object: {id: $carrier_id, customer: $customer, status: $status}, on_conflict: { constraint: carrier_pkey, update_columns: [] }) {
            id
        }
    }
    """
    )
    params = {
        "carrier_id": carrier_id,
        "customer": "Porsche", # TODO: get from environment variable
        "status": "active"
    }
    result = client.execute(addCarrierQuery, variable_values=params)

def create_maintenance_order(carrier_id: str, assumption: str) -> None:
    create_carrier(carrier_id)

    # check if we already have a open maintenance order for this carrier
    # TODO filter for same assumption?
    checkExistingOrderQuery = gql(
    """
    query MyQuery($carrier_id: Int!) {
        order(where: {carrier_id: {_eq: $carrier_id}, status: {_neq: "closed"}}) {
            carrier_id
        }
    }
    """
    )
    params = {
        "carrier_id": carrier_id
    }
    result = client.execute(checkExistingOrderQuery, variable_values=params)

    if len(result["order"]) > 0:
        print("Order already exists")
        return

    addOrderQuery = gql(
    """
    mutation MyQuery($carrier_id: Int!, $assumption: String!, $status: String!) {
        insert_order_one(object: {carrier_id: $carrier_id, assumption: $assumption, status: $status}) {
            id
            carrier_id
            assumption
        }
    }
    """
    )
    params = {
        "carrier_id": carrier_id,
        "assumption": assumption,
        "status": "error_detected"
    }
    result = client.execute(addOrderQuery, variable_values=params)
    print(result)
