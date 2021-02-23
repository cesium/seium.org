import React, { useEffect } from "react";
import { useAuth } from "../components/moonstone/context/auth";
import { useUser } from "../components/moonstone/context/user";
import SectionHeader from "../components/moonstone/SectionHeader";
import UserInfo from "../components/moonstone/User/UserInfo";
import UserAchievements from "../components/moonstone/User/UserAchievements";

import API from "../utils/api";

import "../assets/css/moonstone.css";

function Profile() {
  const { user, dispatch } = useUser();
  const { dispatch: dispatchAuth } = useAuth();

  useEffect(() => {
    API.get("/api/v1/attendee")
      .then((res) => {
        dispatch({ type: "INIT_ATTENDEE", user: res.data });
      })
      .catch(() => dispatchAuth({ type: "LOGOUT" }));
  }, []);

  return (
    <div className="userProfile">
      <SectionHeader
        title="User Profile"
        subtitle={`Hi ${user.name}, welcome yo tour profile`}
      />
      <div className="main">
        <UserInfo />
        <UserAchievements />
      </div>
    </div>
  );
}

export default Profile;
