// const URL:string = (process.env.REACT_APP_BASE_URL as string);
const URL:string = 'http://localhost:8080';

export const getAllCars =  () => {
    return async (dispatch:any) => {
      try {
        const response = await fetch(`${URL}/cars`);
        console.log("IM ACTION CREATOR")
        console.log(`${URL}/cars`)
        const cars = await response.json();
        console.log(cars)
        dispatch({type: 'getAllCars',payload: cars});
      }catch(e) {
        
      }
    };
  };