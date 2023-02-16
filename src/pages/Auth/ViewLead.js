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
  TableContainer
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect ,useState} from "react";
import { viewLead } from "services/common.service";
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";

const ViewLead = () => {

  const [data,setData]=useState([])
  const [email,setEmail]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [name,setName]=useState("")

   useEffect(()=>{
     setLeadData()
   },[])

  const setLeadData= async() => {

       const res =await viewLead()
    console.log("useEffect",res);
    if(res.status){

      setData(res?.response?.data?.datalist)
    } 
  }

console.log(data,"DDDD")


  return (
    <Center bg="#C4C4C4" minHeight="100vh">
      <Box minWidth="515px" padding="40px" bg="#FFFFFF">
        <HStack>
          <Input
            minH="56px"
            disabled={false}
            placeholder="Search by Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <SearchIcon colorScheme='blue' />
        </HStack>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>List of all the leads</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th isNumeric>Phone Number</Th>
                <Th>Actions</Th>
                <Th>Close Record</Th>
                <Th>Status</Th>
                <Th>Account Status</Th>
                <Th>Notes</Th>
              </Tr>
            </Thead>
            <Tbody>

              {data?.map((el,rowIndex) =><Tr key={rowIndex}>
                <Td>{el.firstName + " " + el.middleName + " " +  el.lastName}</Td>
                <Td>

                  <Input
            minH="56px"
            disabled={false}
            placeholder="Email address"
            value={email || el.email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            />

            
                            </Td>
           

                  {/* {data?.map((row, rowIndex) => {
                    <Tr key={rowIndex}>
                      {row.map((cell, colIndex) =>{
                        <Input
                          minH="56px"
                          disabled={false}
                          placeholder="Email address"
                          value={email || el.email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                          }}
                        />
                      })}

                    </Tr>
                  })} */}
                <Td>{el.phoneNumber}</Td>
                <Td>
                <HStack>
                <Button>Edit</Button>
                <Button>Update</Button>
                </HStack>
                </Td>
                <Td>
                  {el.isActive ? <Button>Close</Button> : <Button>Closed</Button>}
                </Td>

                <Td>{el.leadStatus}</Td>
                <Td>{el.isActive ? "Active" : "InActive"}</Td>
                <Td><Button>View</Button></Td>
              </Tr>)}

              
              
            </Tbody>
          
          </Table>
        </TableContainer>
      </Box>
    </Center>
  );
};

export default ViewLead;
