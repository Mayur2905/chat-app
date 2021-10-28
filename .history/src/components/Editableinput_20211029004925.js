/* eslint-disable no-unused-vars */
import React,{useState,useCallback} from 'react'
import { Alert, Icon, Input, InputGroup } from 'rsuite'

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
    const onEditClick = useCallback(()=>{
        setIsEditable(p =>!p)
        setInput(initialValue);
    },[initialValue]);

    const onSaveClick = ()=>{
const trimmed = input.trim();
        if(trimmed ===''){
            Alert.info(emptyMsg, 4000)
        }
    }

    return (
        <div>
          {label}
          <InputGroup>
          <Input {...inputProps} 
          disabled ={!isEditable}
          placehoder={placehoder} 
          value={input} 
          onChange={onInputChange}/>  
          <InputGroup.Button onClick={onEditClick}>
          <Icon icon={isEditable ? 'close': 'edit2'}/>
          </InputGroup.Button>
          {! isEditable &&
          <InputGroup.Button onClick={onSaveClick}>
          <Icon icon='check'/>
          </InputGroup.Button>
          }
          </InputGroup>
        </div>
    );
};

export default Editableinput
