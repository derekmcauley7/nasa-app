import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    loadNext: function(){
      var num = 2;
      console.log(num);
      this.transitionToRoute("nasa-result");
    }
  }

});
