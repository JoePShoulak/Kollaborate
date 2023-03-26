const router = require('express').Router();
const axios =  require('axios');
// const passport = require("passport-oauth2");


router.get("/", async (req,res)=>
    {
        console.log("REEEEEEEE");
        console.log(req);
        // console.log(req);
        // axios.get("/auth",{
        //     scope: "https://www.googleapis.com/auth/userinfo.email",
        //     include_granted_scopes: "true",
        //     response_type: "token",
        //     state: "logged_in",
        //     redirect_uri: "http://localhost:3001/auth/",
        //     client_id: "82657227381-jiv8dbkh5unpbed4kt04rrffogiqtcok.apps.googleusercontent.com"
        // }).then(function (res) {
        //     console.log(res);
        // });
        res.send(200);
    }
);

module.exports = router;