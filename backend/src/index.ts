import express, { Application } from 'express';
import cors from 'cors';
import palindromeRoute from './routes/palindrome.routes';
import changeRoute from './routes/change.routes';
import vehicleRoute from './routes/vehicle.routes'
import zipCodeRoute from './routes/zipcode.routes'
import errorMiddleware from './middlewares/error.middleware';

const app: Application = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use(palindromeRoute);
app.use(changeRoute)
app.use(vehicleRoute)
app.use(zipCodeRoute)

app.use(errorMiddleware);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
