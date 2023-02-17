import {
    Box,
    Center,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    IconButton,
    Input,
} from "@chakra-ui/react";
import {
    useParams
} from "react-router-dom";



const UserDetail = () => {
    let { id } = useParams();
    return (
    <Center bg="#C4C4C4" minH="100vh">
        <Box minWidth="515px" p="40px" bg="#FFFFFF">
            hello : {id}
            </Box>
            </Center>
    )
}

export default UserDetail