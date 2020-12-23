import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, LayoutAdmin } from '../components';
import {
  Abouts,
  AdminEmpty,
  CategoryAdmin,
  Dashboard,
  Home,
  Login,
  ProductDetails,
  Shop,
} from '../containers';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Router>
      <Switch>
        {/* frontend layout normal */}
        <Route path="/login" component={Login} />
        <Route path="/admin/:path?" exact>
          <LayoutAdmin>
            <Switch>
              <Route path="/admin" exact component={Dashboard} />
              <Route path="/admin/categories" exact component={CategoryAdmin} />
              <Route path="/admin/*" exact component={AdminEmpty} />
            </Switch>
          </LayoutAdmin>
        </Route>
        <Route>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/abouts" exact component={Abouts} />
              <Route path="/shop" exact component={Shop} />
              <Route
                path="/product/:productId"
                exact
                component={ProductDetails}
              />
              <Route component={() => <div>404 Main</div>} exact path="/*" />
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};
