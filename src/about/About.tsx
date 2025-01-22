import profile from '../assets/profile.jpg'
import './About.css'
import Typewritter  from '../typewritter/Typewritter';

function About() {
    

  return (
    <section className='aboutWrapper'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-12 aboutContentWrapper'>
                    <div className='aboutContent'>
                        <h3>Hi, I am <br /> Reshmi M V</h3>
                        
                       <div className='typwritterWrapper'>
                       <h5>I am a</h5>
                            <Typewritter text="Software Engineer"  />
                       </div>
                        <p>I'm a highly motivated and versatile individual with a strong aptitude for problem-solving and a deep commitment to continuous development. </p>
                        <button className='checkResumeBtn'>Check Resume</button>
                    </div>
                </div>
                <div className='col-md-6 col-12 aboutImageWrapper'>
                    <div className='aboutImage'>
                        <img src={profile} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
