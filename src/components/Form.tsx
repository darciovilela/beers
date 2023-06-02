import { useState } from 'react';
import { Beer } from '../interfaces/beer';

interface FormProps {
	addBeer: (addBeer: Beer) => void;
	setActiveBeer: (addBeer: Beer) => void;
}

export const Form: React.FC<FormProps> = ({ addBeer, setActiveBeer }) => {
	const [formState, setFormState] = useState({
		name: '',
		country: '',
		style: '',
	});

	const validateForm = () => {
		return formState.name && formState.country && formState.style;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			addBeer(formState);
			setActiveBeer(formState);
			setFormState({
				name: '',
				country: '',
				style: '',
			});
		}
	};

	const handleChange = (e: any) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend>Add beer</legend>
				<input
					type="text"
					name="name"
					placeholder="Add a beer"
					value={formState.name}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="country"
					placeholder="Add a beer"
					value={formState.country}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="style"
					placeholder="Add a beer"
					value={formState.style}
					onChange={handleChange}
				/>
				<button className="form-button">Add</button>
			</fieldset>
		</form>
	);
};
