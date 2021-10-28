import React,{useState,useCallback} from 'react'
import { Input } from 'rsuite'

const Editableinput = ({
    initialValue,
    onSave,
    label=null,
    placehoder="Write your value",
    emptyMsg="Input is empty",
    ...inputProps
}) => {
    const [input,setInput]=useState(initialValue);

    const onInputChange = useCallback(value=>{
        setInput(value);
    },[]); 

    return (
        <div>
          {label}
          <Input {...inputProps} placehoder={placehoder} value={input} onChange={onInputChange}/>  
        </div>
    );
};

export default Editableinput
