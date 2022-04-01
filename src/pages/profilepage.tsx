import React from "react";
import Profil from "./../components/profil/profile";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from "react-router-dom";
import { actionCreators } from "./../state/index";
import { RootState } from "./../state/reducers/index";


const Profilepage = () => {
  
  const dispatch = useDispatch();
    const { id } = useParams();
    const { getUserById } = bindActionCreators(
      actionCreators,
      dispatch
    );
  
    const userById = useSelector((state: RootState) => state.userById);
  
    React.useEffect(() => {
      getUserById(Number(id));
    }, []);


  return (
    <div>
      <Profil user={userById} />
    </div>
  );
};

export default Profilepage;
