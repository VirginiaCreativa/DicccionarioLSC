import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from '../common/Spinner/Spinner';

// const NotFound = lazy(() => import('../containers/NotFound'));
const Home = lazy(() => import('../containers/Home'));
// const Landing = lazy(() => import('../containers/Landing'));
const Marcadores = lazy(() => import('../containers/Marcadores'));
const Vocabulario = lazy(() => import('../containers/Vocabulario'));

const Routers = () => (
  <>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/marcadores" component={Marcadores} />
        <Route exact path="/vocabulario" component={Vocabulario} />
        {/* <Route exact path="/landing" component={Landing} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Suspense>
  </>
);

export default Routers;
