import React, {Component} from 'react'
// import styled from 'styled-components'


export default class extends Component {

    state={
        name: '',
        status:'New',
        phone: '',
        email: '',
        subject: '',
        request:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:4000`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(this.state)
        })
    }


    render(){

        return(
            <>
                <div className="contactMain">
                    <div className="gogglefont">
                        <h1 className="sticky-margin">Contact</h1>
                    </div>
                    <form className="container col-sm-10 col-md-9 col-lg-7 justify-content-around gogglefont toppy"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="row justify-content-around formfield form">
                            <input type="text" 
                                name="name"
                                placeholder="Name" 
                                className="col-sm-6 inputs" 
                                onChange={this.handleChange}
                            />
                            <input type="tel" 
                                name="phone"
                                placeholder="Phone #" 
                                className="col-sm-5 inputs" 
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="row justify-content-around formfield">
                            <input type="email" 
                                name="email"
                                placeholder="Email" 
                                className="col-sm-6 inputs" 
                                onChange={this.handleChange}
                            />
                            <input type="text" 
                                name="subject"
                                placeholder="Subject" 
                                className="col-sm-5 inputs" 
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="row justify-content-around formfield">
                            <textarea name="request" placeholder="How can we help?" className="col-sm-8 inputs" onChange={this.handleChange}/>
                        </div>
                        <div className="row justify-content-center"> 
                            <input type="submit"
                                className="btn btn-hover"
                            />
                        </div>
                    </form>
                </div>
            </> 
        )
        }        
}