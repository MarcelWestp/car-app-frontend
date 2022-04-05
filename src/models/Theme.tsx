interface Theme {
    palette: Palette;
    typography: Typography;
}

interface Palette {
    primary: Primary;
    secondary: Secondary;
    info: Info;
}

interface Primary {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
}

interface Secondary {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
}

interface Info {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
}

interface Typography {
    htmlFontSize: number;
    fontSize: number;
    fontFamily: string;
    h1: H1;
    h2: H2;
    h3: H3;
    h4: H4;
    h5: H5;
    h6: H6;
}

interface H1 {
    fontFamily: string;
    fontWeight: number;
    fontSize: string;
    lineHeight: number;
}
interface H2 {
    fontFamily: string;
    fontWeight: number;
    fontSize: string;
    lineHeight: number;
}
interface H3 {
    fontFamily: string;
    fontWeight: number;
    fontSize: string;
    lineHeight: number;
}
interface H4 {
    fontFamily: string;
    fontWeight: number;
    fontSize: string;
    lineHeight: number;
}
interface H5 {
    fontFamily: string;
    fontWeight: number;
    fontSize: string;
    lineHeight: number;
}

interface H6 {
    fontFamily: string;
    fontWeight: number;
    fontSize: string;
    lineHeight: number;
}

export default Theme;