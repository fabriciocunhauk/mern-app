import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = async (req, res) => {
   const newPlayer = new Player(req.body);
   const addedPlayer = await newPlayer.save();
    return res.json(addedPlayer);
};

export const getPlayers =  async (req, res) => {
   const players = await Player.find();
    return res.json(players);
};