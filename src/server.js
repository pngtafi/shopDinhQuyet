import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
require('dotenv').config();

let app = express();

// Configure view engine

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});