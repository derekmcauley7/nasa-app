import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('nasa', {path: '/'}, function(){
  });
  this.route('nasa-result');
  this.route('notfound', {path: '*path'});
  this.route('nasa-result2');
  this.route('nasa-result3');
});

export default Router;
