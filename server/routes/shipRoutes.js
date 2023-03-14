const router = require("express").Router();
const db = require("../config/connect");
const Ships = require("../models/Ship");

router.get("/",async (req, res) => 
    {   
        let ret = await Ships.find({}).lean();
        // console.log("hcits");
        // console.log(ret);
        res.json(ret);
    }
);
router.post("/add", async (req,res) =>
    {
        console.log("Incoming");
        console.log(req.body);
        Ships.create({...req.body})
    }
);
module.exports = router;