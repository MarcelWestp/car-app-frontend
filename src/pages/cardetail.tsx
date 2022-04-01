import React from "react";
import CarDetails from "../components/car/CarDetails";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from "react-router-dom";
import { actionCreators } from "./../state/index";
import { RootState } from "./../state/reducers/index";

const Cardetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { getCarById, getUserById } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const carById = useSelector((state: RootState) => state.carById);
  const userById = useSelector((state: RootState) => state.userById);

  React.useEffect(() => {
    getCarById(Number(id));
  }, []);

  React.useEffect(() => {
    if (carById.hostUserId !== 0) {
      getUserById(carById.hostUserId);
    }
  }, [carById]);

  return (
    <div>
      <CarDetails car={carById} user={userById} />
    </div>
  );
};

export default Cardetail;
