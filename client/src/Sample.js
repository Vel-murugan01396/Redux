// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import addUser from "./Action";

// const Sample=()=>{
//     const [user,setUser]=useState([])
//     const dispatch=useDispatch()

//     useEffect(()=>{
//         const getuser=async()=>{
//             const response=await fetch("https://jsonplaceholder.typicode.com/users")
//             const result =await response.json()
//             console.log(result)
//             setUser(result)
//             dispatch(addUser(result))
            

//         }
//         getuser();

// },[])
//     return(<>
//     hello
//     </>)

// }

// export default Sample;