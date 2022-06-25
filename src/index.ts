import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const prefix = '[server-api]';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//server
app.listen(PORT, () => {
  console.log(`${prefix} running on port ${PORT}`);
});
