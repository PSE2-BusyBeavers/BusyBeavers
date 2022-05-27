from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

# Select your transport with a defined url endpoint
transport = AIOHTTPTransport(url="http://localhost:8124/v1/graphql", headers={'x-hasura-admin-secret': 'myadminsecretkey'})

# Create a GraphQL client using the defined transport
client = Client(transport=transport, fetch_schema_from_transport=True)

def create_maintenance_order(carrier_id: str, assumption: str) -> None:
    checkExistingOrderQuery = gql(
    """
    query MyQuery($carrier_id: String!) {
        maintenance_orders(where: {carrier_id: {_eq: $carrier_id}}) {
            carrier_id
        }
    }
    """
    )
    params = {
        "carrier_id": "14"
    }
    result = client.execute(checkExistingOrderQuery, variable_values=params)

    if len(result["maintenance_orders"]) > 0:
        print("Order already exists")
        return

    addOrderQuery = gql(
    """
    mutation MyQuery($carrier_id: String!, $assumption: String!) {
        insert_maintenance_orders_one(object: {carrier_id: $carrier_id, assumption: $assumption}) {
            id
            carrier_id
            assumption
        }
    }
    """
    )
    params = {
        "carrier_id": carrier_id,
        "assumption": assumption
    }
    result = client.execute(addOrderQuery, variable_values=params)
    print(result)
