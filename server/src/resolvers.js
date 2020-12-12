import lodash from 'lodash'
import animals from './data.js'
const { find, remove, forOwn } = lodash

const resolvers = {
    Query: {
        Animal(_, args, __, ___) { return find(animals, item => item.id == args.id) },
        Animals() { return animals },
        AnimalLeg(_, args, __, ___) {
            const filteredArray = []
            forOwn(animals, item => {
                item.properties.legs === args.legs ? filteredArray.push(item) : null
            })
            console.log(filteredArray.length)
            if (filteredArray.length != 0) return filteredArray
            else throw new Error(`Couldn’t find any animal with ${args.legs} legs`)
        }
    },

    Mutation: {
        addAnimal(_, args, __, ___) {
            const newArray = {
                id: animals.length + 1,
                name: args.name,
                food: args.food,
                type: args.type,
                properties: {
                    type: args.propertyType,
                    legs: args.legs,
                }
            }
            animals.push(newArray)
            console.log(animals)
            return newArray
        },
        updateAnimal(_, args, __, ___) {
            const array = find(animals, item => item.id = args.id)
            if (array) {
                array.name = args.name
                return array
            } 
            else throw new Error(`No Animal found with id ${args.id}`)
        },
        removeAnimal(_, args, __, ___) {
            const removedArray = find(animals, item => item.id == args.id)
            if (!removedArray) throw new Error(`No Animal found with id ${args.id}`)
            remove(animals, item => item.id == removedArray.id)
            return removedArray
        }
    }
}

export default resolvers