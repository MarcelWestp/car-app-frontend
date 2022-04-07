import Car from "./../../models/Car";
import User from "./../../models/User";
import PostUser from "./../../models/PostUser";
import Trip from "./../../models/Trip";

const URL: string = process.env.REACT_APP_BASE_URL as string;

export const getAllCars = () => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/cars`);
      const cars = await response.json();
      dispatch({ type: "getAllCars", payload: cars });
    } catch (e) {}
  };
};

export const getAllCarsByHostId = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/cars/host/${id}`);
      const cars = await response.json();
      dispatch({ type: "getAllCarsByHostId", payload: cars });
    } catch (e) {}
  };
};

export const getAllCarsByCity = (city: string) => {
  return async (dispatch: any) => {
    try {
      console.log(city);
      const response = await fetch(`${URL}/cars/city/${city}`);
      const cars = await response.json();
      console.log(cars)
      dispatch({ type: "getAllCarsByCity", payload: cars });
    } catch (e) {}
  };
};

export const getCarById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/car/${id}`);
      const carById = await response.json();
      dispatch({ type: "getCarById", payload: carById });
    } catch (e) {}
  };
};

export const deleteCarById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/car/${id}`, { method: "DELETE" });
      const carById = await response.json();
      dispatch({ type: "deleteCarById", payload: carById });
    } catch (e) {}
  };
};

export const postCar = (car: Car) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/car`, {
        method: "POST",
        body: JSON.stringify(car),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const carById = await response.json();
      dispatch({ type: "postCar", payload: carById });
    } catch (e) {}
  };
};

export const getUserById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/user/${id}`);
      const userById = await response.json();
      dispatch({ type: "getUserById", payload: userById });
    } catch (e) {}
  };
};

export const getValidateUser = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(
        `${URL}/validate?input=${email}&password=${password}`
      );
      const userValidate = await response.json();
      dispatch({ type: "getValidateUser", payload: userValidate });
    } catch (e) {}
  };
};

export const postUser = (user: PostUser) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/user`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const postUser:User = await response.json();
      dispatch({ type: "postUser", payload: postUser });
    } catch (e) {}
  };
};

export const updateUser = (user: User) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/user`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const userValidate = await response.json();
      dispatch({ type: "updateUser", payload: userValidate });
    } catch (e) {}
  };
};

export const deleteUserById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/user/${id}`, { method: "DELETE" });
      const userValidate = await response.json();
      dispatch({ type: "deleteUserById", payload: userValidate });
    } catch (e) {}
  };
};

export const logoutUser = () => {
  return async (dispatch: any) => {
    dispatch({ type: "logoutUser"});
  };
};

export const deleteBookingById = (id: number) => {
  return async (dispatch: any) => {
    try {
      console.log(id)
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
     await fetch(`${URL}/booking/${id}`,{    method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'});
      dispatch({ type: "deleteBookingById", payload: id });
    } catch (e) {}
  };
};

export const setTripDetails = (trip: Trip) => {
  return async (dispatch: any) => {
    dispatch({ type: "setTripDetails", payload: trip});
  };
};

export const clearTrip = () => {
  return async (dispatch: any) => {
    dispatch({ type: "clearTrip"});
  };
};


// async function fetchDeleteBooking<Booking>(bookingId: number) {

// }
