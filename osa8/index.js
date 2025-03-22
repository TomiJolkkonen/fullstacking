// index.js
const { ApolloServer, gql } = require('apollo-server');

const kirjat = [
  {
    nimi: 'GraphQL kaikille',
    kirjoittaja: 'Matti Meikäläinen',
    julkaistu: 2020,
    id: '1',
  },
  {
    nimi: 'React ja GraphQL',
    kirjoittaja: 'Maija Mallikas',
    julkaistu: 2019,
    id: '2',
  },
];

const typeDefs = gql`
  type Kirja {
    nimi: String!
    kirjoittaja: String!
    julkaistu: Int!
    id: ID!
  }

  type Query {
    kaikkiKirjat: [Kirja!]!
  }
`;

const resolvers = {
  Query: {
    kaikkiKirjat: () => kirjat,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Palvelin käynnissä osoitteessa ${url}`);
});
