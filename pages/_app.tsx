/** @format */
import '../styles/globals.css';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import { darkTheme } from '../themes';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline>
				<Component {...pageProps} />
			</CssBaseline>
		</ThemeProvider>
	);
}

export default MyApp;
