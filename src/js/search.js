var $ = require('jquery');

module.exports = {
    init: function (configurationCollection) {
        $('#search').on('keyup', function (e) {
            configurationCollection.trigger('search', e.target.value);
        });
    }
}