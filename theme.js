
const theme = {
    // breakpoints for 481px 769px, 1170px and 1920px in em's
    breakpoints: ['30.063em', '48.063em', '73.13em', '120em'],

    // Screens Sizes
    mobileSize: '481px',
    tabletSize: '769px',
    desktopSize: '1170px',
    largeDesktopSize: '1920px',

    // colors
    textColor: '#333333',

    headerBlue: '#2d6c97',
    footerLinksHover: '#636363',
    footerBg: '#757575',

    blue: '#2980ba',
    blueCompliant: '#3c96d3', // Fudged blue for plain links on gray backgrounds
    blueHighlight: '#3c97d3',
    blueLowlight: '#2d6c97',
    blueSubtle: '#BBDBF0',
    blueSuperSubtle: '#F5FAFD',

    green: '#169f84',
    greenHighlight: '#1ABC9C',
    greenLowlight: '#12836d',
    greenSubtle: '#ceeee8',

    dijon: '#b2a062',
    dijonHighlight: '#c1ae6b',
    dijonLowlight: '#a2925a',
    dijonSubtle: '#e0d6b5',

    gray: '#e6e6e6',
    grayLight: '#ccc',
    grayDarkAlt: '#767676',
    grayDark: '#333',
    grayCompliant: '#717171',
    grayMedium: '#999',
    grayMediumDark: '#666',

    redLight: '#f6e7ed',
    redDark: '#c73671',

    white: '#ffffff',
    whiteDark: '#f7f7f7',

    // Fonts
    lato: '\'Lato\',Helvetica,Arial,sans-serif',
    titillium: '\'Titillium Web\',sans-serif',
};

export default {
    ...theme,
    errorAlertBg: theme.redLight,
    errorAlertColor: theme.redDark,
    successAlertBg: theme.greenSubtle,
    successAlertColor: theme.greenLowlight,
    disabledToggleBg: '#999',
    disabledText: '#999',
    disabledBtnText: '#838383',
    disabledBtnBg: '#E6E6E6',
    disabledBtnBorder: '#999',
    boxShadow: '0px 0px 8px 0px rgba(8, 8, 8, 0.1)',
};
