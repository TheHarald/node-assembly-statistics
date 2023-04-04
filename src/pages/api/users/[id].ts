import { ResponseMessage } from './../../../types/ResponseMessage';
import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User | ResponseMessage<unknown>>
) {

    const { query, method } = req
    const id = query.id as string

    try {
        if (method === 'GET') {
            const user = await prisma.user.findFirst({
                where: {
                    id: id
                }
            })

            if (user) return res.status(200).json(user)

            res.status(200).json({
                message: `Не удалось найти пользователя с id: ${id}`,
                data: user
            })
        }
        if (method === 'DELETE') {
            const result = await prisma.user.delete({
                where: {
                    id: id
                }
            })

            if (result) return res.status(200).json(result)

            res.status(200).json({
                message: `Не удалось удалить пользователя с id ${id}`,
                data: result
            })

        }
    } catch (error) {
        res.send({
            message: 'Произошла ошибка',
            data: error
        })
    }

}
