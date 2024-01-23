import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
  me {
    ... on User {
      _id
      userName
      name
      email
      password
      phoneNumber
      role
      petsSeen {
        _id
      }
    }
    ... on Owner {
      _id
      userName
      name
      email
      password
      phoneNumber
      role
      petsLost {
        _id
      }
    }
  }
}
`