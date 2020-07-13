
import REST from "./rest";
import User from "./user";
import Router from "next/router";
import Error from "../models/error"

// object with key and value
//return {string} query string
const objectToQuery = (param) =>{
    if(!param) return '';
    return '?' + Object.keys(param).map((i) =>{
        return i + "=" + param[i];
    }).join('&')
}
class API {
    static teacherLogin(req){
        return REST.post("teacher/login", req);
    }
    static studentLogin(req){
        return REST.post("student/login",req);
    }

    static managerLogin(req){
        return REST.post("manager/login",req);
    }
    static logout(){
        User.deleteToken();
        Router.push("/");
    }
    // `${query}` ??? confuse
    static getStudentList(param) {
        return REST.get(`student/list${objectToQuery(param)}`);
    }
    static CheckAPIResult(param){
        return param instanceof Error ? false: true;
    }
}

export default API;