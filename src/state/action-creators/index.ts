// const URL:string = (process.env.REACT_APP_BASE_URL as string);
const URL:string = 'http://localhost:8080';

export const getAllCars =  () => {
    return async (dispatch:any) => {
      try {
        const response = await fetch(`${URL}/cars`);
        const cars = await response.json();
        dispatch({type: 'getAllCars',payload: cars});
      }catch(e) {
        
      }
    };
  };

  export const getCarById = (id:number) => {
    return async (dispatch:any) => {
      try {
        const response = await fetch(`${URL}/car/${id}`);
        const carById = await response.json();
        dispatch({type: 'getCarById',payload: carById});
      }catch(e) {
        
      }
    };
  };  

  export const getUserById = (id:number) => {
    return async (dispatch:any) => {
      try {
        const response = await fetch(`${URL}/user/${id}`);
        const userById = await response.json();
        dispatch({type: 'getUserById',payload: userById});
      }catch(e) {
        
      }
    };
  };  

  export const getValidateUser = async (email: string, password: string): Promise<any> => {
    return async (dispatch:any): Promise<any> => {
      try {
        const response = await fetch(`${URL}/validate?input=${email}&password=${password}`);
        const userValidate = await response.json();
        dispatch({type: 'getValidateUser',payload: userValidate});
      }catch(e) {
      
      }
    };
  };  