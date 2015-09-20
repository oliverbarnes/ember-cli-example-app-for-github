import ApplicationAdapter from './application';
import config from 'ember-cli-example-app-for-github/config/environment';

export default ApplicationAdapter.extend({
  type: 'me',

  url: config.APP.API_HOST + 'me'
});
