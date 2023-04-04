import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User[]>
) {

    if (req.method === 'GET') {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    }

}
