import './sidebar.css'
import {RssFeed} from '@mui/icons-material'
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Groups2Icon from '@mui/icons-material/Groups2';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend';


export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon' />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className='sidebarIcon' />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleOutlineIcon className='sidebarIcon' />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Groups2Icon className='sidebarIcon' />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarksIcon className='sidebarIcon' />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className='sidebarIcon' />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className='sidebarIcon' />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className='sidebarIcon' />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className='sidebarIcon' />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton"> Show More </button>
        <hr className='sidebarHr'/>
        <ul className='sidebarFriendList'>
          {Users.map(u => (
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar