import React from 'react';

// Views
const Home                  = React.lazy(() => import('./views/Home'));
const NewsListing           = React.lazy(() => import('./views/NewsListing'));
const Details               = React.lazy(() => import('./views/Details'));

const routes = [

    { path: '/home',        name: 'Home',       component: Home },
    { path: '/news',        name: 'News',       component: NewsListing },
    { path: '/details',     name: 'Details',    component: Details },

];

export default routes;
