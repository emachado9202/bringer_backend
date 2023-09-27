import express from 'express';
import { router } from './routes';
import { env } from 'process';


const app = express();

app.use(express.json());

app.use(router);

const PORT = env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default app;