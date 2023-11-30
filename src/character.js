import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export const CharacterDetail = () => {

	const { id } = useParams();
	const [character, setCharacter] = useState(null);
	const [editMode, setEditMode] = useState(false);

	useEffect(() => {

		const storedCharacter = localStorage.getItem(`character-${id}`);
		if (storedCharacter) {
			setCharacter(JSON.parse(storedCharacter));
		} else {
			axios.get(`https://swapi.dev/api/people/${id}`)
				.then(response => {
					setCharacter(response.data);
					localStorage.setItem(`character-${id}`, JSON.stringify(response.data)); // Сохраняем в localStorage
				})
				.catch(error => console.error("Ошибка при загрузке данных персонажа:", error));
		}
	}, [id]);

	const handleInputChange = (e) => {
		setCharacter({ ...character, [e.target.name]: e.target.value });
	};

	const saveCharacter = () => {
		localStorage.setItem(`character-${id}`, JSON.stringify(character));
		setEditMode(false);
	};

	if (!character) return <div>Loading...</div>;

	return (
		<div>
			<Link to="/">Back</Link>
			<h1>{character.name}</h1>
			{editMode ? (
				<div className='flex flex-column gap-2'>
					{Object.entries(character).map(([key, value]) => (
						(key !== 'name' && key !== 'url' && key !== 'created' && key !== 'edited') && (
							<div key={key}>
								<label className='inline-block w-2'>{key}: </label>
								<InputText
									type="text"
									name={key}
									value={value}
									onChange={handleInputChange}
								/>
							</div>
						)
					))}
					<div>
						<Button className="mr-1" onClick={saveCharacter}>Save</Button>
						<Button outlined onClick={() => setEditMode(false)}>Cancel</Button>
					</div>
				</div>
			) : (
				<div className='flex flex-column'>
					{Object.entries(character).map(([key, value]) => (
						<p key={key}>{key}: {value}</p>
					))}
					<Button className="w-1" onClick={() => setEditMode(true)}>Edit</Button>
				</div>
			)}
		</div>
	);
};
