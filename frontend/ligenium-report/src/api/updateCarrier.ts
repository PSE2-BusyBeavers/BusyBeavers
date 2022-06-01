import gql from 'graphql-tag';
import { useMutation } from 'urql';

const SET_STATUS = gql`
mutation updateCarrier($status: String!) {
  updateCarrier(input: $status) {
    carrier {
      status
    }
  }
}
`;

const setStatus = (id: string, status: string) => {
  const [addTodo] = useMutation(SET_STATUS); 

  addTodo({variables: { status }})
  
}

export { setStatus };