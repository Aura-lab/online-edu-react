import LoginTypes from "../components/types/logintypes"


const _token = 'token';
const _loginType = 'loginType';

class User {
    // return an authorisation token
    // return {string} token to insert in the request header

  static getToken(){
      return localStorage.getItem(_token);
  }

  static saveToken(value) {
      return localStorage.setItem(_token, value);
  }
  static deleteToken(){
      return localStorage.removeItem(_token);
  }
  //delete logintype
  static deleteLoginType(){
      return localStorage.removeItem(_loginType);
  }

  /***
   * 
   *return a loginType
   */
  static getLoginType(){
      return localStorage.getItem(_loginType);
  }
  /**
   * save token
   */
  static saveLoginType(value){
      return localStorage.setItem(_loginType, LoginTypes[value]);
  }

}

export default User
