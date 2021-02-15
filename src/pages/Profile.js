// import SideBar from '../components/moonstone/sideBar'
import SectionHeader from "../components/moonstone/SectionHeader";
import EditProfile from "../components/moonstone/EditProfile";
import Achievements from "../components/moonstone/achievements/";

import "../assets/css/moonstone.css";

export default function Profile(props) {
  return (
    // <SideBar className='profile' style={{maxWidth: '100%'}}>
    <div className="userProfile">
      <SectionHeader
        title="User Profile"
        subtitle="Hi John, welcome yo tour profile"
      ></SectionHeader>
      <div className="main">
        <EditProfile></EditProfile>
        <Achievements></Achievements>
      </div>
    </div>
    // </SideBar>
  );
}
