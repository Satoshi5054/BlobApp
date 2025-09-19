import e from 'express';
import cors from 'cors'
import RootRouter from './routes/root-router.js';

const portnumber : number = 3001;
const app = e();
app.use(e.json());
app.use(cors());
app.use("/BlogApp/v1",RootRouter);

app.listen(portnumber);
