import localFont from 'next/font/local';


export const gothamFont = localFont({
  variable: '--gotham-font',
  display: 'swap',
  src: [
    { path: '../public/fonts/GothamNarrow-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../public/fonts/GothamNarrow-ThinItalic.woff2', weight: '100', style: 'italic' },

    { path: '../public/fonts/GothamNarrow-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/GothamNarrow-LightItalic.woff2', weight: '300', style: 'italic' },

    { path: '../public/fonts/GothamNarrow-Book.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/GothamNarrow-BookItalic.woff2', weight: '400', style: 'italic' },

    { path: '../public/fonts/GothamNarrow-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/GothamNarrow-MediumItalic.woff2', weight: '500', style: 'italic' },

    { path: '../public/fonts/GothamNarrow-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/GothamNarrow-BoldItalic.woff2', weight: '700', style: 'italic' },

    { path: '../public/fonts/GothamNarrow-Black.woff2', weight: '900', style: 'normal' },
    { path: '../public/fonts/GothamNarrow-BlackItalic.woff2', weight: '900', style: 'italic' },

    { path: '../public/fonts/GothamNarrow-Ultra.woff2', weight: '950', style: 'normal' },
    { path: '../public/fonts/GothamNarrow-UltraItalic.woff2', weight: '950', style: 'italic' },
  ],
});