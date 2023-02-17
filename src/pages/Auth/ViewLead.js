import {
  Input,
  Center,
  Box,
  Text,
  Heading,
  Button,
  HStack,
  VStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  
} from "@chakra-ui/react";
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";
import { useEffect ,useState} from "react";
import { viewLead } from "services/common.service";
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
import SimpleModal from "../../components/Modal"
import ExampleTable from "components/Table";
import { updateLeadData, closeLeadData } from "services/common.service";
import { useForm } from "react-hook-form";







const ViewLead = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [data,setData]=useState([])
  const [email,setEmail]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [name,setName]=useState("")
  const [leadId,setLeadId] = useState(null)

   useEffect(()=>{
     setLeadData()
   },[])


  const noPreview= () => {
    const notify = () => toast.error("Note is unavailable");
    notify();

  }
  const setLeadData= async() => {

       const res =await viewLead()
    if(res.status){

      setData(res?.response?.data?.datalist)
    } 
  }

  // write the save api here for saving the row and reload data later
  const handleEdit = async (row) => {

    // const res=await updateLeadData()
    setData((prevData) =>
      prevData.map((item) => (item.leadId === row.leadId ? row : item))
    );
    // setLeadData()
  };

  //write the delete api here for deleting the row and reload data for table here
  const handleDelete = (row) => {
    setData((prevData) =>
      prevData.filter((item) => item.leadId !== row.leadId)
    );
  };

  

  const closeLeadHandler = async(leadId) =>{
    const res = await closeLeadData(leadId)
    setLeadData()


  }


  // Function called onForm submit
  const onSubmit = async (data) => {
    console.log("form submitted in view", data);

  };


  return (
    <Center bg="#C4C4C4" minHeight="100vh">
      <Box minWidth="515px" padding="40px" bg="#FFFFFF">
        <HStack>
          {/* handleSubmit will validate your inputs before invoking "onSubmit" */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box pb="30px" position="relative">
              <Input
                minH="56px"
                disabled={false}
                placeholder="Name"
                {...register("firstName")}
              />
            </Box>


            <Box pb="30px" position="relative">
              <Input
                minH="56px"
                disabled={false}
                placeholder="email"
                {...register("email")}
              />
             
            </Box>

            <Box pb="30px" position="relative">
              <Input
                minH="56px"
                disabled={false}
                placeholder="phone number"
                {...register("phoneNumber")}
              />
            
            </Box>
            <Button type="submit">Search</Button>
          {/* <SearchIcon colorScheme='blue' /> */}
            </form>
        </HStack>

        <ExampleTable
          data={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          setLeadId={setLeadId}
          closeLeadHandler={closeLeadHandler}
          noPreview={noPreview}
        />
        {
          
          !!leadId && <SimpleModal leadId={leadId} setLeadId={setLeadId} />
        }
      
      </Box>
    </Center>
  );
};

export default ViewLead;
