const { useState } = require("react")

const MyForm=(value)=>{
    const[val,setVal]=useState(value)
    return [val,(e)=>{
        setVal({...val,[e.target.name]:e.target.value})
    }]

}
export default MyForm;