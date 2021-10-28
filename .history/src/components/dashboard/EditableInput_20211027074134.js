import React, {useState,useCallback} from 'react'
import { Input,Icon, InputGroup, Alert } from 'rsuite';
import InputGroupButton from 'rsuite/lib/InputGroup/InputGroupButton';

const EditableInput = ({
    initialValue,
    onSave, 
    label =null,
    placeholder ="Write your name",
    emptyMsg=" Input is empty ",
    ...inputProps 
}) => {
    const [input,setInput]= useState(initialValue);
    const [isEditable,setIsEditable] = useState(false);
    const onInputChange = useCallback(value => {
            setInput(value);
    },[])

    const onEditClick = useCallback(() => {
         setIsEditable (p=>!p);
         setInput(initialValue);
        },
        [initialValue],
    )

const onSaveClick = async () =>
{
    const trimmed = input.trim();
    if(trimmed ===''){
        Alert.info(emptyMsg,4000)
    }
    if(trimmed !== initialValue){
       await onSave(trimmed) 
    }
    setIsEditable(false);
};

    return ( <div>

            {label}
        <InputGroup>
        <Input {...inputProps} 
        disabled={!isEditable}
        placeholder ={placeholder} 
        value = {input} 
        onChange={onInputChange}/>
        <InputGroupButton onClick={onEditClick}>
        <Icon icon={isEditable ? 'close' : 'edit2'}/>
        </InputGroupButton>
        {isEditable && 
        <InputGroupButton onClick={onSaveClick}>
        <Icon icon= "check" />
        </InputGroupButton>
        }
        </InputGroup>
        </div>
    );
};

export default EditableInput;
