import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    searchClicked: function(searchTerm) {
      searchTerm = searchTerm.replace(/ /g, "%20");
      sessionStorage.SessionName = searchTerm;
      this.transitionTo('nasa-result');
    }
  }
});
