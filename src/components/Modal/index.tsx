import { useContext, useEffect, useRef, useState } from "react";
import { ColorsContainer, ModalButton, ModalContainer, StyledColorIcon, StyledInput, StyledModal, StyledText, StyledTitle } from "./styles";
import { colors } from "@/utils/colors";
import { ThemeContext } from "@/app/layout";
import { isEqual } from "lodash";
import { NameContext } from "@/context/NameContext";

export default function Modal() {
    const { theme, changeTheme } = useContext(ThemeContext);
    const { name, setName } = useContext(NameContext);
    const [isVisible, setIsVisible] = useState(false);
    const refInput = useRef<HTMLInputElement>(null);

    const loadead = () => {
        if (refInput.current !== null) {
            refInput.current.focus();
        }
    }

    useEffect(() => {
        const storedName = typeof window !== "undefined" ? localStorage.getItem('name') : null;

        window.addEventListener('load', loadead);

        if (storedName == null) {
            setIsVisible(true);
            return;
        }

        setName(storedName);
        return () => window.removeEventListener('load', loadead);
    }, []);

    if (refInput.current !== null) {
        refInput.current.focus();
    }

    const handleColorClick = (defaultColor: string) => {
        const newTheme = { ...theme, defaultColor };

        if (isEqual(theme, newTheme)) {
            return;
        }

        if (refInput.current !== null) {
            refInput.current.focus();
        }

        changeTheme(newTheme);
    }

    const handleButtonClick = () => {
        localStorage.setItem('name', name);

        setIsVisible(false);
    }

    if (!isVisible) {
        return null;
    }

    return (
        <ModalContainer>
            <StyledModal>
                <StyledTitle>Calma aí!</StyledTitle>
                <StyledText>Antes da gente começar, escolhe sua cor favorita: </StyledText>
                <ColorsContainer>
                    {colors.map(color => <StyledColorIcon onClick={() => handleColorClick(color)} key={color} color={color} />)}
                </ColorsContainer>
                <StyledText>Agora, me diz seu nome: </StyledText>
                <StyledInput ref={refInput} maxLength={20} value={name} onChange={(e) => setName(e.target.value)} type="text" />
                <ModalButton onClick={() => handleButtonClick()}>Confirmar</ModalButton>
            </StyledModal>
        </ModalContainer>
    )
}