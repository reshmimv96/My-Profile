
import './Project.css'
import project from '../assets/jobportal1.png'

function Project() {

    const projects = [ 
        {   index: 0,
            image: project,
            skilllist: "React Js, Shadcn UI, Supabase, Tailwind CSS, Javascript, clerk",
            title: "Job Portal",
            description: "Built a Job Portal app with React.js, allowing candidates to apply, save jobs, and recruiters to manage listings, with secure authentication via Clerk. Integrated Supabase for real-time data updates and used Redux Toolkit for state management. Designed a responsive, modern UI with ShadCN and Tailwind CSS for cross-device compatibility.",
        },
        {   index: 1,
            image: project,
            skilllist: "React Js, Shadcn UI, Supabase, Tailwind CSS, Javascript, clerk",
            title: "Job Portal",
            description: "Built a Job Portal app with React.js, allowing candidates to apply, save jobs, and recruiters to manage listings, with secure authentication via Clerk. Integrated Supabase for real-time data updates and used Redux Toolkit for state management. Designed a responsive, modern UI with ShadCN and Tailwind CSS for cross-device compatibility.",
        },
        {   index: 2,
            image: project,
            skilllist: "React Js, Shadcn UI, Supabase, Tailwind CSS, Javascript, clerk",
            title: "Job Portal",
            description: "Built a Job Portal app with React.js, allowing candidates to apply, save jobs, and recruiters to manage listings, with secure authentication via Clerk. Integrated Supabase for real-time data updates and used Redux Toolkit for state management. Designed a responsive, modern UI with ShadCN and Tailwind CSS for cross-device compatibility.",
        },
        {   index: 3,
            image: project,
            skilllist: "React Js, Shadcn UI, Supabase, Tailwind CSS, Javascript, clerk",
            title: "Job Portal",
            description: "Built a Job Portal app with React.js, allowing candidates to apply, save jobs, and recruiters to manage listings, with secure authentication via Clerk. Integrated Supabase for real-time data updates and used Redux Toolkit for state management. Designed a responsive, modern UI with ShadCN and Tailwind CSS for cross-device compatibility.",
        },
        
        
    ];

    

  return (
    <section className='projectWrapper'>
       <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='sectionHeader'>
                     <h2>Projects</h2>
                     <p>I have worked on a wide range of projects. Adding here some of my good projects.</p>
                </div>
                {projects.map((i,index) => (
                    <div className='col-md-4'>
                    
                        <div key={index} className='projectCard'>
                            <img src={i.image}  />
                            <div className='skillList'>
                            {i.skilllist.split(", ").map((skill, idx) => (
                                <div key={idx} className='item'>{skill}</div>
                            ))}
                               
                            </div>
                            <div className='projectContent'>
                                <h6>{i.title}</h6>
                                <p>{i.description}</p>
                            </div>
                        </div>
                    
                    </div>
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default Project
