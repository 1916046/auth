import { Table, TableHead, TableCell, TableRow, TableBody, Button} from "@mui/material";
import { getUsers, deleteUser } from "../service/api.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
 const [users, setUsers] = useState([]);
 
    useEffect(()=>{
          getAllUsers();
    }, []);

    const getAllUsers = async () =>{
        let response = await getUsers();
        setUsers(response.data);
    }

    const deleteUserdetails = async (id) => {
      await deleteUser(id);
      getAllUsers();
    }
return (<>
    <Table>
    <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
        </TableRow>
    </TableHead>
        <TableBody>
             {
                users.map((user) =>
                    (<TableRow key={user._id}>
                        <TableCell>
                            {user.name}
                        </TableCell>
                        <TableCell>
                            {user.username}
                        </TableCell>
                        <TableCell>
                            {user.phone}
                        </TableCell>
                        <TableCell>
                            {user.email}
                        </TableCell>
                        <TableCell>
                            <Button variant="contained" style={{marginRight: 10}} component ={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button variant="contained" onClick={()=>{deleteUserdetails(user._id)}}>Delete</Button>
                        </TableCell>
                    </TableRow>)
                )
             }
        </TableBody>
    </Table></>)
};


export default Home;