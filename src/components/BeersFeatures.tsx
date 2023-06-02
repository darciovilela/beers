import { getImageName } from '../helpers/getImageName';
import { Beer } from '../interfaces/beer';

interface BeerFeaturesProps {
	activeBeerFeatures?: Beer;
}

export const BeersFeatures: React.FC<BeerFeaturesProps> = ({
	activeBeerFeatures,
}) => {
	if (!activeBeerFeatures) {
		return <p>No data.</p>;
	}

	return (
		<div>
			<h1 className="beer-name">{activeBeerFeatures.name}</h1>
			<h2>Country: {activeBeerFeatures.country}</h2>
			<h2>Style: {activeBeerFeatures.style}</h2>
			<img src={`/${getImageName(activeBeerFeatures.name)}.png`} />
		</div>
	);
};
