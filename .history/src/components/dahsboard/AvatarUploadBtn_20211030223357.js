import React from 'react'

const AvatarUploadBtn = () => {
    return (
        <div className="mt-3 text-center">

            <div>

                <label htmlFor="avatar-upload" className="d-block cursor-pointer padded ">
                    Select new avatar
                    <input id="avatar-upload" type="file" className="d-none"/>
                </label>
            </div>
            
        </div>
    )
}

export default AvatarUploadBtn
