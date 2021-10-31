import React from 'react'
import { Avatar } from 'rsuite'
import { getNameInitials } from '../misc/helpers'

const profileAvatar = ({name,...avatarProps}) => {
    return (
        <Avatar {...avatarProps}>
            {getNameInitials(name)}
        </Avatar>;
    )
}

export default profileAvatar
