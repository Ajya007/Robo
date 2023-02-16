import {
  Input,
  InputGroup,
  Center,
  Box,
  Text,
  Heading,
  InputRightElement,
  Button,
  Checkbox,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_ROUTES } from "../../routes/routes.constant";




const Dashboard = () => {



  return <Center bg="#C4C4C4" minH="100vh">
    <Box minWidth="515px" p="40px" bg="#FFFFFF">
      <VStack>
        <Button width="100%" type="submit" mb="52px">
          <Link to={NAVIGATION_ROUTES.ADDLEAD}> Add Lead</Link>
        </Button>
        <Button width="100%" type="submit" mb="52px">
          <Link to={NAVIGATION_ROUTES.VIEWLEAD}> View Lead</Link>
        </Button>
      </VStack>
    </Box>
  </Center>

  
};

export default Dashboard;
