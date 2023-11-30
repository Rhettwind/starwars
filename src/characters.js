import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useNavigate } from 'react-router-dom';

const extractIdFromUrl = (url) => {
    const idPattern = /\/people\/(\d+)\//;
    const match = url.match(idPattern);
    return match ? match[1] : null;
};

export const CharactersList = () => {

	const [characters, setCharacters] = useState([]);
	const [totalRecords, setTotalRecords] = useState(0);
	const [rows, setRows] = useState(10);
	const [page, setPage] = useState(0);
	const [processing, setProcessing] = useState(false);
	const navigate = useNavigate();

	const fetchData = async (page, rows) => {
		setProcessing(true);
		try {
			const response = await axios.get(`https://swapi.dev/api/people/`, {
				params: {
					page: page + 1,
					limit: rows
				}
			});
			console.log(response);
			setCharacters(response.data.results);
			setTotalRecords(response.data.count);
		} catch (error) {
			console.error('API error ', error?.message || error);
		} finally {
			setProcessing(false);
		}
	};

	useEffect(() => {
		fetchData(page, rows);
	}, [page, rows]);

	const onCustomPage = (event) => {
		setPage(event.page);
		setRows(event.rows);
	};

	return (
		<div>
			{processing &&
				<ProgressSpinner
					className='absolute top-50 left-50 z-5'
					strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
			}
			<h1>Star Wars Characters</h1>
			<div>
				<DataTable
					value={characters}
					selectionMode='single'
					selection='url'
					onSelectionChange={e => navigate(`/character/${extractIdFromUrl(e.value.url)}`)}
				>
					<Column field="name" header="Name"></Column>
					<Column field="gender" header="Gender"></Column>
					<Column field="birth_year" header="Birt Year"></Column>
				</DataTable>
				<Paginator
					first={page * rows}
					rows={rows}
					totalRecords={totalRecords}
					onPageChange={onCustomPage} />
			</div>
		</div>
	);
};
