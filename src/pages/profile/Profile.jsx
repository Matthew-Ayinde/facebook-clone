import './profile.css'
// import { Feed } from "@mui/icons-material"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className='profileCoverImg' src="assets/post/3.jpeg" alt="" />
                    <img className='profileUserImg' src="assets/person/3.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Hotboy</h4>
                    <span className='profileInfoDesc'>E choke ooo</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>

            </div>
        </div>
      </div>
    </>
  )
}

export default Profile