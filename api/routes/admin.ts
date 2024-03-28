import express from "express";
import connectToDatabase from "../db/index";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import Admin, { UserAdminInterface } from "../model/admin";

const router = express.Router();

router.get("/", async (req, res) => {
  const firstArticle = await Admin.findOne({})  ;
  console.log(firstArticle);
    res.send(firstArticle).status(200);
  });
  
router.post("/", async (req, res) => {
    try {
        const createAdmin =  async () => {

            const article = await Admin.create({
              firstName: "kerwin1",
              lastName: "reyes",
              username:"kerwinreyes",
              password: "kerwin",
              status: "ACTIVE",  
            });
            
            console.log(article);
          }
          createAdmin()
          
    } catch {

    }
})

export default router;