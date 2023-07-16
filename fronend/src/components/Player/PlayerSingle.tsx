import {
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import soccerImage from "../../assets/soccer.jpeg";

function PlayerSingle({ player }: any) {
  return (
    <Card>
      <Center>
        <Image
          src={soccerImage}
          w="100%"
          h="250px"
          objectFit="cover"
          alt="soccer"
        />
      </Center>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Text color="teal">
            {player.firstName} {player.lastName}
          </Text>
          <Text color="teal">
            Phone: {player.phone} Email: {player.email}
          </Text>
          <Text color="teal">
            {player.firstName} {player.lastName}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default PlayerSingle;
