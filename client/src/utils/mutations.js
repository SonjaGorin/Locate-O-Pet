import { gql } from '@apollo/client';

//name, email, password, role, phoneNumber

export const ADD_USER = gql`
mutation Mutation($name: String!, $email: String!, $password: String!, $phoneNumber: String!) {
  addUser(name: $name, email: $email, password: $password, phoneNumber: $phoneNumber) {
    token
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

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
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

export const ADD_SEENPET = gql`
mutation AddSeenPet($input: petArgs) {
  addSeenPet(input: $input) {
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
    status
    lat
    lng
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

export const REMOVE_PET = gql`
  removePet(_id: $id) {
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


