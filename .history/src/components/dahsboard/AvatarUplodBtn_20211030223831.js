import React from 'react'

const AvatarUplodBtn = () => {
    return <div className='mt-3 text-center'>
            <div>
                <label htmlFor="avatar-upload" className="d-block cursor-pointer padded"> 
                    Select new Avatar
                    <input type="file" className="d-none"/>
                </label>

            </div>
        </div>
    
}

export default AvatarUplodBtn
