import { gql } from '@apollo/client';

//name, email, password, role, phoneNumber

export const ADD_USER = gql`
mutation Mutation($name: String!, $email: String!, $password: String!) {
  addUser(name: $name, email: $email, password: $password) {
    token
    user {
      _id
      name
      email
      password
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
    image
    lng
    lat
    user {
      _id
      name
      email
      password
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
    image
    lat
    lng
    user {
      _id
      name
      email
      password
    }
  }
}

`

export const REMOVE_PET = gql`
 mutation Mutation($id: ID!) {
  removePet(_id: $id) {
    _id
    species
    sex
    breed
    createdAt
    colours
    message
    status
    image
    lng
    lat
    user {
      _id
      name
      email
      password
    }
  }
}
`


