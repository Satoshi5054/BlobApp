import {Router} from 'express'
import UserRouter from './user.js';
import BlogRouter from './blog.js';

const RootRouter = Router();

RootRouter.use("/user",UserRouter);
RootRouter.use("/blog",BlogRouter);

export default RootRouter;
