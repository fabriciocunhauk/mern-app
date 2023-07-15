import { addNewPlayer, getPlayerWithID, getPlayers, updatePlayer } from "../controllers/playerControllers";

const routes = (app) => {
    app.route('/players')
        .post(addNewPlayer)
            .get(getPlayers)

    app.route('/player/:playerId')
        .get(getPlayerWithID)
            .put(updatePlayer);
};

export default routes;