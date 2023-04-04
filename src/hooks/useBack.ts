import { useRouter } from 'next/router';
export function useBack() {
    const { back } = useRouter()
    function handleBack() {
        back()
    }

    return { handleBack }
}