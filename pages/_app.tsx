/** @format */
import '../styles/globals.css';

import { CssBaseline, Theme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { customTheme, darkTheme, lightTheme } from '../themes';

import type { AppProps } from 'next/app';
interface Props extends AppProps {
	theme: string;
}

function MyApp({ Component, pageProps }: Props) {
	const [currentTheme, setCurrentTheme] = useState(lightTheme);

	useEffect(() => {
		const cookieTheme = Cookies.get('theme') || 'light';
		const selectedTheme: Theme =
			cookieTheme === 'light'
				? lightTheme
				: cookieTheme === 'dark'
				? darkTheme
				: customTheme;

		setCurrentTheme(selectedTheme);
	}, []);

	return (
		<ThemeProvider theme={currentTheme}>
			<CssBaseline>
				<Component {...pageProps} />
			</CssBaseline>
		</ThemeProvider>
	);
}

export default MyApp;
