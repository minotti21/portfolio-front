import { lightTheme } from '@/utils/globalTheme';
import 'styled-components';

type ThemeType = {
    defaultColor: string;
    backgroundColor: string;
    fontColor: string;
};

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}