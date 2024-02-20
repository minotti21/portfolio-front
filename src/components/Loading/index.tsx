import { Loader, LoadingContainer } from "./styles";

export default function Loading({ isLoading }: { isLoading: boolean }) {
    if (!isLoading) return null;

    return (
        <LoadingContainer>
            <Loader />
        </LoadingContainer>
    )
}