import { addNewPlayer, getPlayerWithID, getPlayers, updatePlayer, deletePlayerWithID } from "../controllers/playerControllers";

const routes = (app) => {
    app.route('/players')
        .post(addNewPlayer)
            .get(getPlayers)

    app.route('/player/:playerId')
        .get(getPlayerWithID)
            .put(updatePlayer)
                .delete(deletePlayerWithID)
};

export default routes;