import { Beer } from '../interfaces/beer';

interface BeerProps {
	beers: Beer[];
	activeBeer?: Beer;
	setActiveBeer: Function;
}

export const List: React.FC<BeerProps> = ({
	beers,
	activeBeer,
	setActiveBeer,
}) => {
	return (
		<div>
			<h1>Famous Beers</h1>
			<ul>
				{beers.map((beer) => (
					<button
						className={beer.name === activeBeer?.name ? 'active' : ''}
						onClick={() => setActiveBeer(beer)}
					>
						{beer.name}
					</button>
				))}
			</ul>
		</div>
	);
};
