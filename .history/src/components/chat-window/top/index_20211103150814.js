import React from 'react'
import { useCurrentRoom } from '../../../context/current.room.context'

const Top = () => {
    const name = useCurrentRoom(v => v.name)
    return (
        <div>
            {name}
        </div>
    )
}

export default Top
