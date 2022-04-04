import React from "react";
import Profil from "../components/profil/Profile";
import { useSelector } from "react-redux";
import { RootState } from "../state/reducers/index";

const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <Profil user={user} />
    </div>
  );
};

export default ProfilePage;
