import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { FormEvent, useState } from "react";

function PayerForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [iscoach, setIsCoach] = useState(false);
  const [team, setTeam] = useState("");
  const [speed, setSpeed] = useState("");
  const [strength, setStrength] = useState("");
  const [endurance, setEndurance] = useState("");
  const [ability, setAbility] = useState("");
  const [technics, setTechnics] = useState("");
  const [tactical, setTactical] = useState("");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement & HTMLDivElement>
  ): void => {
    event.preventDefault();

    axios
      .post("http://localhost:4000/players", {
        firstName,
        lastName,
        email,
        phone,
        iscoach,
        team,
        speed,
        strength,
        endurance,
        ability,
        technics,
        tactical,
      })
      .then((response) => {
        console.log(response);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setIsCoach(false);
        setTeam("");
        setSpeed("");
        setStrength("");
        setEndurance("");
        setAbility("");
        setTechnics("");
        setTactical("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Text>Add player</Text>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>First name</FormLabel>
          <Input
            value={firstName}
            name="firstName"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <FormLabel htmlFor="lastName">Last name</FormLabel>
          <Input
            value={lastName}
            name="lastName"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />

          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            value={email}
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>

          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            value={phone}
            name="phone"
            type="number"
            onChange={(e) => setPhone(e.target.value)}
          />

          <Stack spacing={5} direction="row">
            <Checkbox onChange={(e) => setIsCoach(e.target.checked)}>
              Are you a Coach
            </Checkbox>
          </Stack>

          <FormLabel htmlFor="team">Team</FormLabel>
          <Input
            value={team}
            name="team"
            type="text"
            onChange={(e) => setTeam(e.target.value)}
          />

          <FormLabel htmlFor="speed">Speed</FormLabel>
          <Input
            value={speed}
            name="speed"
            type="number"
            onChange={(e) => setSpeed(e.target.value)}
          />

          <FormLabel htmlFor="speed">Strength</FormLabel>
          <Input
            value={strength}
            name="strength"
            type="number"
            onChange={(e) => setStrength(e.target.value)}
          />

          <FormLabel htmlFor="endurance">Endurance</FormLabel>
          <Input
            value={endurance}
            name="endurance"
            type="number"
            onChange={(e) => setEndurance(e.target.value)}
          />

          <FormLabel htmlFor="ability">Ability</FormLabel>
          <Input
            value={ability}
            name="ability"
            type="number"
            onChange={(e) => setAbility(e.target.value)}
          />

          <FormLabel htmlFor="technics">Technics</FormLabel>
          <Input
            value={technics}
            name="technics"
            type="number"
            onChange={(e) => setTechnics(e.target.value)}
          />

          <FormLabel htmlFor="tactical">Tactical</FormLabel>
          <Input
            value={tactical}
            name="tactical"
            type="number"
            onChange={(e) => setTactical(e.target.value)}
          />

          <Button type="submit" colorScheme="teal" size="xs">
            Add Player
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default PayerForm;
