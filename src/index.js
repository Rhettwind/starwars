import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { CharacterDetail } from '/src/character';
import { CharactersList } from '/src/characters';
import { createRoot } from 'react-dom/client';

const App = () => {
	return (
		<Router basename="/starswars">
			<Routes>
				<Route path="/" element={<CharactersList />} />
				<Route path="/character/:id" element={<CharacterDetail />} />
			</Routes>
		</Router>
	);
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;