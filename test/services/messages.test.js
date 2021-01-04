const app = require('../../src/app');

describe('\'messages\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/messages');
    expect(service).toBeTruthy();
  });
});
