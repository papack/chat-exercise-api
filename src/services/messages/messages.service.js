// Initializes the `messages` service on path `/v1/messages`
const { Messages } = require('./messages.class');
const createModel = require('../../models/messages.model');
const hooks = require('./messages.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/messages', new Messages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/messages');

  service.hooks(hooks);
};
