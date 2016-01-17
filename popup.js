(function(ch, $){
  var timeoutId = 0;
  $('#clear-cache').on('click', function () {

    clearTimeout(timeoutId);
    $('#clear-cache-msg').addClass('hidden');

    ch.browsingData.removeCache({
      since: 0,
      originTypes: {
        unprotectedWeb: true
      }
    }, function () {
      timeoutId = setTimeout(function () {
        $('#clear-cache-msg').removeClass('hidden');
      }, 5000);
    });
  });
}(chrome, jQuery));

