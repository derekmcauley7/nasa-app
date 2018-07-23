import Route from '@ember/routing/route';

function getJSON(url) {
  return new Promise(function(resolve, reject){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = handler;
    xhr.responseType = 'json';
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();

    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
        }
      }
    }
  });
}

export default Route.extend({
model: function() {
  var url =  "https://images-api.nasa.gov/search?q=" + sessionStorage.getItem("SessionName") + "&media_type=image";
  return getJSON(url).then(function(json) {
    return json;
  }, function(reason) {
    console.log("Error Message: " + reason);
  });
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
