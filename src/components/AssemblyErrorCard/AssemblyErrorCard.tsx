import React from 'react';
import styled from 'styled-components';
import Parameter from '../Parameter/Parameter';
import { GearWide } from '@styled-icons/bootstrap/GearWide'
import { BarChartSteps } from '@styled-icons/bootstrap/BarChartSteps'

type AssemblyErrorCardProps = {
    errorName: string;
    detailName: string;
    step: string | null
};

const StyledAssemblyErrorCard = styled.article`
    background: rgba(255, 189, 33, 0.1);
    padding: 16px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    border-radius: 8px;
    @media (min-width: 320px) and (max-width: 900px) {
        width: 100%;
    }
`;

const StyledTitle = styled.h5`
    font-weight: 500;
    font-size: 20px;
    color: #FFB608;
    @media (min-width: 320px) and (max-width: 900px) {
        font-size: 16px;

    }
`
function AssemblyErrorCard(props: AssemblyErrorCardProps) {
    return (
        <StyledAssemblyErrorCard>
            <StyledTitle>
                {props.errorName}
            </StyledTitle>
            {<Parameter icon={<GearWide />} title='Название детали' value={props.detailName} />}
            {<Parameter icon={<BarChartSteps />} title='Шаг' value={`${props.step || 'нет'} `} />}



        </StyledAssemblyErrorCard>
    );
}

export default AssemblyErrorCard;