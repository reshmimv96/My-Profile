
import Timeline from '../timeline/Timeline';
import './Experience.css'

function Experience() {
    
    const experience = [ 
                            {   index: 0,
                                position: "Frontend Engineer Intern",
                                company: "Alfabeto Global",
                                date: "June 2024 – Sep 2024",
                                description: "Designed and launched an Exam platform with automated scheduling, result tracking, and student-teacher communication, improving efficiency. Applied React hooks for reusable components and simplified the UI, reducing support tickets by 50%. Implemented backend validation, JWT, and error handling, cutting scheduling errors by 50% and minimizing downtime. Managed version control with Git for smooth collaboration.",
                                skills: " ReactJS • Redux • HTML • CSS • JavaScript • API Integration • Bootstrap",
                            },
                            {   
                                index: 1,
                                position: "Open Source Contributor ",
                                name: "Hackoctober Fest'22",
                                date: "June 2024 – Sep 2024",
                                description: "Contributed to different open-source projects and learn from industry experts"
                            },
                            
                        ];

  return (
    <section className='experienceWrapper'>
        <div className='container'>
            <div className='row'>
                <div className='sectionHeader'>
                     <h2>Experience</h2>
                     <p>My work experience as a software engineer and working on different projects.</p>
                </div>
                <div className='col-md-12'>
                    <Timeline data={experience} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
