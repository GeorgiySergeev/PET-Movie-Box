import { Form, Input, SearchButton } from './SearchForm.styled';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/nav/search.svg';
import { Link } from 'react-router-dom';

export const SearchForm = () => {
  const [query, setQuery] = useState('');

  const onSubmitForm = e => {
    // e.preventDefault();
    console.log('onSubmit');

    if (query.trim() === '') {
      return alert('Please enter a valid search term');
    }

    setQuery('');
  };

  const handleChangeInput = ({ target }) => {
    const newQuery = target.value;
    setQuery(newQuery);
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Input
        type="text"
        name="search"
        value={query}
        autoComplete="off"
        // autoFocus
        placeholder="Search movie..."
        onChange={handleChangeInput}
      />

      <Link
        to={`/search/${query}`}
        type="submit"
        onClick={() => {
          onSubmitForm();
        }}
      >
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </Link>
    </Form>
  );
};
