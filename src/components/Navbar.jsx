import React from "react";
import {
  Box,
  Center,
  Flex,
  Spacer,
  Input,
  Select,
  Button,
  Img,
  Text,
  CardFooter,
  CardBody,
  Heading,
  Card,
  Image,
  Stack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box bg="#d8d8d8" w="100%" color="#000000" h="70px">
      <Flex>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Box>
          <Center h="70px" fontSize="13px">
            <Link to="/">LOGO</Link>
          </Center>
        </Box>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Box>
          <Center h="70px" fontSize="13px">
            RESERVATION
          </Center>
        </Box>
        <Spacer />
        <Box>
          <Center h="70px" fontSize="13px">
            OFFERS
          </Center>
        </Box>
        <Spacer />
        <Box>
          <Center h="70px" fontSize="13px">
            LOCATIONS
          </Center>
        </Box>
        <Spacer />
        <Box>
          <Center h="70px" fontSize="13px">
            <Link to="/selectacar">CARS & SERVICES</Link>
          </Center>
        </Box>
        <Spacer />
        <Box>
          <Center h="70px" fontSize="13px">
            BUSINESS RENTALS
          </Center>
        </Box>
        <Spacer />
        <Box>
          <Center h="70px" fontSize="13px">
            CAR SALES
          </Center>
        </Box>
        <Spacer />
        <Box>
          <Center h="70px" fontSize="13px">
            HELP
          </Center>
        </Box>
        <Spacer />
        <Box>
          <Center h="70px" fontSize="13px">
            AVIS PREFERRED
          </Center>
        </Box>
        <Spacer />
        <Box>
          <Center h="70px" fontSize="13px">
            SIGN UP
          </Center>
        </Box>
        <Spacer />
        <Box>
          <Center h="70px" fontSize="13px">
            LOG IN
          </Center>
        </Box>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </Flex>
    </Box>
  );
}

export default Navbar;
