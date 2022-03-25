import React from "react";
import Profil from "./../components/profil/profile";
import User from "../models/User";

const Profilepage = ({ user }: { user: User }) => {
  return (
    <div>
      <Profil  />
    </div>
  );
};

export default Profilepage;
