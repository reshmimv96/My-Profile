

import Timeline from '../timeline/Timeline';
import './Education.css'

function Education() {

    const education = [ 
        {   index: 0,
            college: "ABES Engineering College",
            course: "Bachelor of Technology - BTech, Computer Science",
            date: "June 2024 – Sep 2024",
            grade: "7.14 CGPA",
            description: "Designed and launched an Exam platform with automated scheduling, result tracking, and student-teacher communication, improving efficiency. Applied React hooks for reusable components and simplified the UI, reducing support tickets by 50%. Implemented backend validation, JWT, and error handling, cutting scheduling errors by 50% and minimizing downtime. Managed version control with Git for smooth collaboration.",
            
        },
       
    ];


  return (
    <section className='educationWrapper'>
       <div className='container'>
            <div className='row'>
                <div className='sectionHeader'>
                     <h2>Education</h2>
                     <p>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
                </div>
                <div className='col-md-12'>
                    <Timeline data={education} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education
