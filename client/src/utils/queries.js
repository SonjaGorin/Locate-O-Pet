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

export const QUERY_PETID = gql`
query Query($id: ID!) {
  petById(_id: $id) {
    _id
    species
    sex
    breed
    createdAt
    colours
    message
    lat
    lng
    owner {
      _id
      name
      email
      password
      phoneNumber
      role
    }
    user {
      _id
      name
      email
      password
      phoneNumber
      role
    }
  }
}
`

export const QUERY_ALLPETS = gql`
query Query {
  allPets {
    _id
    species
    sex
    breed
    createdAt
    colours
    message
    lng
    lat
    owner {
      _id
      name
      email
      password
      phoneNumber
      role
    }
    user {
      _id
      name
      email
      password
      phoneNumber
      role
    }
  }
}
`