import { addNewPlayer, getPlayerWithID, getPlayers } from "../controllers/playerControllers";

const routes = (app) => {
    app.route('/players')
        .post(addNewPlayer)
            .get(getPlayers)

    app.route('/player/:playerId')
        .get(getPlayerWithID);
};

export default routes;