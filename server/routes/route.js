import express from "express";
import { addUser, getUsers, getUser, editUser, deleteUser } from "../controller/user-controller.js";

import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};


const router = express.Router();

router.post(`/add`, authMiddleware, addUser);
router.get(`/`, authMiddleware, getUsers);
router.get(`/:id`,authMiddleware,  getUser);
router.post(`/:id`, authMiddleware, editUser);
router.delete(`/:id`, authMiddleware, deleteUser);



export default router;