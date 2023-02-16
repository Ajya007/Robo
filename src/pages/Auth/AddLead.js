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
  firstName: yup.string().required("This field is required"),
  // middleName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  email: yup.string().required("This field is required"),
  phoneNumber: yup.string().required("This field is required"),
});

const AddLead = () => {
  // const[loading,setLoading]=useState(false)
  // const [name, setName] = useState({ firstName: "", middleName: "", lastName: "" })
  // const [email, setEmail] = useState("")
  // const [phoneNumber, setPhoneNumber] = useState("")
  // // Function called onForm submit
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   if(name.firstName=="" || name.lastName=="" || email=="" || phoneNumber==""){
  //     const notify = () => toast.error("Enter all the required Feilds");
  //     notify();
  //   }else{
  //     setLoading(true)
  //     const res = await addLead({ name, email, phoneNumber })
  //     setLoading(false)
  //     if (res.status) {
  //       const notify = () => toast.success(res.message);
  //       notify();
  //       resetForm();
  //     } else {
  //       const notify = () => toast.error(res.message);
  //       notify();
  //     }

  //   }
   
  // };

  // const resetForm =() =>{
  //   setName({ firstName: "", middleName: "", lastName: "" })
  //   setEmail("")
  //   setPhoneNumber("")
  // }


  // return <Center bg="#C4C4C4" minH="100vh">
  //   <Box minWidth="515px" p="40px" bg="#FFFFFF">
  //     {/* handleSubmit will validate your inputs before invoking "onSubmit" */}
  //     <form onSubmit={onSubmit}>

  //       <Box pb="28px" position="relative">
  //         <Input
  //           minH="56px"
  //           disabled={false}
  //           placeholder="First Name"
  //           onChange={(e) => {
  //             setName({ ...name, firstName: e.target.value })
  //           }}
  //           value={name.firstName}
  //         />
  //       </Box>

  //       <Box pb="28px" position="relative">
  //         <Input
  //           minH="56px"
  //           disabled={false}
  //           placeholder="Middle Name"
  //           value={name.middleName}
  //           onChange={(e) => {
  //             setName({ ...name, middleName: e.target.value })
  //           }}
  //         />
  //       </Box>


  //       <Box pb="28px" position="relative">
  //         <Input
  //           minH="56px"
  //           disabled={false}
  //           placeholder="Last Name"
  //           value={name.lastName}
  //           onChange={(e) => {
  //             setName({ ...name, lastName: e.target.value })
  //           }}
  //         />
  //       </Box>



  //       <Box pb="28px" position="relative">
  //         <Input
  //           minH="56px"
  //           disabled={false}
  //           placeholder="Email address"
  //           value={email}
  //           onChange={(e) => {
  //             setEmail(e.target.value)
  //           }}
  //         />
  //       </Box>
  //       <Box position="relative" pb="28px">
  //         <InputGroup>
  //           <Input
  //             minHeight="56px"
  //             pr="4.5rem"
  //             placeholder="Phone Number"
  //             value={phoneNumber}
  //             onChange={(e) => {
  //               setPhoneNumber(e.target.value)
  //             }}
  //           />
  //         </InputGroup>
  //       </Box>

  //       <Box
  //         display="flex"
  //         justifyContent="space-between"
  //         marginBottom="32px"
  //       >

  //       </Box>
  //       <Button width="100%" type="submit" mb="52px" bg="teal.500" rounded="md"
  //         fontWeight="semibold" textColor="white" isDisabled={loading} _hover={{ bg: "teal.600" }}
  //         _focus={{ boxShadow: "outline" }}>
  //         Submit
  //       </Button>
  //     </form>
  //   </Box>
  // </Center>


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
  const onSubmit = (data) => {
    console.log("form submitted", data);
    reset();
  };

  return (
    <Center bg="#C4C4C4" minH="100vh">
      <Box minWidth="515px" p="40px" bg="#FFFFFF">
        <Link to='/'>
        <HStack spacing={2} mb="28px">
          <ArrowBackIcon />
          <Text color="#585858" fontSize="14px" fontWeight="400px">
            back
          </Text>
        </HStack>
        </Link>

        {/* handleSubmit will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box pb="28px" position="relative">
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


          <Box pb="28px" position="relative">
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

          <Box pb="28px" position="relative">
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

          <Box pb="28px" position="relative">
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

          <Box pb="28px" position="relative">
            <Input
              minH="56px"
              disabled={false}
              placeholder="Phone Number"
              {...register("phoneNumber")}
            />
            <Text position="absolute" bottom="2px" color="red">
              {errors.phoneNumber?.message}
            </Text>
          </Box>
   

          <Button width="100%" type="submit" mb="52px" bg="teal.500" rounded="md"
        fontWeight="semibold" textColor="white" isDisabled={loading} _hover={{ bg: "teal.600" }}
        _focus={{ boxShadow: "outline" }}>
          Submit
        </Button>
        </form>
       
       
      </Box>
    </Center>
  );


};


export default AddLead;
