import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { getUser } from './Action';
import { useEffect } from "react";

export default function Login(){
    const userList = useSelector((state) => state.userList.userList);
    const dispatch = useDispatch();

    const Getuser=async()=>{
      try {
     
      const response= await fetch("http://localhost:4000/register")
      if(response.ok){
        const result=await response.json(); 
      dispatch(getUser(result));
      }
      
  
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  
      
  
    }
  
  
  
    useEffect(()=>{
     
      Getuser()
  
    },[])



    return(<>
     <div>
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
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>)
}