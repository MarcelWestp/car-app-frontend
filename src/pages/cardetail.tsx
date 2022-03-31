import React from "react";
import CarDetails from "./../components/car/car";
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
    async function fetchData() {
      const carID = await getCarById(Number(id));
      await getUserById(carById.hostUserId);
    }
    fetchData();
  }, []);

  return (
    <div>
      <CarDetails car={carById} />
    </div>
  );
};

export default Cardetail;
