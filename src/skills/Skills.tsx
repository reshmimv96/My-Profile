
import './Skills.css'
import react from '../assets/reactIcon.svg';
import redux from '../assets/redux.svg';
import html from '../assets/html.png';
import css from '../assets/CSS3.png';
import js from '../assets/js.png';
import bootstrap from '../assets/bootstrap.png';
import tailwind from '../assets/tailwind.png';
import ui from '../assets/ui.png';
import node from '../assets/node.svg';
import express from '../assets/express.png';
import mysql from '../assets/mysql.svg';
import mongo from '../assets/mongo.svg';
import supabase from '../assets/supabase.png';
import c from '../assets/c.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import netlify from '../assets/netlify.png';
import vs from '../assets/vs.png';

function Skills() {
    

  return (
    <section className='skillsWrapper'>
        <div className='container'>
            <div className='row'>
                <div className='sectionHeader'>
                     <h2>Skills</h2>
                     <p>Here are some of my skills on which I have been working on for the past year.</p>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='skillCard'>
                        <div className='skillTitle'><h3>Frontend</h3></div>
                        <div className='skillList'>
                            <div className='skill'>
                               
                                <img src={react} />
                                React JS
                            </div>
                            <div className='skill'>
                               
                                <img src={redux} />
                                Redux
                            </div>
                            <div className='skill'>
                              
                                <img src={html} />
                                HTML
                            </div>
                            <div className='skill'>
                              
                                <img src={css} />
                                CSS
                            </div>
                            <div className='skill'>
                              
                                <img src={js} />
                                Javascript
                            </div>
                            <div className='skill'>
                              
                                <img src={bootstrap} />
                                Bootstrap
                            </div>
                            <div className='skill'>
                              
                                <img src={tailwind} />
                                Tailwind CSS
                            </div>
                            <div className='skill'>
                              
                                <img src={ui} />
                                Shadcn UI
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='skillCard'>
                        <div className='skillTitle'><h3>Backend</h3></div>
                        <div className='skillList'>
                            <div className='skill'>
                               
                                <img src={node} />
                               Node JS
                            </div>
                            <div className='skill'>
                               
                                <img src={express} />
                                Express JS
                            </div>
                            <div className='skill'>
                              
                                <img src={mysql} />
                                MYSQL
                            </div>
                            <div className='skill'>
                              
                                <img src={mongo} />
                                MongoDB
                            </div>
                            <div className='skill'>
                              
                                <img src={supabase} />
                                Supabase
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='col-md-12 col-12'>
                <div className='skillCard'>
                        <div className='skillTitle'><h3>Others</h3></div>
                        <div className='skillList'>
                            <div className='skill'>
                               
                                <img src={c} />
                              C++
                            </div>
                            <div className='skill'>
                               
                                <img src={git} />
                              Git
                            </div>
                            <div className='skill'>
                              
                                <img src={github} />
                               GitHub
                            </div>
                            <div className='skill'>
                              
                                <img src={netlify} />
                                Netlify
                            </div>
                            <div className='skill'>
                              
                                <img src={vs} />
                                VS Code
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
