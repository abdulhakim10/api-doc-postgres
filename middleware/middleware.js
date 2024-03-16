// const staff = require('../jsons/staff.json');
// const client = require('../jsons/client.json');
// const cms = require('../jsons/cms.json');
// const alumni = require('../jsons/alumni.json');
// const alumniMobileApp = require('../jsons/alumni-mobile.json');
// const supplier = require('../jsons/supplier.json');
// const email = require('../jsons/email.json');
// const finance = require('../jsons/finance.json');
const swaggerUi = require('swagger-ui-express');


function createSwaggerMiddleware(swaggerDocument) {
  return {
    serve: swaggerUi.serve,
    setup: (req, res, next) => swaggerUi.setup(swaggerDocument)(req, res, next),
  };
}
  
  module.exports.swaggerMiddleware = {
    // '/crm-client': createSwaggerMiddleware(client),
    // '/cms': createSwaggerMiddleware(cms),
    // '/staff': createSwaggerMiddleware(staff),
    // '/crm-alumni': createSwaggerMiddleware(alumni),
    // '/alumni': createSwaggerMiddleware(alumniMobileApp),
    // '/crm-supplier': createSwaggerMiddleware(supplier),
    // '/email': createSwaggerMiddleware(email),
    // '/finance': createSwaggerMiddleware(finance),
    setup: (req, res, next) => {
      next();
    },
  };
  