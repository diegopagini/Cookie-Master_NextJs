/** @format */
import Head from 'next/head';
import { FC } from 'react';

import { Navbar } from '../ui';

interface Data {
	children: JSX.Element;
}

export const Layout: FC<Data> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Cookie Master</title>
			</Head>
			<nav>
				<Navbar></Navbar>
			</nav>
			<main
				style={{
					padding: '20px 50px',
				}}
			>
				{children}
			</main>
		</>
	);
};
