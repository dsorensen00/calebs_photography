import React, {Component} from 'react'


export default class extends Component{

    // then(onfulfilled?: (value: Response) => Response | PromiseLike<Response>, onrejected?: (reason: any) => PromiseLike<never>): Promise<Response>
    // The callback to execute when the Promise is resolved.
    
    //mailchimp to take registered users and email them newsletter
    
    // Attaches callbacks for the resolution and/or rejection of the Promise.
    // @returns — A Promise for the completion of which ever callback is executed.
    apiURL = 'http://localhost:4000'

    state = {
        users : [],
    }

  
    
    fetchUsers = async () => {
        await fetch(`${this.apiURL}/admin`) 
            .then( response =>  response.json() )
            .then( data => data.map(element => {
            return (
            <div className="container">
                <div className="col-lg-6">
                    <div><strong>Request ID:</strong> <span className="colors">{element._id}</span></div>
                    <div><strong>Status: </strong>{element.status}</div>
                    <div><strong>Name:</strong> {element.name}</div>
                    <div><strong>Email:</strong> {element.email}</div>
                    <div><strong>Phone:</strong> {element.phone}</div>
                    
                </div>
                <div className="container col-lg-6 ">
                    <div>Subject: {element.subject}</div>
                    <br/>
                    <div>Request: {element.request}</div>
                </div>
                <br/>
                <form className="text-right">
                    <button type="submit" className="btn btn-danger">HASTA LA VISTA
                    </button>
                </form>
                <br/>
                <hr/>
            </div>)
        }))
            .then(components => this.setState({ users : components}))
            .catch(function (error) {
            console.log(error)
            });
    }

    componentDidMount(){
        this.fetchUsers()
   // console.log(this.state)
    }
    
    
    
    //ADD AN EVENT LISTENER TO LISTEN FOR A FORM SUBMIT, WHICH WILL
    //BE OUR DELETE BUTTON, THEN EXECUTE OUR DELETE!





    render(){
        

        return(
            <>
                <div className="container form">
                    <div className="row">
                        <button type="button" onClick={this.fetchUsers} className="btn btn-primary toppy">Refresh</button>
                        
                    </div>
                    <div className="">
                        {this.state.users}
                    </div>
                </div>
            </>
        )
}
}