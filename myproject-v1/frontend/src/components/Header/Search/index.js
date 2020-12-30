import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setSearchProduct } from '../../../redux/actions';

const Search = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    if (search) {
      dispatch(setSearchProduct(search));
    }
  };
  return (
    <Form inline className="mr-auto" onSubmit={(e) => handleSubmit(e)}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit" variant="outline-info">
        Search
      </Button>
    </Form>
  );
};

export default Search;
