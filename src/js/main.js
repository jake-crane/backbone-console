var search = require('./search');
var ConfigurationCollection = require('../components/configuration-collection/configuration-collection.collection');
var ConfigurationCollectionView = require('../components/configuration-collection/configuration-collection.view');

var configurationCollection = new ConfigurationCollection();
var configurationCollectionView = new ConfigurationCollectionView({
	collection: configurationCollection
});

search.init(configurationCollection);
