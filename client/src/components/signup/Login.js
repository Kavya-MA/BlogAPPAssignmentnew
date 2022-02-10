import axios from 'axios';
import React, { useEffect, useState } from 'react';

import "./Login.css"
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';
import validation from './validation';
import Home from '../home/Home';


const Login=() =>{

    // Storing Form Field Values
    const [formValues, setFormValues] = useState({ username: "", emailid: "", password: "" ,confirmpassword:""});

    // Manage Form Error Values
    const [formErrorValues, setFormErrorValues] = useState({});

    // Flag for Form Submission Status
    const [isSubmit, setIsSubmit] = useState(false); 

    // Manage Field Change
    const handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target; //destructuring
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    }

    // Manage Form Refresh
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrorValues(validation(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrorValues).length === 0 && isSubmit) {
            alert("success");
        }
    }, [formErrorValues]);
    const readValues=()=>{
console.log(formValues)
axios.post("http://localhost:5000/login",formValues).then((response)=>{
    console.log(response.data)
    alert("login successfull")
})
    }

    return (
        <div>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                
                {/* Signup */}
                <div className="signup">
                    <form onSubmit={handleSubmit}>
                       
                        
                        <TextField 
                        margin="normal" 
                        variant="outlined" 
                        fullWidth label="EmailId"  name="emailid"  required="" value={formValues.emailid} onChange={handleChange} />
                        <p className='error'>{formErrorValues.email}</p>
                        <TextField 
                        margin="normal" 
                        variant="outlined" 
                        fullWidth label="Password"name="password" required="" value={formValues.password} onChange={handleChange} />
                        <p className='error'>{formErrorValues.password}</p>
                        
                        <Button onClick={readValues} variant="contained" fullWidth color="primary"    onClick={readValues}>Sign up</Button>

                    </form>
                </div>
                </div>
        </div>
    );
}
                export default Login;
