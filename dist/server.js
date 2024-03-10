var _a, _b;
import express from 'express';
import router from './routes/index';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3030;
const host = (_b = process.env.HOST) !== null && _b !== void 0 ? _b : '127.0.0.1';
app.use(cors({
    credentials: true,
    origin: true
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    next();
});
app.get('/', (request, response) => {
    response.type('text/plain');
    response.send('Server is running');
});
app.use(router);
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}; press ctrl + c to terminate`);
});
