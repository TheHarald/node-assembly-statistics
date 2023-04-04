import { ResponseMessage } from './../../../types/ResponseMessage';
import { AssemblyResult } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma';



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<AssemblyResult[] | ResponseMessage<unknown>>
) {

    try {
        if (req.method === 'GET') {
            const assemblyResult = await prisma.assemblyResult.findMany()
            res.status(200).json(assemblyResult)
        }
    } catch (error) {
        res.status(400).json({
            message: "Не удалось получить результаты сборки",
            data: error
        })
    }

}
