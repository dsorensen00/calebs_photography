import React, {Component} from 'react'


export default class extends Component{


    
    //mailchimp to take registered users and email them newsletter
    
    // Attaches callbacks for the resolution and/or rejection of the Promise.
    // @returns — A Promise for the completion of which ever callback is executed.
    apiURL = 'http://localhost:4000'

    state = {
        users : [],
        status: ""
    }

    deleteMe = this.state.users

    delReq = (e) => {
        fetch(`${this.apiURL}/admin`, {
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({_id: e})
        })
        

    }

    updateUser = (e, iD) =>{
        fetch(`${this.apiURL}/admin`, {
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                _id: iD,
                status: e.target.value
            })
        })
    }
    
    fetchUsers = async () => {
        await fetch(`${this.apiURL}/admin`) 
            .then( response =>  response.json() )
            .then( data => data.map((element,index) => {
            return (
            <div key={index} className="container">
                <div className="col-lg-6">
                    <div><strong>Name:</strong> {element.name}</div>
                    <div>
                        <strong>Status: </strong><br/>
                        <form>   
                            <select onChange={e=>this.updateUser(e, element._id )}>
                                <option value="">{element.status}</option>
                                <option value="New" name="New">New</option>
                                <option value="Pending" name="Pending">Pending</option>
                                <option value="Done" name="Done">Done</option>
                            </select>
                        </form>
                    </div>
                    <div><strong>Email:</strong> {element.email}</div>
                    <div><strong>Phone:</strong> {element.phone}</div>
                    
                </div>
                <div className="container col-lg-6 ">
                    <div><strong>Subject: </strong>{element.subject}</div>
                    <br/>
                    <div><strong>Request: </strong>{element.request}</div>
                </div>
                <br/>
                    <button type="button" name={element._id} onClick={e => this.delReq(e.target.name)} className="btn btn-danger">HASTA LA VISTA</button>
                <br/>
                <hr/>
            </div>)
        }))
            .then(components => this.setState({users: components}))
            // .then(components=>document.getElementById('momma').innerHTML=components)
            .catch(function (error) {
            console.log(error)
            });
    }

    componentDidMount(){
        this.fetchUsers()
    }
    
    
    render(){


        return(
            <>
                <div className="container form">
                    <div className="topper" id="momma">
                        {this.state.users}
                        
                        
                    </div>
                </div>
            </>
        )
}
}