const typeDefs = `

scalar Date

type Owner {
    _id: ID,
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    role: String!,
    petsLost: [Pet],
    petsSeen: [Pet]
}

type User {
    _id: ID,
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
    colours: [String],
    message: String,
    lng: Float,
    lat: Float,
    owner: Owner,
    user: User

}

input petArgs {
    species: String,
    sex: String,
    breed: String,
    createdAt: Date,
    colours: [String],
    message: String,
    lng: Float,
    lat: Float

}

union UserOrOwner = User | Owner


type Auth {
    token: ID!
    user: UserOrOwner
  }

  
  type Query {
    me: UserOrOwner
}


type Mutation {
   
    addUser(name: String!, email: String!, password: String!, role: String!, phoneNumber: String!): Auth
    login(email: String!, password: String!, role: String!): Auth


    addPet(input: petArgs): Pet
    addLostPet(input: petArgs): Pet
    removePet(_id: ID!): Pet
    removeLostPet(_id: ID!): Pet
}



`;

module.exports = typeDefs;
