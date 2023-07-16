import { Grid, GridItem } from "@chakra-ui/react";
import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
import { Component } from "react";
import axios from "axios";
import PayerForm from "./Player/PlayerForm";

type PlayerProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: number;
  iscoach?: boolean;
  team?: string;
  speed?: number[];
  strength?: number[];
  endurance?: number[];
  ability?: number[];
  technics?: number[];
  tactical?: number[];
  created_date?: string;
}[];

class App extends Component<{}, { players: PlayerProps; currentPlayer: any }> {
  constructor(props: PlayerProps) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
    };
  }

  componentDidMount() {
    const url = "http://localhost:4000/players";

    axios
      .get(url)
      .then((response) => {
        this.setState({
          players: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  updateCurrentPlayer = (item: any) => {
    this.setState({
      currentPlayer: item,
    });
  };

  render() {
    return (
      <Grid gap={4} p="20px">
        <GridItem colSpan={12}>
          <div>menu</div>
        </GridItem>
        <GridItem colSpan={3}>
          <PlayerList
            players={this.state.players}
            updateCurrentPlayer={this.updateCurrentPlayer}
          />
        </GridItem>
        <GridItem colSpan={9}>
          <PlayerSingle player={this.state.currentPlayer} />
        </GridItem>
        <GridItem colSpan={12}>
          <PayerForm />
        </GridItem>
      </Grid>
    );
  }
}

export default App;
