(function(ch){
  ch.browsingData.removeCache({
    since: 0,
    originTypes: {
      unprotectedWeb: true
    }
  }, function () {
    console.log('Done clearing cache');
    //Show the message to the world
    document.getElementById('#cache-cleared').className = '';
  });
}(chrome));

