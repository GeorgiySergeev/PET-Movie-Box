import { Form, Input, SearchButton } from './SearchForm.styled';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/nav/search.svg';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmitForm = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return alert('Please enter a valid search term');
    }
    onSubmit(query);
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
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </Form>
  );
};
