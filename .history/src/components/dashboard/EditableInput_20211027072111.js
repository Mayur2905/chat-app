import React, {useState,useCallback} from 'react'
import { Input,Icon } from 'rsuite';
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

    return ( <div>

            {label}
        <Input {...inputProps} 
        disabled={!isEditable}
        placeholder ={placeholder} 
        value = {input} 
        onChange={onInputChange}/>
        <InputGroupButton onClick={onEditClick}>
        <Icon icon={isEditable ? 'close' : 'edit2'}/>
        </InputGroupButton>
        </div>
    );
};

export default EditableInput;
