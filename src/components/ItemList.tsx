import { Item } from '../interfaces/beer';
import { getImageName } from '../helpers/getImageName';

interface ItemProps {
	item: Item;
	completeItem(itemNameToDelete: number): void;
	setActiveItem: Function;
}

export const ItemList: React.FC<ItemProps> = ({
	item,
	completeItem,
	setActiveItem,
}) => {
	return (
		<div>
			<div className="content-container">
				<span>
					{item.id} - <span className="beer-name">{item.name}</span> / Country:{' '}
					{item.country} / Style: {item.style}
				</span>
				<img src={`./${getImageName(item.name)}.png`} alt={item.name} />
			</div>
			<button className="edit" onClick={() => setActiveItem(item)}>
				E
			</button>
			<button className="remove" onClick={() => completeItem(item.id)}>
				X
			</button>
		</div>
	);
};
