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

export const QUERY_OWNER = gql`
query Query {
  owners {
    petsLost {
      _id
      species
      sex
      breed
      createdAt
      colours
    }
  }
}
`

export const QUERY_USER = gql`
query Query {
  users {
    petsSeen {
      _id
      species
      sex
      breed
      createdAt
      colours
    }
  }
}
`