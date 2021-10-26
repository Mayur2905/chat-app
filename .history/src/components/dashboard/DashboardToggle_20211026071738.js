import React from 'react'
import { Button, Drawer, Icon } from 'rsuite'
import Dashboard from '.'
import { useModalState } from '../../misc/custom-hooks'

const DashboardToggle = () => {
    const{isOpen,colse,open}=useModalState()
    return (
        <>
        <Button block color='blue'onClick={open}>
            <Icon icon='dashboard'/>Dashboard
        </Button>
        <Drawer show ={isOpen} onHide={colse} placement="left">
            <Dashboard/>
        </Drawer>
        </>
    )
}

export default DashboardToggle;
