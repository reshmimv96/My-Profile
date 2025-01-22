

import axios from 'axios';
import './Table.css'
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../contact/Contact';

interface TableProps {
    employeeData: {
      _id: string;
      email: string;
      name: string;
      subject: string;
      message: string;
    }[];
  }
  interface Item{
    _id: string;
    email: string;
    name: string;
    subject: string;
    message: string;
  }
function Table({ employeeData }: TableProps) {

    const [data, setData] = useState<Item[] | [] > ([]);

    const [editId, setEditId] = useState<string | null>(null);

    

     const {
            register,
            handleSubmit,
            reset,
    } = useForm<Inputs>()
    
    useEffect(()=>{
        setData(employeeData);
    })

   const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(editId);
        const formData = {
            id: editId,
            email: data.email,
            name: data.name,
            subject: data.subject,
            message: data.message
        }
        axios.put(`http://localhost:5000/api/update/${editId}`, { formData })
        .then((response) => {
            // alert(data.message);
            setData((prevData) => {
                if (prevData) {
                  return prevData.map((row) =>
                    row._id === response.data._id ? response.data : row
                  );
                }
                return []; // Return an empty array if prevData is null or undefined
              });           
              setEditId(null);
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
       
    }

    const handleCancelClick = () =>{
        setEditId(null);
    }

    const editItem = (item: Item, event: any) => {
        event.preventDefault();
        setEditId(item._id);
        reset({
            email: item.email,
            name: item.name,
            subject: item.subject,
            message: item.message,
          });
    }

    const handleDelete = (id: string) => {
        console.log('Deleting ID:', id); // Debugging
        if (window.confirm('Are you sure you want to delete this item?')) {
          axios
            .delete(`http://localhost:5000/api/delete/${id}`)
            .then((response) => {
              console.log('Delete Response:', response.data); // Debugging
      
              // Update the state to remove the deleted item
              setData((prevData) => {
                console.log('Previous Data:', prevData); // Debugging
                const updatedData = prevData.filter((item) => item._id !== id);
                console.log('Updated Data:', updatedData); // Debugging
                return updatedData;
              });
            })
            .catch((error) => {
              console.error('There was an error deleting the item!', error);
            });
        }
      };
      
      
      
    
  return (
    <section className='tableWrapper'>
       <div className='container'>
            <div className='row'>
                
                <div className='col-md-12'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <table className='table-striped'>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                            <tr key={index}>
                                {editId === item._id ? (
                                    <>
                                        <td>
                                        <input placeholder='Your Email' {...register("email", { required: "This field is required",  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" }})} />

                                        </td>
                                        <td>
                                        <input placeholder='Your Name' {...register("name", { required: true })} />

                                        </td>
                                        <td>
                                        <input placeholder='Subject' {...register("subject", { required: true })} />

                                        </td>
                                        <td>
                                        <input placeholder='Message' {...register("message", { required: true })} />

                                        </td>
                                        <td>
                                            <button type='submit'>
                                            Save
                                            </button>
                                        </td>
                                        <td>
                                            <button type='button' onClick={handleCancelClick}>Cancel</button>
                                        </td>

                                    </>
                                    
                                ) : (
                                    <>
                                        <td>{item.email}</td>
                                        <td>{item.name}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.message}</td>
                                        <td><button type='button' onClick={(event) => editItem(item,event)}>Edit</button></td>
                                        <td><button type='button' onClick={() => handleDelete(item._id)}>Delete</button></td>

                                    </>

                                ) }
                               
                            </tr>
                       ))
                       ) : (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center' }}>
                      No data available
                    </td>
                  </tr>
                )}
                        </tbody>
                    </table>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Table
