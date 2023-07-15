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

export const getPlayerWithID =  async (req, res) => {
   const players = await Player.findById(req.params.playerId).exec();
    return res.json(players);
};

export const updatePlayer =  async (req, res) => {
   const players = await Player.findOneAndUpdate({ _id: req.params.playerId }, req.body, {new: true});
    return res.json(players);
};

export const deletePlayerWithID =  async (req, res) => {
    await Player.findOneAndDelete({ _id: req.params.playerId }, req.body);
        return res.json({ message: "Successfully deleted player" });
};