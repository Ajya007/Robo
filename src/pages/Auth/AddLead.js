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
import { useState } from "react";
import { Link } from "react-router-dom";
import { addLead } from "services/common.service";
import toast from 'react-hot-toast';
import { ArrowBackIcon } from "@chakra-ui/icons";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


// Yup Form Validation Schema
const schema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  phoneNumber: yup.string().required('Phone number is required'), 
});

const AddLead = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false);

  // Function to toggle password show state
  const handleClick = () => setShow(!show);

  // Function called onForm submit
  const onSubmit = async (data) => {
    console.log("form submitted", data);

        setLoading(true)
      const res = await addLead(data)
      setLoading(false)
      if (res.status) {
        const notify = () => toast.success(res.message);
        notify();
        reset();
      } else {
        const notify = () => toast.error(res.message);
        notify();
      }
    
  };

  return (
    <Center bg="#C4C4C4" minH="100vh">
      <Box minWidth="515px" p="40px" bg="#FFFFFF">
        
       

        {/* handleSubmit will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box pb="30px" position="relative">
            <Input
              minH="56px"
              disabled={false}
              placeholder="First Name"
              {...register("firstName")}
            />
            <Text position="absolute" bottom="2px" color="red">
              {errors.firstName?.message}
            </Text>
          </Box>


          <Box pb="30px" position="relative">
            <Input
              minH="56px"
              disabled={false}
              placeholder="Middle Name"
              {...register("middleName")}
            />
            <Text position="absolute" bottom="2px" color="red">
              {errors.middleName?.message}
            </Text>
          </Box>

          <Box pb="30px" position="relative">
            <Input
              minH="56px"
              disabled={false}
              placeholder="Last Name"
              {...register("lastName")}
            />
            <Text position="absolute" bottom="2px" color="red">
              {errors.lastName?.message}
            </Text>
          </Box>

          <Box pb="30px" position="relative">
            <Input
              minH="56px"
              disabled={false}
              placeholder="Email address"
              {...register("email")}
            />
            <Text position="absolute" bottom="2px" color="red">
              {errors.email?.message}
            </Text>
          </Box>

          <Box pb="30px" position="relative">
            <Input
              type="number"
              minH="56px"
              disabled={false}
              placeholder="Phone Number"
              {...register("phoneNumber")}
            />
            <Text position="absolute" bottom="2px" color="red">
              {errors.phoneNumber?.message}
            </Text>
          </Box>
   

          <Button width="100%" type="submit" mb="52px" bg="green.500" rounded="md"
        fontWeight="semibold" textColor="white" isDisabled={loading} _hover={{ bg: "green.600" }}
        _focus={{ boxShadow: "outline" }}>
            {loading ? "Loading..." : "Submit"}
        </Button>
        </form>

          <Link width="100%" to='/'>
            <Button width="100%" type="submit" mb="52px" bg="blue.500" rounded="md"
              fontWeight="semibold" textColor="white" isDisabled={loading} _hover={{ bg: "blue.600" }}
              _focus={{ boxShadow: "outline" }}>
              Go Back            </Button>
          </Link>
       

       
       
      </Box>
    </Center>
  );


};


export default AddLead;
