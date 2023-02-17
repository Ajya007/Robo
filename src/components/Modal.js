import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Lorem,
    HStack,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    Input,
    Text,
    Box
} from '@chakra-ui/react';
import { useState } from 'react'
import { CheckIcon } from '@chakra-ui/icons'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { createNotes } from 'services/common.service';
import { fetchContactNote } from 'services/common.service';






function SimpleModal({ leadId, setLeadId }) {
    useEffect(() => {
        if(leadId){
     fetchModalData()
        }
    }, [leadId])

    const fetchModalData =async () => {
        setDataLoading(true)
     const res=await fetchContactNote(leadId)
        setDataLoading(false)
     console.log("setData",res?.response?.data?.datalist)
        if (res?.response?.data?.datalist != null ){
            setNoteData(res?.response?.data?.datalist)
        }
     
    } 


  const[noteData,setNoteData]=useState([])
    const { isOpen, onOpen, onClose } = useDisclosure({
        isOpen:!!leadId
    })
    const [description, setDescription] = useState("")
    const[dataLoading,setDataLoading] =useState(false)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    const errorMessage = "This feild is required"


    const updateHandler =async() => {
        if(description == ""){
            setError(true)

        }else{
            setError(false)
        setLoading(true)
        const res = await createNotes({ leadId, description })
        setLoading(false)
         if (res.status) {
        const notify = () => toast.success(res.message);
        notify();
        fetchModalData()
        setDescription("")
      } else {
        const notify = () => toast.error(res.message);
        notify();
      }
        }
    }

    const handleClose =() => {
        setLeadId(null)
    }
    return (
        <>

            <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center" color="blue.500">Contact Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <HStack pb="28px" position="relative">
                            
                                <Input
                                    minH="56px"
                                    disabled={false}
                                    placeholder="Add New Notes"
                                    onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}
                                value={description}
                                />
                                
                                <Text position="absolute" bottom="2px" color="red">
                                    {error? errorMessage : ""}
                                </Text>
                                
                                                    </HStack>
                        {dataLoading ? "loading..." : <HStack mt={1}>

                            {noteData.length > 0 ?
                                <List spacing={3}>
                                    {noteData.map(el =>

                                        <HStack spacing={4}>
                                            <CheckIcon color='blue.500' />
                                            <ListItem>
                                                {el.description}
                                            </ListItem>
                                        </HStack>
                                    )}



                                </List>

                                : <Text color="black">
                                 No note available
                                </Text>}

                        </HStack>}





                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleClose}>
                            Close
                        </Button>
                        <Button colorScheme='green' isDisabled={loading} onClick={updateHandler}> {loading ? "Loading..." : "Update"}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SimpleModal;