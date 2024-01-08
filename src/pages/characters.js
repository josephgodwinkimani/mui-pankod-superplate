import { gql, useQuery } from '@apollo/client';
import React from "react";

const GET_CHARACTERS = gql`
query Query {
  characters(page: 2, filter: { name: "Morty" }) {
    info {
      count
    }
    results {
	  id
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
`;

export default function DisplayCharacters() {
	const { loading, error, data } = useQuery(GET_CHARACTERS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return data.characters.results.map(({ id, name }) => (
		<div key={id}>
			<h3>{name}</h3>
		</div>
	));
}