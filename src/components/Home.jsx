import React from 'react'
import "./Home.css"
import home from "../assets/home.png"
import University_logo from "../assets/fdbp_logo.png"
import IBA_logo from "../assets/IBA.jpg"

const Home = () => {

    return (
        <>
        <div className='home-bg' >
        
        <div className='container py-5 mx-auto'>
        <div className="row flex-lg-row align-items-center">
            
            <div class="col-lg-7">
                <div className='mb-4 gap-2'>
                <img src={University_logo} style={{height:"80px", width:"80px"}}></img>
                <img src={IBA_logo} style={{height:"80px", width:"80px"}}></img>
                </div>
                <h1 className="fw-bold text-body-emphasis align-center lh-sm mb-3 home-heading text-white">
                Full Stack Blockchain Developer Program
                </h1>

                <h4 className='home-arrow-text'>
                <span className='arrow-color'><i class="fa-solid fa-arrow-right"></i></span> Industry-Centric Practical training
                </h4>
                <h4 className='home-arrow-text'>
                <span className='arrow-color'><i class="fa-solid fa-arrow-right"></i></span> Get Hands-on with Ethereum and Hyperledger Fabric
                </h4>
                <h4 className='home-arrow-text'>
                <span className='arrow-color'><i class="fa-solid fa-arrow-right"></i></span> Mentorship by Industry experts
                </h4>
                <h4 className='home-arrow-text'>
                <span className='arrow-color'><i class="fa-solid fa-arrow-right"></i></span> Guaranteed Internship & Placement Assistance
                </h4>
                <p class="fw-normal lh-base home-caption">A comprehensive and hands-on Full Stack Blockchain Developer Training Program that equips participants with the skills and knowledge required for successful application development and deployment of blockchain in business environments. Our program is designed and co-delivered by India Blockchain Alliance (IBA) to provide a strong technical foundation in Blockchain Technology covering both public as well as private Blockchain frameworks while also imparting essential software development training.</p>

                <div class="d-grid gap-3 d-md-flex justify-content-md-start">
                    <button type="button" class="btn button-know-more">Know more</button>
                    <button type="button" class="btn button-brochure">Download Brochure</button>
                </div>
                <button type="button" class="btn button-know-more mt-3">Knowledge Sharing Sessions</button>
            </div>

             <div className="col-12 col-sm-11 col-lg-5 mx-auto">
            <div className=''>
              <img src={home} className="img-fluid" width="120%" height="150%"  />
            </div>
          </div>

        </div>
        </div>

        </div>
        </>
    )
}

export default Home