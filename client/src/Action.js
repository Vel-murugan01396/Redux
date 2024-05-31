import { ADDUSER, DELETEUSER, GETUSER, UPDATEUSER } from "./Action-type";


export const getUser=(user)=>{
  return{
    type:GETUSER,
    payload:user,
  }
}
export const addUser=(user)=>{
return{
    type:ADDUSER,
    payload:user
}
}

//suppose we have update function we wrie same like that function


export const updateUser = (index, user) => {
    return {
      type:UPDATEUSER,
      index,
      payload:user,
    };
  };
  
 export  const deleteUser = (index) => {
    return {
      type: DELETEUSER,
      index,
    };
  };

 


