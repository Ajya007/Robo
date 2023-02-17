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
    <Box minWidth="515px" p="30px" bg="#FFFFFF">
      <Text mb="40px" textAlign="center" color="blue.500" fontWeight="bold" fontSize="1.8rem">Customer Relationship Management – Lead Management</Text>
      <VStack>
        <Link to={NAVIGATION_ROUTES.ADDLEAD}>
          <Button width="100%" mb="20px" bg="teal.500" rounded="md"
            fontWeight="semibold" textColor="white"  _hover={{ bg: "teal.600" }}
            _focus={{ boxShadow: "outline" }}>
           Add Lead
        </Button>
        </Link>
        <Link to={NAVIGATION_ROUTES.VIEWLEAD}>
          <Button width="100%" mb="20px" bg="orange.500" rounded="md"
            fontWeight="semibold" textColor="white" _hover={{ bg: "orange.600" }}
            _focus={{ boxShadow: "outline" }}>
           View Lead
        </Button>
        </Link>
      </VStack>
    </Box>
  </Center>

  
};

export default Dashboard;
