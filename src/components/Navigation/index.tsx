import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LayoutOne } from '@/components/LayoutOne';
import { LayoutTwo } from '@/components/LayoutTwo';

export function Navigation() {
  return (
    <Switch>
      <Route path="/layout-one" component={LayoutOne} />
      <Route path="/layout-two" component={LayoutTwo} />
      <Redirect to="/layout-one" />
    </Switch>
  );
}
