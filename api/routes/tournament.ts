import express from "express";
import connectToDatabase from "../db/index";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import Tournament, { TournamentInterface, TournamentDocumentInterface } from "../model/tournament";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const tournaments = await Tournament.find()  ;
        res.send(tournaments).status(200);
    } catch (err){
      res.send({ err: err}).status(400);
    }
  });
  
router.post("/", async (req, res) => {
    try {
      let newDocument: TournamentDocumentInterface = {
        name: req.body.name,
        status: req.body.status,
        type: req.body.type
      };

      const createTournament =  async () => {

          const response = await Tournament.create(newDocument);
          res.send(response).status(204);    
          console.log({response});
        }
      createTournament()
          
    } catch (err) {
      console.error(err);
      res.status(500).send("Error adding record");
    }
})

export default router;