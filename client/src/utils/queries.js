import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Query {
  me {
    ... on User {
      _id
      name
      email
      password
      phoneNumber
      role
      petsSeen {
        _id
        species
        sex
        breed
        createdAt
        message
        status
        colours
        lng
        lat
      }
    }
    ... on Owner {
      _id
      name
      email
      password
      phoneNumber
      role
      petsSeen {
        _id
        species
        sex
        breed
        createdAt
        colours
        message
        status
        lng
        lat
      }
      petsLost {
        _id
        species
        sex
        breed
        createdAt
        colours
        message
        status
        lng
        lat
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
    status
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
    status
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