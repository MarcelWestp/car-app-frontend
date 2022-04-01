import Car from './../../models/Car'
import User from './../../models/User'
import PostUser from './../../models/PostUser'

// const URL:string = (process.env.REACT_APP_BASE_URL as string);
const URL: string = 'http://localhost:8080';

export const getAllCars = () => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/cars`);
      const cars = await response.json();
      dispatch({ type: 'getAllCars', payload: cars });
    } catch (e) {

    }
  };
};

export const getAllCarsByHostId = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/cars/host/${id}`);
      const cars = await response.json();
      dispatch({ type: 'getAllCarsByHostId', payload: cars });
    } catch (e) {

    }
  };
};

export const getAllCarsByCity = (city: string) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/cars/city/${city}`);
      const cars = await response.json();
      dispatch({ type: 'getAllCarsByCity', payload: cars });
    } catch (e) {

    }
  };
};

export const getCarById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/car/${id}`);
      const carById = await response.json();
      dispatch({ type: 'getCarById', payload: carById });
    } catch (e) {

    }
  };
};

export const delteCarById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/car/${id}`, { method: 'DELETE' });
      const carById = await response.json();
      dispatch({ type: 'delteCarById', payload: carById });
    } catch (e) {

    }
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
      dispatch({ type: 'postCar', payload: carById });
    } catch (e) {

    }
  };
};

export const getUserById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/user/${id}`);
      const userById = await response.json();
      dispatch({ type: 'getUserById', payload: userById });
    } catch (e) {

    }
  };
};

export const getValidateUser = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/validate?input=${email}&password=${password}`);
      const userValidate = await response.json();
      dispatch({ type: 'getValidateUser', payload: userValidate });
    } catch (e) {

    }
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
      const postUser = await response.json();
      dispatch({ type: 'postUser', payload: postUser });
    } catch (e) {

    }
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
      dispatch({ type: 'updateUser', payload: userValidate });
    } catch (e) {

    }
  };
};

export const delteUserById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL}/user/${id}`, { method: 'DELETE' });
      const userValidate = await response.json();
      dispatch({ type: 'delteUserById', payload: userValidate });
    } catch (e) {

    }
  };
};  