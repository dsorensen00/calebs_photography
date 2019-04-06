import React from 'react'
import Camera from '../Components/Images/camera.png'
import Sexy from '../Components/Images/sexycaleb.jpeg'
import Kissy from '../Components/Images/kissy.jpg'


export default()=>{
    return(
        <>
            <div>
                <img src={Camera} alt="camera" className="img-fluid"/>
            </div>
            <div className="container">    
                <div className="row">
                    <div className="col-sm-7 text-justify topper">
                        <div className="container-fluid gogglefont title">
                            <h1 className="text-center">A Little About Me</h1>
                        </div>
                        <div className="gogglefont">   
                            <p>Bacon ipsum dolor amet kevin tri-tip hamburger brisket shankle chicken meatloaf chuck. Capicola corned beef fatback t-bone jerky. Ham hock ham meatball, sirloin buffalo spare ribs drumstick meatloaf t-bone leberkas kielbasa jerky tongue. Brisket cupim drumstick flank porchetta ham hock.</p>
                            <p>Bresaola cupim pork belly pig frankfurter. Sirloin pork belly shankle, shank picanha flank cupim ribeye tongue. Shankle beef ribs bresaola frankfurter bacon ham prosciutto jowl. Salami cow strip steak ribeye turkey chuck shoulder corned beef picanha hamburger drumstick venison boudin. Swine jowl strip steak, sausage bacon ham hock pork belly drumstick buffalo porchetta ball tip turducken beef frankfurter turkey.</p>
                            <br/>
                            <br/>
                            <hr/>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img src={Sexy} alt="self portrait" className="img-fluid sexy"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <img src={Kissy} alt="Caleb and Adia" className="img-fluid"/>
                    </div>
                    <div className="col-sm-7 text-justify topper2">
                        <div className="container-fluid gogglefont title2">
                            <h1 className="text-right">My Experience</h1>
                        </div>
                        <div className="gogglefont">   
                            <p>Bacon ipsum dolor amet kevin tri-tip hamburger brisket shankle chicken meatloaf chuck. Capicola corned beef fatback t-bone jerky. Ham hock ham meatball, sirloin buffalo spare ribs drumstick meatloaf t-bone leberkas kielbasa jerky tongue. Brisket cupim drumstick flank porchetta ham hock.</p>
                            <p>Bresaola cupim pork belly pig frankfurter. Sirloin pork belly shankle, shank picanha flank cupim ribeye tongue. Shankle beef ribs bresaola frankfurter bacon ham prosciutto jowl. Salami cow strip steak ribeye turkey chuck shoulder corned beef picanha hamburger drumstick venison boudin. Swine jowl strip steak, sausage bacon ham hock pork belly drumstick buffalo porchetta ball tip turducken beef frankfurter turkey.</p>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}