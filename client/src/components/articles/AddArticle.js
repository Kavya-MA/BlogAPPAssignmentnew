

import axios from 'axios';
import React, {  useState } from 'react';
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';
import MyForm from './Reading';


const AddArticle=() =>{
    const[myValue,setMyValue]=MyForm({title:"",article:"",authorname:""})
    const readValues= ()=> {
        console.log(myValue)
        axios.post("http://localhost:3000/api/addarticles",myValue).then((response)=>{
            console.log(response.data)
    })
           
      
    alert("Article Added successfully You can read added article from Article List")

    }
    

    return (
        <div>
 <TextField onChange={setMyValue}
 margin="normal" 
 variant="outlined" 
 name="title"
 fullWidth label="Title"
 value={myValue.title}
   
 />
 <br></br>
<TextField onChange={setMyValue}
 margin="normal" 
 variant="outlined" 
 fullWidth label="Article"
 name="article"
 value={myValue.article}
   
 />
 <br></br>
<TextField onChange={setMyValue}
 margin="normal" 
 variant="outlined" 
 fullWidth label="AuthorName"
 name="authorname"
 value={myValue.authorname}
   />
   <br></br>
 <Button onClick={readValues} variant="contained" fullWidth color="primary">Submit</Button>

        </div>
    );
}
                export default AddArticle;
