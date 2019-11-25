import React from "react";
import styled from "@emotion/styled";
import { getDiscoverMovies } from "../api/movies";

//STYLE Start

const Container = styled.div`
  background: white;
  width: 200px;
  height: auto;
  border-radius: 30px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 6px 16px 0px rgba(102, 102, 102, 1);
  align-items: center;
`;

const MovieTitle = styled.h4`
  color: black;
  margin: 5px;
`;

const MovieDescription = styled.p`
  color: black;
  font-size: 0.5em;
  margin: 5px 10px 15px 10px;
`;

const MovieImage = styled.img`
  width: 100%;
  margin: 0;
  border-radius: 30px 30px 0px 0px;
`;
//STYLE End

export default function MovieList({ searchValue }) {
  const [movies, setMovies] = React.useState([]);

  async function refreshMovies() {
    const discoveredMovies = await getDiscoverMovies(searchValue);
    setMovies(discoveredMovies);
  }
  React.useEffect(() => {
    refreshMovies();
  });

  if (!movies) {
    return <MovieTitle>Sorry, no movies found!</MovieTitle>;
  } else {
    return (
      <>
        {movies.map(movie => (
          <Container key={movie.id}>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie image"
            />
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieDescription>{movie.overview}</MovieDescription>
          </Container>
        ))}
      </>
    );
  }
}
