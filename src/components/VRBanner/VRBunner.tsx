import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';

type VRBunnerProps = {};

const StyledVRBunner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (min-width: 320px) and (max-width: 900px) {
        display: none;
    }
`;

function VRBunner(props: VRBunnerProps) {
    return (
        <StyledVRBunner>
            <Image
                src={"/vr-banner.webp"}
                width={420}
                height={420}
                alt='VRBanner'
            />
            <Title text='Выберите пользователя, чтобы посмотреть его результаты сборки узлов' />

        </StyledVRBunner>
    );
}

export default VRBunner;