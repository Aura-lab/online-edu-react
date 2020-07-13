import Axios from "./axios";
import Logger from "./logger";
import Router from "next/router";
import Error from "../models/error"


class REST {
    /**
     * return an axios to get promise object
     * 
     * {string} url for http get
     * return axios get promise object 
     */
    static async get(url){
        let res;
        let error = new Error();
        // axios.init? confuse
        const axios =Axios.init();
        try {
            res = await axios.get(url);

            if (res.data.code !=0){
                error.msg = res.data.message;
                error.code = res.data.code
                if(res.data.code === 555){
                    error.action = () =>{
                        Router.push("/login");
                    };
                }
                throw `Error occured with http get, error code: ${error.code} ,message: ${error.msg}`;
            }
            return res;
        }catch (e) {
        Logger.log(e);
        error.action && error.action();
        return error;
        }
    }

    static async posy(url, req){
        let res;
        let error = new Error();
        const axios = Axios.init();
        try{
            res = await axios.post(url,req);
                if(res.data.code !=0){
                    error.msg = res.data.message;
                    error.code = res.data.code;
                    if(res.data.code ===555){
                        error.action = () =>{
                            Router.push("/login");
                        };
                    }
                    throw `Eroor occured with http post. error code: ${error.code} ,message: ${error,msg}`;
                    }
                    return res;
        }catch (e) {
            Logger.log(e);
            error.action && error.action();
            return error;
        }
    }

}
export default REST;