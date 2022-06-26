import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//routes
import auth from './routes/auth';

const prefix = '[server-api]';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//api
app.use('/api/v1/auth', auth);

//server
app.listen(PORT, () => {
  console.log(`${prefix} running on port ${PORT}`);
});
