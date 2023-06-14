import { useState } from 'react';
import { Item } from '../interfaces/beer';
import { Beer } from '../interfaces/beer';
import { beerData } from '../data/beerData';
import { Form } from './Form';
import { ItemList } from './ItemList';

const getNextId = (item: Item[]) => {
	return Math.max(...item.map((item) => item.id)) + 1;
};

export const App: React.FC = () => {
	const [item, setItem] = useState<Item[]>(beerData);
	const [idCounter, setidCounter] = useState(getNextId(item));
	const [activeItem, setActiveItem] = useState<Item | null>(null);

	const addItem = (sample: Item) => {
		const newItem = {
			id: idCounter,
			name: sample.name,
			country: sample.country,
			style: sample.style,
		};

		setidCounter(idCounter + 1);
		setItem([...item, newItem]);
		setActiveItem(null);
	};

	const updateItem = (id: number, beer: Beer) => {
		setItem(
			item.map((item) =>
				item.id === id
					? {
							id,
							...beer,
					  }
					: item
			)
		);
	};

	const completeItem = (itemNameToDelete: number) => {
		const remainingItems = item.filter((item) => item.id !== itemNameToDelete);
		setItem(remainingItems);
	};

	return (
		<div className="app">
			<header>
				<h1>Famous Beers</h1>
			</header>
			<Form
				items={item}
				addItem={addItem}
				updateItem={updateItem}
				activeItem={activeItem}
			/>

			{item.map((item) => (
				<ItemList
					key={item.id}
					item={item}
					completeItem={completeItem}
					setActiveItem={setActiveItem}
				/>
			))}
		</div>
	);
};
