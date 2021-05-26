import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// routes config
import routes from '../routes'
import Loading from '../sections/Loader'

const loading = (
  <Loading />
)

const TheContent = () => {
  return (
    <main className="c-main">
        <Suspense fallback={loading}>
            <Switch>
                {routes.map((route, idx) => {
                    return route.component && (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                                <route.component {...props} />
                            )} />
                    )
                })}
                <Redirect from="/" to="/home" />
            </Switch>
        </Suspense>
    </main>
  )
}

export default TheContent
