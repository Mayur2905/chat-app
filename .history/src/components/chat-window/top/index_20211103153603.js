import React,{memo} from 'react'
import { Link } from 'react-router-dom';
import { Icon } from 'rsuite';
import { useCurrentRoom } from '../../../context/current.room.context'
import { useMediaQuery } from '../../../misc/custom-hooks';

const Top = () => {
    const name = useCurrentRoom(v => v.name);
    const isMobile=useMediaQuery('(max-width:992px)')
    return <div>
            <div className="d-flex justify-content-between align-items-center">
            <h4>
                <Icon componentClass={Link} icon="arrow-circle-left" to="/" size="2x" className={isMobile ?'d-inline-block p-0 mr-2 text-blue link-unstyled':'d-none'}/>
                <span className="text-disappear">{name}</span>
            </h4>
            </div>
        </div>
    
};

export default memo(Top);
