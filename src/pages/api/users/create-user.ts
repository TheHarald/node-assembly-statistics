import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma';



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User | unknown>
) {

    const { method, body } = req

    if (method === 'POST') {
        try {
            const user = await prisma.user.create({
                data: body
            })
            res.status(200).json(user)
        } catch (error) {
            res.send(error)
        }

    }


}