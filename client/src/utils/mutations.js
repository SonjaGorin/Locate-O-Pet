import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($userName: String!, $name: String!, $email: String!, $password: String!, $role: String!, $phoneNumber: String!) {
  addUser(userName: $userName, name: $name, email: $email, password: $password, role: $role, phoneNumber: $phoneNumber) {
    token
    user {
      ... on User {
        email
        password
      }
      ... on Owner {
        email
        password
      }
    }
  }
}
`

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!, $role: String!) {
  login(email: $email, password: $password, role: $role) {
    token
    user {
      ... on User {
        email
        password
      }
      ... on Owner {
        email
        password
      }
    }
  }
}
`

export const ADD_SEENPET = gql`
mutation Mutation($input: petArgs) {
  addSeenPet(input: $input) {
    _id
    species
    sex
    breed
    createdAt
    message
    colours
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

export const ADD_LOSTPET = gql`
mutation AddLostPet($input: petArgs) {
  addLostPet(input: $input) {
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
    }
  }
`

export const REMOVE_SEENPET = gql`
mutation Mutation($id: ID!) {
  removeSeenPet(_id: $id) {
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

export const REMOVE_LOSTPET = gql`
mutation RemoveLostPet($id: ID!) {
  removeLostPet(_id: $id) {
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
  }
}
`
