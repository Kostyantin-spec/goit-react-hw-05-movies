import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormSearch } from 'components/Form/FormSearch';
import { getSearchByKeyword } from 'components/API/api';
import { Loader } from 'components/Loader/LoaderCircles';
import { MoviesList } from 'components/MoviesList/MoviesLists';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const currentKeyword = searchParams.get('query');
    if (!currentKeyword) return;

    const addMoviesByKeyword = async () => {
      try {
        setLoading(true);

        const addMoviesByKeyword = await getSearchByKeyword(currentKeyword);
        setMovies(addMoviesByKeyword);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    addMoviesByKeyword();
  }, [searchParams]);

  return (
    <div>
      <FormSearch onSearch={setSearchParams} />
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
