import React from 'react';
import {Avatar} from 'rsuite';
import { getFunctionInitials } from '../misc/helpers'

const ProfileAvatar = ({name,...avatarProps}) => {
    return <Avatar {...avatarProps}>
        {getFunctionInitials(name)}
        </Avatar>;
      
};

export default ProfileAvatar
