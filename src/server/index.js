import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import route from './routes/route';

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', [express.static(path.join(__dirname, '../client'))]);

app.use('/api', route);
app.listen(8080, () => console.log('Listening on port 8080!'));
