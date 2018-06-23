import Route from '@ember/routing/route';

export default Route.extend({

  model: function() {
    var url =  "https://images-api.nasa.gov/search\?q=" + sessionStorage.getItem("SessionName") + "&media_type=image";
    return Ember.$.getJSON(url);
},

actions: {
  goBack: function(){
    this.transitionTo("/");
  }
}
});
