// App.js
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const KAIKKI_KIRJAT = gql`
  query {
    kaikkiKirjat {
      nimi
      kirjoittaja
      julkaistu
    }
  }
`;

const Kirjat = () => {
  const { loading, error, data } = useQuery(KAIKKI_KIRJAT);

  if (loading) return <p>Ladataan...</p>;
  if (error) return <p>Virhe: {error.message}</p>;

  return (
    <div>
      <h2>Kirjat</h2>
      <ul>
        {data.kaikkiKirjat.map((k, index) => (
          <li key={index}>
            {k.nimi} – {k.kirjoittaja} ({k.julkaistu})
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>GraphQL Kirjasovellus</h1>
      <Kirjat />
    </div>
  </ApolloProvider>
);

export default App;
