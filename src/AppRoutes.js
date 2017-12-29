import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {
  HomePageContainer,
  CreatePageContainer,
  AdminPageContainer,
  UnknownPageContainer
} from './components';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const PropsRoute = (
  { component, ...rest } // eslint-disable-line react/prop-types
) => (
  <Route
    {...rest}
    render={routeProps => renderMergedProps(component, routeProps, rest)}
  />
);

const AppRoutes = props => (
  <HashRouter>
    <div>
      <Switch>
        <PropsRoute
          exact
          name="AllProjectsPage"
          title="All Projects"
          path="/"
          component={HomePageContainer}
          {...props}
        />
        <PropsRoute
          name="RedProjectsPage"
          title="Red Projects"
          path="/red"
          component={HomePageContainer}
          {...props}
        />
        <PropsRoute
          name="YellowProjectsPage"
          title="Yellow Projects"
          path="/yellow"
          component={HomePageContainer}
          {...props}
        />
        <PropsRoute
          name="GreenProjectsPage"
          title="Green Projects"
          path="/green"
          component={HomePageContainer}
          {...props}
        />
        <PropsRoute
          name="CreatePage"
          path="/create"
          component={CreatePageContainer}
          {...props}
        />
        <PropsRoute
          name="AdminPage"
          path="/admin"
          component={AdminPageContainer}
          {...props}
        />
        <PropsRoute component={UnknownPageContainer} {...props} />
      </Switch>
    </div>
  </HashRouter>
);

export default AppRoutes;
