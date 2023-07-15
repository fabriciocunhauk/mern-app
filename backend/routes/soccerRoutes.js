import { addNewPlayer, getPlayers } from "../controllers/playerControllers";

const routes = (app) => {
    app.route('/players')
        .post(addNewPlayer)
            .get(getPlayers);
};

export default routes;