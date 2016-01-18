(function(ch, $){
  var timeoutId = 0;
  $('#clear-cache').on('click', function () {

    clearTimeout(timeoutId);

    $('#clear-cache').prop('disabled', true);
    $('#clear-cache-done').addClass('hidden');
    $('#clear-cache-clearing').removeClass('hidden');

    ch.browsingData.removeCache({
      since: 0,
      originTypes: {
        unprotectedWeb: true
      }
    }, function () {

      $('#clear-cache').prop('disabled', false);
      $('#clear-cache-clearing').addClass('hidden');
      $('#clear-cache-done').removeClass('hidden');

      timeoutId = setTimeout(function () {
        $('#clear-cache-done').addClass('hidden');
      }, 5000);
    });
  });
}(chrome, jQuery));

