import { useRouter } from 'next/router';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import styled from 'styled-components';
import { AssemblyError, AssemblyResult } from '@prisma/client';
import prisma from '@/lib/prisma';
import AssemblyResultCard from '@/components/AssemblyResultCard/AssemblyResultCard';
import { useBack } from '@/hooks/useBack';
import NavigationButton from '@/components/NavigationButton/NavigationButton';
import Title from '@/components/Title/Title';
import { useState } from 'react';
import AssemblyErrorCard from '@/components/AssemblyErrorCard/AssemblyErrorCard';
import Empty from '@/components/Empty/Empty';


const StyledUserPage = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
`;

const StyledAssemblyResults = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* max-width: 800px; */
`;

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px
`;

const StyledAssemblyErrorsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`

const StyledUserPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
`



/* type UserPageProps = {
    assemblyResults: AssemblyResult[]
} */

type SerializedAssemblyResult = Omit<AssemblyResult, 'assemblyDate'> & {
    assemblyDate: string;
};

type SerializedUserPageProps = {
    assemblyResults: SerializedAssemblyResult[];
    userName: string
};

export const getServerSideProps: GetServerSideProps<SerializedUserPageProps> = async (context) => {
    let { id } = context.query

    if (Array.isArray(id)) {
        id = id[0];
    }

    const user = await prisma.user.findFirst({
        where: {
            id: id
        }
    })

    const assemblyResults = await prisma.assemblyResult.findMany({
        where: {
            userId: id
        }
    })

    const serializedAssemblyResults = assemblyResults.map(result => {
        return {
            ...result,
            assemblyDate: result.assemblyDate.toISOString(),

        }
    });

    return {
        props: {
            assemblyResults: serializedAssemblyResults,
            userName: user ? user.name : "User not found"
        }
    }
}

function UserPage(props: SerializedUserPageProps) {

    const { handleBack } = useBack()

    const [assemblyErrors, setAssemblyErrors] = useState<AssemblyError[]>([])

    function getAssemblyErrors(id: string) {
        fetch(`/api/assembly-errors/${id}`)
            .then(res => res.json())
            .then(data => {
                setAssemblyErrors(data)
            })
            .catch(error => console.log(error))
    }

    return (
        <StyledUserPageContainer>
            <NavigationButton onClick={handleBack} text="Назад" />
            <StyledUserPage>
                <StyledSection>
                    <Title text={`Результаты сборки ${props.userName}`} />
                    <StyledAssemblyResults>
                        {props.assemblyResults.map(item => {
                            return <AssemblyResultCard
                                key={item.id}
                                assemblyRessult={item}
                                onClick={getAssemblyErrors}
                            />
                        })}
                    </StyledAssemblyResults>
                </StyledSection>
                <StyledSection>
                    <Title text={`Ошибки`} />
                    <StyledAssemblyErrorsContainer>
                        {
                            assemblyErrors.map(assemblyError => {
                                return (
                                    <AssemblyErrorCard
                                        errorName={assemblyError.errorName}
                                        detailName={assemblyError.detailName}
                                        step={assemblyError.step}
                                    />
                                )
                            })
                        }
                        {
                            assemblyErrors.length === 0 ? <Empty /> : null
                        }

                    </StyledAssemblyErrorsContainer>
                </StyledSection>
            </StyledUserPage>
        </StyledUserPageContainer>
    );
};

export default UserPage;
