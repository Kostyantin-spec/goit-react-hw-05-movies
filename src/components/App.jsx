import { Route, Routes } from "react-router-dom";
import Layout from './Layout/SharedLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetailsPage/MoviesDetailsPage'));
const Cast = lazy(() => import('./Cast/CastMovies'));
const Reviews = lazy(() => import('./Reviews/ReviewsMovies'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route part="movies" element={<MoviesPage />} />

        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    <Route path="*" element={<HomePage />} />
   </Routes>
  );
};
