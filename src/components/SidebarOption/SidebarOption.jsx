import React from 'react'

import './SideOptions.css'

function SidebarOption({active, Icon, text}) {
    return (
        <div className={active ? 'sidebarOption active' : 'sidebarOption'}>
            <Icon className="sidebarOption__icon" />
            <p>{text}</p>
        </div>
    )
}

export default SidebarOption
