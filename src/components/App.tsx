import { useState } from 'react';
import { Beer } from '../interfaces/beer';
import { beerData } from '../data/beerData';
import { Form } from './Form';
import { List } from './List';
import { BeersFeatures } from './BeersFeatures';

export const App = () => {
	const [beer, setBeer] = useState(beerData);
	const [activeBeer, setActiveBeer] = useState(beerData[0]);

	const addBeer = (beerName: Beer) => {
		setBeer([...beer, beerName]);
	};

	return (
		<div>
			<Form addBeer={addBeer} setActiveBeer={setActiveBeer} />
			<List
				beers={beer}
				activeBeer={activeBeer}
				setActiveBeer={setActiveBeer}
			/>
			<BeersFeatures activeBeerFeatures={activeBeer} />
		</div>
	);
};
