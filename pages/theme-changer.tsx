/** @format */
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GetServerSideProps } from 'next';
import { ChangeEvent, FC, useState } from 'react';

import { Layout } from '../components/layout';

interface Props {
	theme: string;
}

const ThemeChangerPage: FC<Props> = ({ theme }) => {
	const [currentTheme, setCurrentTheme] = useState(theme);

	const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedTheme = event.target.value;
		Cookies.set('theme', selectedTheme);
		setCurrentTheme(selectedTheme);
	};

	const onRequest = async () => {
		const { data } = await axios.get('/api/hello'); // { theme: 'dark' }
	};

	return (
		<Layout>
			<Card>
				<CardContent>
					<FormControl>
						<FormLabel>Theme</FormLabel>
						<RadioGroup value={currentTheme} onChange={onThemeChange}>
							<FormControlLabel
								value='light'
								control={<Radio />}
								label='Light'
							/>
							<FormControlLabel value='dark' control={<Radio />} label='Dark' />
							<FormControlLabel
								value='custom'
								control={<Radio />}
								label='Custom'
							/>
						</RadioGroup>
					</FormControl>

					<Button onClick={onRequest}>Request</Button>
				</CardContent>
			</Card>
		</Layout>
	);
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	// Lado del servidor.
	const { theme = 'light' } = req.cookies;
	const validThemes = ['light', 'dark', 'custom'];

	return {
		props: {
			theme: validThemes.includes(theme) ? theme : 'dark', // Si el valor de la cookie es permitido mostramos ese
			// sino el dark por defecto.
		},
	};
};

export default ThemeChangerPage;
