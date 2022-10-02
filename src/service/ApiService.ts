import { API_BASE_URL } from "../config/api-config";


export function call(api : string, method : string, request : any) {
    let options = {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      url: API_BASE_URL + api,
      method: method,
      body : ""
    };
    if (request != null) {
      options.body = JSON.stringify(request);
    }
    return fetch(options.url, options).then((response) =>{
      if(response.status === 200){
        return response.json();
      }
    }).catch((error) => {
      console.log("HTTP Error");
      console.log(error);
    });
  }