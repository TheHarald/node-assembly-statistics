import NextCors from 'nextjs-cors';
import { AssemblyError, AssemblyResult } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<AssemblyResult | unknown>
) {

    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
    });

    // console.log('test', JSON.stringify(req.body));

    const { method, body } = req

    if (method === 'POST') {
        try {
            let user = await prisma.user.findFirst({
                where: {
                    login: body.user.login
                }
            })

            if (!user) {
                user = await prisma.user.create({
                    data: {
                        name: body.user.name,
                        login: body.user.login,
                        position: body.user.position
                    }
                })
            }

            const assemblyResult = await prisma.assemblyResult.create({
                data: {
                    assemblyTime: body.assemblyResult.assemblyTime,
                    assemblyType: body.assemblyResult.assemblyType,
                    nodeName: body.assemblyResult.nodeName,
                    imageURL: body.assemblyResult.imageURL,
                    userId: user.id,
                    errorsCount: body.assemblyErrors.length
                }

            })

            const errors = body.assemblyErrors.map((item: AssemblyError) => {
                return {
                    assemblyId: assemblyResult.id,
                    errorName: item.errorName,
                    detailName: item.detailName,
                    step: item.step
                }
            })

            const assemblyErrors = await prisma.assemblyError.createMany({
                data: errors,
                skipDuplicates: true
            })

            res.status(200).json({
                user,
                assemblyResult: {
                    ...assemblyResult,
                    errorsCount: assemblyErrors.count
                }
            })

        } catch (error) {
            res.status(200).json(error)
        }

    }


}