import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import * as path from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js';
// const route = require('./routes')

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
                                app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// app.use(morgan('combined'))

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(path.resolve(__dirname, './views'));

// Routes
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
