/** @format */
import '../styles/globals.css';

import { CssBaseline, Theme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import { customTheme, darkTheme, lightTheme } from '../themes';

import type { AppContext, AppProps } from 'next/app';
interface Props extends AppProps {
	theme: string;
}

function MyApp({ Component, pageProps, theme }: Props) {
	const currentTheme: Theme =
		theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : customTheme;

	return (
		<ThemeProvider theme={currentTheme}>
			<CssBaseline>
				<Component {...pageProps} />
			</CssBaseline>
		</ThemeProvider>
	);
}

// Evitar utilizat getInitialProps siempre que sea posible.
MyApp.getInitialProps = async (appContext: AppContext) => {
	const validThemes = ['light', 'dark', 'custom'];
	const { theme } = appContext.ctx.req
		? (appContext.ctx.req as any).cookies
		: { theme: 'light' };

	return {
		theme: validThemes.includes(theme) ? theme : 'dark',
	};
};

export default MyApp;
