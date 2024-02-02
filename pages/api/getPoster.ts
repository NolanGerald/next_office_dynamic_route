// pages/api/getPoster.ts

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    let poster: string;
    switch (id) {
        case '1':
            poster = './img/ooks.jpg';
            break;
        case '2':
            poster = './img/nait.jpeg';
            break;
        case 'gary':
            poster = './img/gary.jpg';
            break;
        case '4':
            poster = './img/pcl.jpg';
            break;
        case '5':
            poster = './img/gary2.jpg';
            break;

        default:
            poster = './img/gary2.jpg';
    }

    res.status(200).json({ poster });
}