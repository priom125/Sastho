import './style/Banner.css'
import mobile from '../assets/mobile.jpg'
function Banner() {
  return (
    <>
              <div className='heroSection'>
                  <div className="left">
                    <h1>Your 24/7 AI <br />Health Assistant</h1>
                  <p>Talk to <span>Sastho</span> for symptoms,<br /> report,and more.</p>
                 <div className="btn">
                   <button>Chat With Sastho</button>
                 </div>
                  </div>
                  <div className="right">
                    <img src={mobile} alt="" />
                  </div>
                </div>
    </>
  )
}

export default Banner