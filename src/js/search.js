$(function () {
    $('#search').on('keyup', search);
    function search(e) {
        app.configurationCollection.trigger('search', e.target.value);
    }
});