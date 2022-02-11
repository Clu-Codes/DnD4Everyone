const { gql } = require( 'apollo-server-express' );

const typeDefs = gql `
    type Character {
        name: String
        race: String
        languages: String
    }

    type Query {
        characters: [Character]
    }
`
module.exports = typeDefs;