import cohert from "../assets/cohert.jpg"
import "./Webinar.css"

const Webinar = () =>{
    return(
        <div>
            {/* Cohert Section */}
        <div className='container py-5 mt-5 mx-auto'>
        <div className="row flex-lg-row align-items-center">
            <div class="col-lg-7">
                <h4 className="fw-bold text-body-emphasis align-center lh-sm mb-3 pb-5">
                Cohert 1 <span className="cohert-started">Started</span>
                </h4>
                <h3 className="text-body-emphasis align-center lh-sm mb-3 text-white">
                Full Stack Blockchain Developer Program
                </h3>

                
                <p class="fw-normal lh-base cohert-caption pe-5">We have started with our Full stack Blockchain Program Secure your spot today and join us for our upcoming orientation session, where we’ll delve into the job trends and opportunities awaiting you in the blockchain space. Don’t miss out on the future of tech—reserve your one day now!</p>

<div className="mb-4">
                <h6 className='cohert-pointer'>
                <span className='cohert-icon'><i class="fa-regular fa-calendar-days"></i></span> Zoom Meeting
                </h6>

                <h6 className='cohert-pointer'>
                <span className='cohert-icon'><i class="fa-regular fa-clock"></i></span> 7:00 - 8:00 PM IST
                </h6>
                </div>
                <div class="d-grid gap-3 d-md-flex justify-content-md-start">
                    <button type="button" class="btn button-know-more">Register Now</button>
                </div>
               
            </div>

             <div className="col-12 col-sm-11 col-lg-5 mx-auto">
            <div className=''>
              <img src={cohert} className="img-fluid" width="120%" height="150%"  />
            </div>
          </div>

        </div>
        </div>

        </div>
    )
}

export default Webinar