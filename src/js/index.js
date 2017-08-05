app.configurationCollectionView = new app.ConfigurationCollectionView();

$.ajax({
    url: './configurations/',
    contentType: 'application/json',
    success: function (data, textStatus, jqXHR) {
        _.each(data.configuration, function (configuration) {
            app.configurationCollection.add(new app.Configuration(configuration));
        });
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
    }
});