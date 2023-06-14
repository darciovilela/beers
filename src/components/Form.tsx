import { useState, useEffect, ChangeEvent } from 'react';
import { Item } from '../interfaces/beer';

interface FormProps {
	items: Item[];
	addItem: Function;
	updateItem: Function;
	activeItem: null | Item;
}

export const Form: React.FC<FormProps> = ({
	items,
	addItem,
	updateItem,
	activeItem,
}) => {
	const [name, setName] = useState<string>('');
	const [country, setCountry] = useState<string>('');
	const [style, setStyle] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		if (activeItem) {
			setName(activeItem.name);
			setCountry(activeItem.country);
			setStyle(activeItem.style);
		} else {
			setName('');
			setCountry('');
			setStyle('');
		}
	}, [activeItem]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setErrorMessage(null);

		if (activeItem) {
			updateItem(activeItem.id, {
				name: name,
				country: country,
				style: style,
			});
		} else {
			const itemExists = items.map((item) => item.name).includes(name);

			if (itemExists) {
				setErrorMessage(`item ${name} already exists.`);
				return;
			}

			addItem({
				name: name,
				contry: country,
				style: style,
			});
		}

		setName('');
		setCountry('');
		setStyle('');
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		if (name === 'name') {
			setName(value);
		} else if (name === 'country') {
			setCountry(value);
		} else {
			setStyle(value);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{errorMessage && <div className="error">{errorMessage}</div>}
			<fieldset>
				<legend>Add beer</legend>
				<input
					type="text"
					name="name"
					placeholder="Add a beer"
					value={name}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="country"
					placeholder="Country"
					value={country}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="style"
					placeholder="Style"
					value={style}
					onChange={handleChange}
				/>
				<button className="form-button">Add</button>
			</fieldset>
		</form>
	);
};
