import React, { FC, useEffect, useState } from 'react'
import './App.css'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import Main from '../main/main'

const App: FC = () => {
  const [token, setToken] = useState<string>('')
  // const { pathRest } = useParams<{ pathRest: string }>()
  const pathRest = 'portfoilo'
  const history = useHistory()
  if (
    history.location.pathname !== '/portfoilo'
  ) {
    localStorage.setItem('initialRoute', history.location.pathname)
  }

  useEffect(() => {
    // @ts-expect-error
    setToken(localStorage.getItem('token'))
  }, [token])

  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact={true}>
          <Redirect to={{ pathname: `/${pathRest}/main` }} />
        </Route>
        <Route path={`/${pathRest}/main`} exact={true}>
          <Main token={token} pathRest={pathRest} setToken={setToken} />
        </Route>
        <Route path={'/portfoilo'} exact>
          <Redirect to={`/${pathRest}/main`} />
        </Route>
        <Route path={'*'} exact>
          <Redirect to={`/${pathRest}/main`} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
