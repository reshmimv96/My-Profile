
import axios from 'axios'
import './Contact.css'
import { useForm, SubmitHandler } from "react-hook-form"
import Table from '../table/Table'
import { useEffect, useState } from 'react'

export interface Inputs {
    _id: string
    email: String
    name: string
    subject: string
    message: string
  }

function Contact() {

    const [employee, setEmployee] = useState([])
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        const formData = {
            email: data.email,
            name: data.name,
            subject: data.subject,
            message: data.message
        }
        axios.post('https://profile-backend-o6g4.onrender.com/api/sendmail', { formData })
            .then(({data}) => {
                alert(data.message);
                reset()
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
      }
      useEffect(()=>{
        axios.get('https://profile-backend-o6g4.onrender.com/api/getmail')
            .then(({data}) => {
                setEmployee(data);
            })
            .catch((error) => {
                console.error('There was an error!', error);
        });
      },[])
      


  return (
    <section className='contactWrapper'>
        <div className='container'>
            <div className='row'>
                <div className='sectionHeader'>
                     <h2>Contact</h2>
                     <p>Feel free to reach out to me for any questions or opportunities!</p>
                </div>
                <div className='col-md-6 offset-md-3'>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <p>Email Me</p>

                        
                        <input placeholder='Your Email' {...register("email", { required: "This field is required",  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" }})} />
                        {errors.email && <span className='required'>{errors.email.message}</span>}

                        <input placeholder='Your Name' {...register("name", { required: true })} />
                        {errors.name && <span className='required'>This field is required</span>}

                        
                        <input placeholder='Subject' {...register("subject", { required: true })} />
                        {errors.subject && <span className='required'>This field is required</span>}

                        <input placeholder='Message' {...register("message", { required: true })} />
                        {errors.message && <span className='required'>This field is required</span>}

                        <input type="submit" className='sendBtn' />

                        {/* <input type="text" placeholder='Your Email' />
                        <input type="text" placeholder='Your Name' />
                        <input type="text" placeholder='Subject' />
                        <textarea name="message" placeholder='Meassage'></textarea>
                        <button className='sendBtn'>Send</button> */}
                    </form>
                    <Table employeeData={employee} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
