const typeDefs = `

scalar Date

type Owner {
    _id: ID,
    userName: String,
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    role: String!,
    petsLost: [Pet]
}

type User {
    _id: ID,
    userName: String,
    name: String, 
    email: String,
    password: String,
    phoneNumber: String,
    role: String!,
    petsSeen: [Pet]
}

type Pet {
    _id: ID,
    species: String,
    sex: String,
    breed: String,
    createdAt: Date,
    colours: [String]
}

input petArgs {
    species: String,
    sex: String,
    breed: String,
    createdAt: Date,
    colours: [String]
}

union UserOrOwner = User | Owner


type Auth {
    token: ID!
    user: UserOrOwner
  }

  
  type Query {
    me: UserOrOwner,
    owners: [Owner],
    users: [User]
}


type Mutation {
   
    addUser(userName: String!, name: String!, email: String!, password: String!, role: String!, phoneNumber: String!): Auth
    login(email: String!, password: String!, role: String!): Auth

    addPet(input: petArgs): UserOrOwner
    removePet(_id: ID!): UserOrOwner
}



`;

module.exports = typeDefs;
