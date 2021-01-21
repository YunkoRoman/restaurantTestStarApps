const express = require('express');
const path = require('path');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const {config} = require('./config/index');


const app = express();
const dataBase = require('./dataBase').getInstance();
const {chefRoutes, dishRoutes, menuRoutes} = require('./routes');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Library API",
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/',
    },
    apis: ['./swagger/getChef.yaml',
        "./swagger/createChef.yaml",
        "./swagger/createDish.yaml",
        "./swagger/getMenuWithDishes.yaml",
        "./swagger/createMenu.yaml",
        "./swagger/updateChef.yaml",
        "./swagger/deleteChef.yaml"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

dataBase.setModels();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE, PATCH");
    next();
});

app.use(cors());
app.options('*', cors());


global.appRoot = __dirname;


app.use(express.static(path.join(appRoot, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/dish', dishRoutes);
app.use('/chef', chefRoutes);
app.use('/menu', menuRoutes);


app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err)
});

app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            success: false,
            message: err.message || 'Unknown Error',
            controller: err.controller
        })
});

app.listen(config.PORT, err => {
    if (err) console.error(err);
    console.log(`Server listen on port ${config.PORT}`);
});