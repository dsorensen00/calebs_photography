import React from 'react'
import {BrowserRouter as 
    Router,
    Route,
    Switch
} from 'react-router-dom'
import Gallery from './Gallery'
import Contact from './Contact'
import Home from './Home'
import Schedule from './Schedule'
import Admin from './Admin'



export default ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contact" component={Contact} />
                <Route path="/schedule" component={Schedule} />
                <Route path="/admin" component={Admin} />
            </Switch>
        </Router>
    )
}