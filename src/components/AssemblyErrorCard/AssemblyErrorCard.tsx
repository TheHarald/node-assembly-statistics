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
    /* width: min-content; */
`;

const StyledTitle = styled.h5`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FFB608;
`

const StyledText = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #5A607F;
`

const StyledIconContainer = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: row;
    align-items: center;
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