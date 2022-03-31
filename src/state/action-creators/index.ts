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

  export const getCarById =  (id:number) => {
    return async (dispatch:any) => {
      try {
        const response = await fetch(`${URL}/car/${id}`);
        console.log("IM ACTION CREATOR")
        console.log(`${URL}/car/${id}`)
        const carById = await response.json();
        dispatch({type: 'getCarById',payload: carById});
      }catch(e) {
        
      }
    };
  };  