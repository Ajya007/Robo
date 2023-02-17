import { useState } from "react";
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    IconButton,
    Input,
    HStack,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const ExampleTable = (props) => {
    const [editingRow, setEditingRow] = useState(null);
    const { data, handleEdit, handleDelete, setLeadId, closeLeadHandler, noPreview } = props;

    const handleEditClick = (row) => {
        setEditingRow(row);
    };

    const handleSaveClick = (row) => {
        setEditingRow(null);
        handleEdit(row);
    };

    const handleCustomSave =(row)=>{
        //logic to push api


        //then//
        setEditingRow(false)
        setEditingRow(null);
    }

    const handleCancelClick = () => {
        setEditingRow(null);
    };

    const handleDeleteClick = (row) => {
        handleDelete(row);
    };

    return (
        <Box mx="auto">
            <Table>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Phone Number</Th>
                        <Th>View Detail</Th>
                        <Th>Action</Th>
                        <Th>Close Record</Th>
                        <Th>Status</Th>
                        <Th>Account Status</Th>
                        <Th>Notes</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((row) => (
                        <Tr key={row.leadId}>
                            <Td>
                                {`${row.firstName} ${row.middleName} ${row.lastName}`}
                            </Td>
                            <Td>
                                {editingRow?.leadId === row.leadId ? (
                                    <Input
                                        value={row.email}
                                        onChange={(e) =>
                                            handleEdit({
                                                ...row,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    row.email
                                )}
                            </Td>
                            <Td>
                                {editingRow?.leadId === row.leadId ? (
                                    <Input
                                        value={row.phoneNumber}
                                        onChange={(e) =>
                                            handleEdit({
                                                ...row,
                                                phoneNumber: e.target.value,
                                            })
                                        }
                                    />
                                ) : (
                                    row.phoneNumber
                                )}
                            </Td>
                            <Td>
                                <Link to={`/userDetail/${row.leadId }`} >
                                <IconButton
                                    icon={<ViewIcon />}
                                    colorScheme="blue"
                                    size="sm"
                                />
                                </Link>
                                </Td>
                            <Td>
                                {editingRow?.leadId === row.leadId ? (
                                    <HStack spacing={2}>
                                        <Button
                                            colorScheme="green"
                                            size="sm"
                                            onClick={() => handleCustomSave(row)}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            colorScheme="red"
                                            size="sm"
                                            ml="2"
                                            onClick={handleCancelClick}
                                        >
                                            Cancel
                                        </Button>
                                    </HStack>
                                ) : (
                                    <>
                                        <IconButton
                                            icon={<EditIcon />}
                                            colorScheme="blue"
                                            size="sm"
                                            onClick={() => handleEditClick(row)}
                                        />
                                    </>
                                )}
                            </Td>
                            <Td>
                                {row?.isActive ? (
                                    <Button onClick={() => {closeLeadHandler(row.leadId)}}>Close</Button>
                                ) : (
                                    <Button>Closed</Button>
                                )}
                            </Td>
                            <Td>{row?.leadStatus}</Td>
                            <Td>{row?.isActive ? "Active" : "InActive"}</Td>
                            <Td>
                                {row?.isActive ? <Button onClick={() => setLeadId(row.leadId)}>View</Button> : <Button onClick={() => noPreview()}>View</Button> }
                                
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default ExampleTable;
