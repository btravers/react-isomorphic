import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Title from './Title'
import Articles from './Articles'
import Article from './Article'
import NotFound from './NotFound'

export default () => (
    <div>
      <Title />
      <Switch>
        <Route exact path='/' component={Articles} />
        <Route path='/:id' component={Article} />
        <Route component={NotFound}/>
      </Switch>
    </div>
)
