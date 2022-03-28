import React from "react";
import Profil from "./../components/profil/profile";
import User from "../models/User";

const Profilepage = ({ user }: { user: User }) => {
  return (
    <div>
      <Profil user={user} />
    </div>
  );
};

export default Profilepage;
