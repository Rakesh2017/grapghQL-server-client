import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Properties {
    type: String,
    legs: Int
  }

  type Animal {
    id: Int!,
    name: String
    food: String,
    type: String,
    properties: Properties
  }

  type Query {
    Animal(id: Int!): Animal
    Animals: [Animal]
    AnimalLeg(legs: Int!) : [Animal]
  } 
  
  type Mutation {
    addAnimal(name:String, food:String, type:String, propertyType:String, legs:Int): Animal
    updateAnimal(id:Int!, name:String, food:String, type:String, propertyType:String, legs:Int): Animal
    removeAnimal(id: Int!): Animal
  }
`

export default typeDefs
