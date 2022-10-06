import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './router';

dotenv.config();

const PORT = process.env.PORT;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN }));
app.use(urlencodedParser, router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
