import { useState } from 'react';

import css from './form.module.css';

export const FormSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const onInputChange = event => {
    setQuery(event.target.value);
  };

  const onSubmitForm = event => {
    event.preventDefault();
    onSearch({ query });
    setQuery('');
  };

  return (
    <form onSubmit={onSubmitForm} className={css.form}>
      <input
        className={css.input}
        name="name"
        type="text"
        value={query}
        placeholder="Search movies"
        onChange={onInputChange}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};