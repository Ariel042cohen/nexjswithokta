const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
    orgUrl: 'https://dev-8843701.okta.com',
    token: '00N1ZChAhNvhK-hd0a23oVkOZHjgI1ulA3hYdc3gV9'
});

module.exports = client;