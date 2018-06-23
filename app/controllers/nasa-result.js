import Controller from '@ember/controller';

export default Controller.extend({
  number: 3,
  title : 'model.collection.items.1.data.0.title',
  link: 'model.collection.items.0.links.0.href',
  actions: {
    next: function(){
      console.log(this.title);
    }
  }

});
