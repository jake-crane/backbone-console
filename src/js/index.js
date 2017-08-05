app.configurationCollection = new app.ConfigurationCollection();
app.configurationCollectionView = new app.ConfigurationCollectionView({
    model: app.configurationCollection
});

app.configurationCollection.fetch({
    success: function (model, response, options) {
        var csrf = options.xhr.getResponseHeader('CSRF_TOKEN');
        $.ajaxSetup({
            beforeSend: function (xhr) {
                xhr.setRequestHeader('CSRF_TOKEN', csrf);
            }
        });
    }
});

function editConfiguration(id) {
    app.configurationCollection.get(id).set('editMode', true); 
}

function deleteConfiguration(id) {
    app.configurationCollection.get(id).destroy(); 
}