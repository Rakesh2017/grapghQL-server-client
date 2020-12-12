import { gql } from '@apollo/client'

export const GET_ANIMALS = gql`
  {
    Animals {
      id
      name
      food
      type
      properties {
        type
        legs
      }
    }
  }
`

export const GET_ANIMAL_NAME = gql`
  {
    Animals {
      name
  }
`

export const GET_ANIMAL = gql`
 query animal($id: Int!) {
    Animal(id: $id) {
      id
      name
      food
      type
      properties {
        type
        legs
      }
    }
  }
`

export const ADD_ANIMAL = gql`
  mutation AddAnimal($name: String, $type: String) {
    addAnimal(name: $name, type:$type) {
      id
      name
      type
    }
  }
`

export const GET_CONTACTS = gql`
  {
    contacts {
      id
      firstName
      lastName
    }
  }
`

export const ADD_CONTACT = gql`
  mutation AddContact($id: String!, $firstName: String!, $lastName: String!) {
    addContact(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const UPDATE_CONTACT = gql`
  mutation UpdateContact(
    $id: String!
    $firstName: String!
    $lastName: String!
  ) {
    updateContact(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const REMOVE_CONTACT = gql`
  mutation RemoveContact($id: String!) {
    removeContact(id: $id) {
      id
      firstName
      lastName
    }
  }
`
