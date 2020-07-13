import Router from "next/router";
import { useEffect } from "react";
import User from "../lib/user";
import LoginType from "../components/types/logintypes"


function Homepage() {
    useEffect(() => {
        let isLogin = false;
        if (User.getToken()) isLogin = true;

        if(!isLogin){
           // login page did not create
           Router.push("/login");
       }else{
           const loginType = User.getLoginType();
           if(loginType === LoginType.teacher) {
            Router.push("/student");
           }else{
               console.log("create student selections");
           }   
       }
    });
    return (
        <React.Fragment></React.Fragment>
    )
}

export default Homepage;
