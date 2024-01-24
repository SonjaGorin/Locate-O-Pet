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

export const ADD_PET = gql`

`

export const REMOVE_PET = gql`
mutation RemovePet($id: ID!) {
  removePet(_id: $id) {
    ... on User {
      petsSeen {
        _id
        species
        sex
        breed
        createdAt
        colours
      }
    }
    ... on Owner {
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
}
`