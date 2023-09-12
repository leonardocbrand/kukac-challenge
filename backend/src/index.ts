import express, { Application } from 'express';
import cors from 'cors';
import palindromeRoute from './routes/palindrome.routes';
import changeRoute from './routes/change.routes';

// Boot express
const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use(palindromeRoute);
app.use(changeRoute)

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
