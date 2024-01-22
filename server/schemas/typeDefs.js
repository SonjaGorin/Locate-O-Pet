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
    petsSeen: [Pet]
}

type Pet {
    _id: ID,
    species: String,
    sex: String,
    breed: String,
    colours: [String]
}

input petArgs {
    species: String,
    sex: String,
    breed: String,
    colours: [String]
}

type Auth {
    token: ID!
    user: UserOrOwner
  }

  type Query {
    me: UserOrOwner
}



type Mutation {
    addUser(userName: String!, name: String!, email: String!, password: String!, phoneNumber: String!): Auth

    login(email: String!, password: String!): Auth

    addPet(input: petArgs): UserOrOwner
    removePet(input: petArgs): UserOrOwner
}

union UserOrOwner = User | Owner


`;

module.exports = typeDefs;
