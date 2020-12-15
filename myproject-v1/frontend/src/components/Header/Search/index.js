import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const Search = () => {
  return (
    <Form inline className="mr-auto">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  );
};

export default Search;
