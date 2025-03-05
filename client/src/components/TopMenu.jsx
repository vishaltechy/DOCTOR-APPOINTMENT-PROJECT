import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import BASE_URL from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TopMenu =()=>{


  const[input, setInput]=useState({});



   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}));
    console.log(input);

  
  }
    const handleSubmit =async(e)=>{
      e.preventDefault();

      let api=`${BASE_URL}/doctor/registration`;

      try {
        const response = await axios.post(api,input);
        console.log(response);
        toast.success(response.data.msg);
        setShow(false)
        
      } catch (error) {
        console.log(error);
        
      }
    };
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">E-HEALTH</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={handleShow}>
              DOCTOR REGISTRATION
            </Nav.Link>
            <Nav.Link href="#features">DOCTOR APPOINTMENT</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Doctor Name</Form.Label>
              <Form.Control type="text" name="name" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Doctor Speciality</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="speciality"
                onChange={handleInput}
              >
                <option>Open this select menu</option>
                <option value="Obstetrician/gynecologist">
                  Obstetrician/gynecologist
                </option>
                <option value="Neurologis">Neurologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Ophthalmologist">Ophthalmologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Oncologist">Oncologist</option>
                <option value="Radiologist">Radiologist</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Address</Form.Label>
              <Form.Control type="text" name="address" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter City</Form.Label>
              <Form.Control type="text" name="city" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Mobile No</Form.Label>
              <Form.Control
                type="text"
                name="mobile no"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control type="email" name="email" onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleInput}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            register
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  );

}

export default TopMenu;
