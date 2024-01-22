const typeDefs = `

type Owner {
    _id: ID,
    userName: String,
    name: String,
    email: String,
    password: String,
    address: String,
    phoneNumber: String,
    petsLost: [Pet]
}

type User {
    _id: ID,
    username: String,
    name: String, 
    email: String,
    password: String,
    phoneNumber: String,
    petsSeen: [pet]
}

type Pet {
    _id: ID,
    species: String,
    sex: String,
    breed: String,
    colours: [String]
}

type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
}

type Mutation {
    addUser(userName: String!, name: String!, email: String!, password: String!, phoneNumber: String!): Auth
    addOwner(username: String!, name: String!, email: String!, password: String!, address: String!, phoneNumber: String!): Auth

    login(email: String!, password: String!): Auth

    addPet(species: String!, sex: String!, breed: String!, colours: [String!])
    removePet(species: String!, sex: String!, breed: String!, colours: [String!])
}

`;

module.exports = typeDefs;
