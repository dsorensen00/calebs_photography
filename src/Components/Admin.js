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
        name : '',
        _id:'',
        phone:'',
        email:'',
        password:''
    }

    
    fetchUsers = async () => {
        await fetch(`${this.apiURL}/admin`) 
            .then( response =>  response.json() )
            .then( data => data.map(element => {
            return (
            <div className="container">
                <div>
                    <div>Request ID: {element._id}</div>
                    <div>Name: {element.name}</div>
                    <div>Email: {element.email}</div>
                </div>
            </div>)
        }))
            .then(components => this.setState({ users : components}))
            .catch(function (error) {
            console.log(error)
            });
    }

    componentDidMount(){
        this.fetchUsers();
   // console.log(this.state)
    }

    render(){
        

        return(
            <>
                <div className="container">
                    <div className="row">
                        <input type="button" onClick={this.fetchUsers} className="btn btn-primary toppy"/>
                        
                    </div>
                    <div className="">
                        {this.state.users}
                    </div>
                </div>
            </>
        )
}
}