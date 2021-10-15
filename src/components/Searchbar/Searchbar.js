import { useState } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';
import Container from '../Container';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');
  const handleSubmitForm = e => {
    e.preventDefault();

    if (!query) {
      toast.error('Please, enter your request!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };
  const handleChangeQuery = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };
  return (
    <header className={s.Searchbar}>
      <Container>
        <form onSubmit={handleSubmitForm} className={s.Form}>
          <button type="submit" className={s.Button}>
            <span className={s.Label}>Search</span>
          </button>

          <input
            className={s.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChangeQuery}
            value={query}
          />
        </form>
      </Container>
    </header>
  );
}
