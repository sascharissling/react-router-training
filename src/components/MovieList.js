import React from "react";
import styled from "@emotion/styled";
import { getDiscoverMovies } from "../api/movies";

//STYLE Start

const Container = styled.div`
  background: white;
  width: 200px;
  height: auto;
  border-radius: 30px;
  padding: 15px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 6px 16px 0px rgba(102, 102, 102, 1);
`;

const MovieTitle = styled.h4`
  color: black;
`;

const MovieDescription = styled.p`
  color: black;
  font-size: 0.5em;
`;

const MovieImage = styled.img`
  width: 100px;
`;
//STYLE End

export default function MovieList() {
  const [movies, setMovies] = React.useState([]);

  console.log(movies);
  async function refreshMovies() {
    const discoveredMovies = await getDiscoverMovies();
    setMovies(discoveredMovies);
  }
  React.useEffect(() => {
    refreshMovies();
  }, []);

  return (
    <>
      {movies.map(movie => (
        <Container key={movie.id}>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDescription>{movie.overview}</MovieDescription>
        </Container>
      ))}
    </>
  );
}
