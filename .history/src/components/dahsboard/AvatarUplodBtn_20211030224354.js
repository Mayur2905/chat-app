import React from 'react'

const fileInputTypes =".png, .jpeg, .jpg";

const AvatarUplodBtn = () => {
    return (<div className='mt-3 text-center'>
            <div>
                <label 
                htmlFor="avatar-upload" 
                className="d-block cursor-pointer padded"> 
                    Select new Avatar
                    <input id="avatar-upload" type="file" className="d-none" accept={fileInputTypes}/>
                </label>

            </div>
        </div>
    );
};

export default AvatarUplodBtn
