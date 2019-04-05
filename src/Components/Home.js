import React from 'react'
import sexycaleb from '../Components/Images/sexycaleb.jpeg'

export default()=>{
    return(
        <>
            <div className="container sticky-margin">
                <div className="row">
                    <h1> HOME</h1>
                </div>    
            </div>
            <div className="container">
                <div className="row ">
                    <div className="col-sm-4 vw-100">
                        <div className="card">
                            <img className="card-img-top homejumbo"
                                src={sexycaleb}
                                alt="Sexy Caleb"
                            />
                        </div>
                    </div>
                    <div className="col-sm-8 vw-100">
                        <div className="jumbotron homejumbo">
                            <h1>Hello, World!</h1>
                            <p>this is a simple hero unit, a simple jumbotron-style component</p>
                            <hr/>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            {/* <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}