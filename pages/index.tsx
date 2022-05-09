import { ArrowForwardIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box bg="#f4e5e2" w="100vw" h="100vw">
      <Flex
        alignItems="center"
        pt="2rem"
        px="15vw"
        color="#291f6c"
        fontWeight={"bold"}
        direction="column"
      >
        <Heading fontSize={"2.7rem"}>Say hello to Newton.</Heading>
        <Heading fontSize={"2.7rem"}>
          Low-cost crypto trading for Canadians.
        </Heading>
      </Flex>
      <Flex alignItems="center" mt="2rem" direction={"column"} gap="2rem">
        <Button
          leftIcon={<InfoOutlineIcon />}
          color="#333"
          bg="#bebfe0"
          borderRadius={"20px"}
          transition="background-color 350ms, padding 425ms"
          _hover={{
            pr: "32px",
            pl: "1rem",
            bgColor: "#fff",
            bgImage: "arrow.svg",
            WebkitTransform: "background 300ms linear",
            bgPosition: "97% 50%",
            bgSize: "16px",
            bgRepeat: "no-repeat",
          }}
        >
          <Text fontSize={"0.8rem"} fontWeight={500}>
            {"Psst. We're giving away $200K 🤑"}
          </Text>
        </Button>
        <Button
          _hover={{
            transform: "translate(0,-4px)",
            boxShadow: "2xl",
          }}
          pl="5rem"
          pr="3rem"
          py={"2.5rem"}
          bg="white"
          color="#291f6c"
          fontWeight={"bold"}
          fontSize={16}
          letterSpacing="1.25px"
          borderRadius={100}
          transition="transform .3s cubic-bezier(.743, .001, .205, .995), box-shadow .4s"
          rightIcon={<ArrowForwardIcon ml="1.75rem" boxSize="2rem" />}
        >
          GET STARTED
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
