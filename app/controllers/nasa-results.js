import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    loadNext: function(){
      this.transitionToRoute("nasa-result3");
    }
  }

});
