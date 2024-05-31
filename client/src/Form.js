
// import { useState } from "react"
// import "./Form.css"

// function Form() {
// const[form,setForm]=useState({username:"",password:"",conformpassword:"",mobile:""})
// const[mapping,setMapping]=useState([])
// const [updateopen,setUpdateOpen]=useState(false)

// function handleSubmit(e){
//   e.preventDefault();
//   setMapping([...mapping,form]);
  
//   console.log(form)
// }

// function handleupdate(){
//   setUpdateOpen(true);
// }

//   return (
//     <>
//      <div className="main">
//           <div className="main1">
//                <input type='text' placeholder='username' value={form.username} onChange={(e)=>{setForm({...form,username:e.target.value})}}></input>
//                <input type='text' placeholder='password'value={form.password} onChange={(e)=>{setForm({...form,password:e.target.value})}} ></input>
//                <input type='text' placeholder='conformpassword' value={form.conformpassword} onChange={(e)=>{setForm({...form,conformpassword:e.target.value})}} ></input>
//                <input type='number' placeholder='mobile' value={form.mobile} onChange={(e)=>{setForm({...form,mobile:e.target.value})}} ></input>
//                <div><button onClick={handleSubmit} >submit</button></div>
               
//       </div>
     
//      </div>
//      <div>
//       <table>
//         <thead>
//           <tr>
//             <th>username</th>
//             <th>password</th>
//             <th>conformpassword</th>
//             <th>mobile</th>
//           </tr>
//         </thead>
//         <tbody>
//           {mapping.map((data,index)=>(
//             <tr key={index}>
//             <td>{data.username}</td>
//             <td>{data.password}</td>
//             <td>{data.conformpassword}</td>
//             <td>{data.mobile}</td>
//             <td><button onClick={handleupdate}>Edit</button></td>
//             <td><button>delete</button></td>
//           </tr>
//           ))}
          
//         </tbody>
//       </table>

//      </div>
//      {updateopen&&(
//      <div>
//          <input type='text' placeholder='username' value={form.username} onChange={(e)=>{setForm({...form,username:e.target.value})}}></input>
//                <input type='text' placeholder='password'value={form.password} onChange={(e)=>{setForm({...form,password:e.target.value})}} ></input>
//                <input type='text' placeholder='conformpassword' value={form.conformpassword} onChange={(e)=>{setForm({...form,conformpassword:e.target.value})}} ></input>
//                <input type='number' placeholder='mobile' value={form.mobile} onChange={(e)=>{setForm({...form,mobile:e.target.value})}} ></input>
//                <div><button onClick={handleSubmit} >submit</button> <button onClick={()=>setUpdateOpen(false)} >close</button></div>

//      </div>
//      )}
     


     
    
//     </>
//   )
// }

// export default Form


import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,updateUser,deleteUser,getUser } from './Action';
import './Form.css';
import Swal from "sweetalert2"
import {useNavigate} from "react-router-dom"

export default function Form() {
  const [form, setForm] = useState({ username: '', password: '', conformpassword: '', mobile: '' });
  const [updateOpen, setUpdateOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [error,setError]=useState("")
  const dispatch = useDispatch();
   const navigate=useNavigate();
  // const userList = useSelector((state) => state.userList.userList);
  // console.log(userList)


  // const Getuser=async()=>{
  //   try {
   
  //   const response= await fetch("http://localhost:4000/register")
  //   if(response.ok){
  //     const result=await response.json(); 
  //   dispatch(getUser(result));
  //   }
    

  // } catch (error) {
  //   console.error('There was a problem with the fetch operation:', error);
  // }

    

  // }



  // useEffect(()=>{
   
  //   Getuser()

  // },[])

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(form.password!==form.conformpassword){
      setError("like same password")
      return
    }
    if(form.mobile<10){
      setError("wrie correct number")
      return
    }

    try {

      const response=await fetch("http://localhost:4000/register",{
        method: currentIndex === null ? 'POST' : 'PUT',
        headers:{"Content-Type":"Application/Json"},
        body:JSON.stringify(form),
      })

      if(response.ok){
        const responseData=await response.json();
        console.log(responseData)
        if (currentIndex === null) {
          dispatch(addUser(responseData));
        } else {
          dispatch(updateUser(currentIndex, responseData));
          setCurrentIndex(null);
        }
        Swal.fire({
          icon: 'success',
          title: 'filled Successfully!',
          showConfirmButton: false,
          timer: 500,
        });

        navigate("/login")

      }
      
      setForm({ username: '', password: '', conformpassword: '', mobile: '' });
      setUpdateOpen(false);
      setError('');
    } catch (error) {
      console.error('There was a problem with the submit operation:', error);
      setError('There was a problem submitting the form');
    }
   
  };

  // const handleEdit = (index) => {
  //   setForm(userList[index]);
  //   setCurrentIndex(index);
  //   setUpdateOpen(true);
  // };

  // const handleDelete = (index) => {
  //   dispatch(deleteUser(index));
  // };

  return (
    <>
      <div className="main">
        <div className="main1">
          <input
            type="text"
            placeholder="username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="text"
            placeholder="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <input
            type="text"
            placeholder="conformpassword"
            value={form.conformpassword}
            onChange={(e) => setForm({ ...form, conformpassword: e.target.value })}
          />
          <input
            type="number"
            placeholder="mobile"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          />
          <div>
            <button onClick={handleSubmit}>submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </div>
      {/* <div>
        <table>
          <thead>
            <tr>
              <th>username</th>
              <th>password</th>
              <th>conformpassword</th>
              <th>mobile</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(userList) && userList.map((data, index) => (
              <tr key={index}>
                <td>{data.username}</td>
                <td>{data.password}</td>
                <td>{data.conformpassword}</td>
                <td>{data.mobile}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      {updateOpen && (
        <div>
          <input
            type="text"
            placeholder="username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="text"
            placeholder="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <input
            type="text"
            placeholder="conformpassword"
            value={form.conformpassword}
            onChange={(e) => setForm({ ...form, conformpassword: e.target.value })}
          />
          <input
            type="number"
            placeholder="mobile"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          />
          <div>
            <button onClick={handleSubmit}>submit</button>
            <button onClick={() => setUpdateOpen(false)}>close</button>
          </div>
        </div>
      )}
    </>
  );
}


