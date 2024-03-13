import React, { useState } from "react";
import {Input} from "@mui/material"

const Inputfild=()=>{
    const [evalue,setEvalue]=useState("")
const handleChange=(e)=>{
    setEvalue(e.target.value)

}


    return<div>
       <Input  onChange={handleChange}></Input>
       <p>{evalue}</p>
    </div>
}
export default Inputfild