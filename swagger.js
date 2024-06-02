const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
    info: {
        title: 'eclass',
        version: '1.0.0',
        description: 'eclass-swagger',
    },
    host: process.env.BASE_URL,
    basePath: '/',
};

const options = {
    swaggerDefinition,
    apis: ['./schemas/*.js',],
}

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
