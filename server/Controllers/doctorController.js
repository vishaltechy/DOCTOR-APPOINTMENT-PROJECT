const DoctorModel =require("../models/doctorModel");


const doctorRegistration=async(req,res)=>{
    const{name,speciality,address,city,mobile,email ,password}=(req.body);
    try {
        const Doctor = await DoctorModel.create({
          name: name,
          speciality: speciality,
          address: address,
          city: city,
          mobile: mobile,
          email: email,
          password: password
        })
        res.status(201).send({msg:"you are succesfully registered"})
        
    } catch (error) {

        res.status(400).send({msg:"Data base not work"})

        
    }
    
}


module.exports={ 
   doctorRegistration
}