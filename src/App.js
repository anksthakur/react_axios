import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // Step 4 is data ko state m store krke rkha hai
  const [data,setData]=useState([]);
  // Step 8 error handle with useState
  const [isError,setIsError]=useState("");

  //Note : using promises
//first time jab load ho website tbhi chle
//Step 1
// useEffect(()=>{
//   //Step 2
// axios.get("https://jsonplaceholder.typicode.com/users")
// //step 3
// //promise ko handle krenge aur data mil jayega console m
// .then((resp)=>
//   //console.log("Sucess",resp.data))
// // step 5 setData m resp.data ko store kar deya
// setData(resp.data))
// //Step 7 catch method for error handling
// .catch((error)=>
//   // console.log("api call not successful",error)
// // Step 9 
// setIsError(error.message));
// },[])

// Note : using async await

//Step 2 async fun create kiya api ko call kiya

const getApiData = async ()=> {
  //Step 4 error handling try catch
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  setData(res.data);
  } catch (error) {
    setIsError(error.message);
  }
  // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  // //Step 3 data ko store karwaya setData m
  // setData(res.data);
}

//Step 1
useEffect(()=>{
 getApiData();
},[])

  return (
    <div className="App">
    <h1> Axios Method</h1>
    {/* Step 10 error show karwana hai yha*/}
    {
      // agar error huya to dikhao nhi to mat dikhao
      isError !== "" && <h2>{isError}</h2>
    }
    <div className='grid'>
    {/* Step 6 data ko destructure  kiya*/}
    {
      data.map((item) => {
        const {id , name , phone} = item;
        return <div className='card' key={id}>
        <h2>{name}</h2>
        <p>{phone}</p>
        </div>
      })
    }
    </div>
    </div>
  );
}

export default App;
