import Route from '@ember/routing/route';
import $ from 'jquery';
export default Route.extend({

  model: function() {
    var url =  "https://images-api.nasa.gov/search?q=" + sessionStorage.getItem("SessionName") + "&media_type=image";
    return $.getJSON(url);
},

actions: {
  goBack: function(){
    this.transitionTo("/");
  },
  loadNext: function(){
    this.transitionTo("nasa-result3");
  }
}
});
