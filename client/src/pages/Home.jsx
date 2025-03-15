import { useState,useEffect } from "react";
import BASE_URL from "../config";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
 const [mydata,setMydata] = useState([])

 const loadData= async()=>{
   let api = `${BASE_URL}/doctor/homedoctorsdisplay`;
   try {
     const response = await axios.get(api);
     console.log(response.data);
     setMydata(response.data)
   } catch (error) {
    console.log(error);
  
    
   }
  
 }
 useEffect(()=>{
  loadData();
 },[]);
  
 const ans = mydata.map((key)=>{
   return (
     <>
       <Card style={{ width: "18rem", backgroundColor:"yellow" }}>
         <Card.Body>
           <Card.Title>{key.name}</Card.Title>
           <Card.Text>{key.speciality} city:{key.city}
            address:{key.address} mobile:{key.mobile} email:{key.email}
           </Card.Text>
           <Button variant="primary">BOOK APPOINTMENT</Button>
         </Card.Body>
       </Card>
     </>
   );
 })


  return (
    <>
      <h1>welcome to online APPOINTMENT system</h1>

      <div id="homedocters">{ans}</div>
    </>
  );
}

export default Home;
