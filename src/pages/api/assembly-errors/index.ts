import { AssemblyError } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<AssemblyError[] | unknown>
) {

    try {
        if (req.method === 'GET') {
            const assemblyErrors = await prisma.assemblyError.findMany()
            res.status(200).json(assemblyErrors)
        }
    } catch (error) {
        res.status(200).json(error)
    }

}