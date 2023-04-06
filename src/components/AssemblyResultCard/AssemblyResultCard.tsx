import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Parameter from '../Parameter/Parameter';
import { Gears } from '@styled-icons/fa-solid/Gears'
import { Time } from '@styled-icons/boxicons-regular/Time'
import { Calendar } from '@styled-icons/boxicons-regular/Calendar'
import { Error } from '@styled-icons/boxicons-regular/Error'
import { Class } from '@styled-icons/material/Class'
import { AssemblyResult } from '@prisma/client';

type AssemblyResultCardProps = {
    assemblyRessult: Omit<AssemblyResult, 'assemblyDate'> & {
        assemblyDate: string;
    };
    onClick: (id: string) => void;
};

const StyledAssemblyResultCard = styled.article`
    background: #FFFFFF;
    border: 1px solid #D7DBEC;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding-right: 16px
`;

const StyledInfoContainer = styled.div`
    padding: 16px 0px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

function AssemblyResultCard(props: AssemblyResultCardProps) {

    return (
        <StyledAssemblyResultCard onClick={() => props.onClick(props.assemblyRessult.id)}>
            <Image
                alt='detail'
                src={props.assemblyRessult.imageURL ? `/details/${props.assemblyRessult.imageURL}.png` : '/details/default.png'}
                width={200}
                height={200}
            />
            <StyledInfoContainer>
                <Parameter icon={<Gears />} title='Узел' value={props.assemblyRessult.nodeName} />
                <Parameter icon={<Time />} title='Время сборки' value={`${props.assemblyRessult.assemblyTime} сек.`} />
                <Parameter icon={<Calendar />} title='Дата сборки' value={props.assemblyRessult.assemblyDate.split('T')[0]} />
                <Parameter icon={<Class />} title='Тип cборки' value={props.assemblyRessult.assemblyType} />
                <Parameter icon={<Error />} title='Количество ошибок' value={`${props.assemblyRessult.errorsCount}`} />
            </StyledInfoContainer>

        </StyledAssemblyResultCard>
    );
}

export default AssemblyResultCard;