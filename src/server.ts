import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import swaggerFile from './config/swagger.json';
import './config/databaseConnection'

import { router } from './routes';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors());
app.use(router);

app.listen(3333, () => console.log("Server is running!"));