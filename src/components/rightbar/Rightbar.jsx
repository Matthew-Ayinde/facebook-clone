import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({profile}) => {

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" className='birthdayImg' alt="" />
          <span className="birthdayText">
          <b> Toluwanimi, Mercy </b> and <b> 3 others friends </b> have their birthdays today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className='rightbarAd'/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Lagos</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Paris</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Abandoned</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">Lacasta Xchange</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">Lacasta Xchange</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">Lacasta Xchange</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/4.jpeg" className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">Lacasta Xchange</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/5.jpeg" className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">Lacasta Xchange</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/6.jpeg" className='rightbarFollowingImg' alt="" />
            <span className="rightbarFollowingName">Lacasta Xchange</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar  