import React from 'react'
import './Sidebar.css'
import SidebarOption from './../SidebarOption/SidebarOption'

//Icons
import TwiterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';

function Sidebar() {
    return (
        <header className="sidebar">
            <div className="sidebar-inner">
                <div className="logo">
                    <TwiterIcon/>
                </div>
                
                <SidebarOption text="Home" Icon={HomeIcon} active />
                <SidebarOption text="Explore"  Icon={SearchIcon} />
                <SidebarOption text="Notifications"  Icon={NotificationsNoneIcon} />
                <SidebarOption text="Messages"  Icon={MailOutlineIcon} />
                <SidebarOption text="Bookmarks"  Icon={BookmarkBorderIcon} />
                <SidebarOption text="Lists"  Icon={ListAltIcon} />
                <SidebarOption text="Profile"  Icon={PersonIcon} />
                <SidebarOption text="More"  Icon={MoreHorizIcon} />

                <button className="sidebar__btn" >
                    <AddIcon className="sidebar__btnIcon"/>
                    Tweet
                </button>
            </div>
        </header>
    )
}

export default Sidebar
