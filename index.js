const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')

const PlanetsRouter = require('./planets/routes.config');

const port = 3600

app.use(morgan('dev'))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DEconstE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());
PlanetsRouter.routesConfig(app);


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

app.listen(port, function () {
    console.log(`app listening at port ${port}`);
});