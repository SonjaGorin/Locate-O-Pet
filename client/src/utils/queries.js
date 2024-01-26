import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Query {
  me {
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
    lng
    lat
    user {
      _id
      name
      email
      password
      phoneNumber
    }
  }
}

`

export const QUERY_ALLPETS = gql`
query AllPets {
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
    user {
      _id
      name
      email
      password
      phoneNumber
    }
  }
}
`