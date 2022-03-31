const URL:string = (process.env.REACT_APP_BASE_URL as string);

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