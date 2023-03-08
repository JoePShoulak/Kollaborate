const router = require("express").Router();
const db = require("../config/connect");
const Ships = require("../models/Ship");

router.get("/ships",async (req, res) => 
    {   
        // db.p
        let ret = Ships.find({});
        console.log("hits");
        console.log(ret);
        res.json();
    }
);