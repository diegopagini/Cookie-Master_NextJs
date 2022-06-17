/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	cookies: { [key: string]: string };
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { cookies } = req;

	res.status(200).json({ cookies });
}
