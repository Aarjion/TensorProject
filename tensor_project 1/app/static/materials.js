function myFunction(x) {
    $.getJSON($SCRIPT_ROOT + '/counterPage', {
    post: x
    }, function(data) {
        var response = data.result;
        console.log(response);
        }
    );
}