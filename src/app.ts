import express from 'express';
import { router } from './routes';
import { env } from 'process';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

const PORT = env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default app;