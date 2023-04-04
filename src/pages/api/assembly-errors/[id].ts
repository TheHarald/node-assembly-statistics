import { AssemblyError } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<AssemblyError[] | unknown>
) {

    const { query, method } = req
    const id = query.id as string

    try {
        if (method === 'GET') {
            const assemblyErrors = await prisma.assemblyError.findMany({
                where: {
                    assemblyId: id
                }
            })
            res.status(200).json(assemblyErrors)
        }
    } catch (error) {
        res.status(200).json(error)
    }

}