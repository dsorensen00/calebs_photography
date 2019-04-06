import React from 'react'
import {BrowserRouter as 
    Router,
    Route,
    Switch
} from 'react-router-dom'
import Gallery from './Gallery'
import Contact from './Contact'
import Home from './Home'
import Schedule from './Schedule';



export default ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/gallery" component={Gallery} />
                <Route path="/contact" component={Contact} />
                <Route path="/schedule" component={Schedule} />
            </Switch>
        </Router>
    )
}