import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import {editUser, getUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
   width:50%;
   margin:5% auto 0 auto;
   & > div {
    margin-top: 20px;
   }
`;

const EditUser = () => {
   const [user, setUser] = useState(null);
   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      const loadUserDetails = async () => {
         const response = await getUser(id);
         setUser(response.data[0]);
      };
      loadUserDetails();
   }, [id]);

   const onValueChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const editUserDetails = async () => {
      await editUser(user, id);
      navigate('/');
   };

   if (!user) {
      return <div>Loading...</div>;
   }

   return (
      <>
         <Container>
            <Typography variant="h4"> Edit User</Typography>
            <FormControl>
               <InputLabel>Name</InputLabel>
               <Input onChange={onValueChange} name="name" value={user.name} />
            </FormControl>
            <FormControl>
               <InputLabel>Username</InputLabel>
               <Input onChange={onValueChange} name="username" value={user.username} />
            </FormControl>
            <FormControl>
               <InputLabel>Phone Number</InputLabel>
               <Input onChange={onValueChange} name="phone" value={user.phone} />
            </FormControl>
            <FormControl>
               <InputLabel>Email</InputLabel>
               <Input onChange={onValueChange} name="email" value={user.email} />
            </FormControl>
            <FormControl>
               <Button variant="contained" onClick={editUserDetails}>Edit User</Button>
            </FormControl>
         </Container>
      </>
   );
};

export default EditUser;
