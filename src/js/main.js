import search from './search';
import ConfigurationCollection from '../components/configuration-collection/configuration-collection.collection';
import ConfigurationCollectionView from '../components/configuration-collection/configuration-collection.view';

const configurationCollection = new ConfigurationCollection();
const configurationCollectionView = new ConfigurationCollectionView({
	collection: configurationCollection
});

search.init(configurationCollection);
