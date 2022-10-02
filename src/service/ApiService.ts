import { API_BASE_URL } from "../config/api-config";


export function call(api : string, method : string, request : any) {
    
  let headers = new Headers({
    "Content-Type" : "application/json",
  });
  
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) {
   headers.append("Authorization", "Bearer " + accessToken);
 }

  let options = {
      headers: headers,
      url: API_BASE_URL + api,
      method: method,
      body : ""
    };
    if (request != null) {
      options.body = JSON.stringify(request);
    }
    return fetch(options.url, options).then((response : any) =>{
      if(response.status === 200){
        return response.json();
      } else if (response.status === 403){
        alert("ID와 비밀번호를 확인 해 주세요!");
        window.location.href = "/login";
      } else {
        Promise.reject(response);
        throw Error(response);
      }
      console.log(response.status);
    }).catch((error) => {
      console.log("HTTP Error");
      alert("서비스 관리자에게 문의하세요");
      console.log(error);
    });
  }

export function signup(userDTO : any){
  return call("/auth/signup", "POST", userDTO);
}

export function signin(userDTO : any){
  return call("/auth/signin", "POST", userDTO)
  .then((response : any) =>{
    if(response.token){
      localStorage.setItem("ACCESS_TOKEN", response.token);
      window.location.href ="/";
    }
  })
}

export function signout(){
  localStorage.setItem("ACCESS_TOKEN", "");
  window.location.href = "/login";
}