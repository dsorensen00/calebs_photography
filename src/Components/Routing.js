import React from 'react'
import {BrowserRouter as 
    Router,
    Route,
    Switch
} from 'react-router-dom'
import Gallary from './Gallary'
import Contact from './Contact'
import Home from './Home'


export default ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/gallary" component={Gallary} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    )
}