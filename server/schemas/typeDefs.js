const typeDefs = `

scalar Date


type User {
    _id: ID,
    name: String, 
    email: String,
    password: String,
    petsSeen: [Pet],
    petsLost: [Pet]
}

type Pet {
    _id: ID,
    species: String,
    sex: String,
    breed: String,
    createdAt: Date,
    colours: [String],
    message: String,
    status: String,
    img: String,
    lng: Float,
    lat: Float,
    user: User

}

input petArgs {
    species: String,
    sex: String,
    breed: String,
    createdAt: Date,
    colours: [String],
    message: String,
    status: String,
    img: String,
    lng: Float,
    lat: Float

}

type Auth {
    token: ID!
    user: User
  }

  
  type Query {
    me: User
    petById(_id: ID!): Pet
    allPets: [Pet]
    userEmail(email: String!): Boolean
}


type Mutation {
   
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth


    addSeenPet(input: petArgs): Pet
    addLostPet(input: petArgs): Pet
    removePet(_id: ID!): Pet
}



`;

module.exports = typeDefs;
