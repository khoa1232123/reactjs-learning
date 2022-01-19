import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { Cart, Catalog, Home, Product } from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:id" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
