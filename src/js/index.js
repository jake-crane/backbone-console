$(function () {
    app.configurationCollection = new app.ConfigurationCollection();
    app.configurationCollectionView = new app.ConfigurationCollectionView({
        collection: app.configurationCollection
    });
});
