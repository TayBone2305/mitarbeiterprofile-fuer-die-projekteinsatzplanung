import { DefaultTheme } from 'styled-components';

export interface ThemeType {
	colors: {
		primary: string;
		secondary: string;
		text: string;
	};
}

export const theme: DefaultTheme = {
	colors: {
		primary: '#314664',
		secondary: '#841439',
		text: '#fff',
	},
};
