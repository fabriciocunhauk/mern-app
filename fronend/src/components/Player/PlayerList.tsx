import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

function PlayerList({
  players,
  updateCurrentPlayer,
}: {
  players: any;
  updateCurrentPlayer: any;
}) {
  return (
    <div>
      <Card>
        <Center>
          <Heading size="md">Players</Heading>
        </Center>
        <CardBody>
          {players.map((player: any, index: number) => (
            <Stack key={index} divider={<StackDivider />} spacing="4">
              <Link href="#!" onClick={() => updateCurrentPlayer(player)}>
                <Text color="teal">
                  {player.firstName} {player.lastName}
                </Text>
              </Link>
            </Stack>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}

export default PlayerList;
