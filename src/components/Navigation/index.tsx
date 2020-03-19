import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LayoutOne } from '@/components/LayoutOne';
import { LayoutTwo } from '@/components/LayoutTwo';
import { LayoutThree } from '@/components/LayoutThree';

export function Navigation() {
  return <Switch>
    <Route path="/layout-one" component={LayoutOne} />
    <Route path="/layout-two" component={LayoutTwo} />
    <Route path="/layout-three" component={LayoutThree} />
    <Redirect to="/layout-one" />
  </Switch>
}
