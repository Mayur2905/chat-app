import { is } from '@babel/types';
import React,{useState,useCallback} from 'react'
import { Icon, Input, InputGroup } from 'rsuite'

const Editableinput = ({
    initialValue,
    onSave,
    label=null,
    placehoder="Write your value",
    emptyMsg="Input is empty",
    ...inputProps
}) => {
    const [input,setInput]=useState(initialValue);
    const [isEditable,setIsEditable] = useState(false);

    const onInputChange = useCallback(value=>{
        setInput(value);
    },[]); 

    return (
        <div>
          {label}
          <Input {...inputProps} 
          disabled ={!isEditable}
          placehoder={placehoder} 
          value={input} 
          onChange={onInputChange}/>  
          <InputGroup.Button>
          <Icon icon={isEditable ? 'close': 'edit2'}/>
          </InputGroup.Button>
        </div>
    );
};

export default Editableinput
