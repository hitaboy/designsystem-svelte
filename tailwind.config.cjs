const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      // current: 'currentColor',
      // amber: colors.amber,
      black: colors.black,
      blue: colors.blue,
      cyan: colors.cyan,
      // emerald: colors.emerald,
      // fuchsia: colors.fuchsia,
      gray: colors.trueGray,
      // blueGray: colors.blueGray,
      // coolGray: colors.coolGray,
      // trueGray: colors.trueGray,
      // warmGray: colors.warmGray,
      // green: colors.green,
      // indigo: colors.indigo,
      // lime: colors.lime,
      // orange: colors.orange,
      // pink: colors.pink,
      // purple: colors.purple,
      // red: colors.red,
      // rose: colors.rose,
      // sky: colors.sky,//warn - As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`.
      // teal: colors.teal,
      // violet: colors.violet,
      // yellow: colors.amber,
      white: colors.white,
    },
    fontFamily: {
      'sans': ['Montserrat'],
      'serif': ['Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Montserrat'],
      'body': ['Montserrat'],
    },
    extend: {
      screens: {
        '3xl': '1850px',
      },
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: [
      {
        'DSV': {                          /* your theme name */
           'primary' : '#F81F6C',           /* Primary color */
           'primary-focus' : '#C21753',     /* Primary color - focused */
           'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

           'secondary' : '#6741F9',         /* Secondary color */
           'secondary-focus' : '#472DAD',   /* Secondary color - focused */
           'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

           'accent' : '#37cdbe',            /* Accent color */
           'accent-focus' : '#2aa79b',      /* Accent color - focused */
           'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

           'neutral' : '#3d4451',           /* Neutral color */
           'neutral-focus' : '#2a2e37',     /* Neutral color - focused */
           'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

           'base-100' : '#374151',          /* Base color of page, used for blank backgrounds */
           'base-200' : '#1F2937',          /* Base color, a little darker */
           'base-300' : '#111827',          /* Base color, even more darker */
           'base-content' : '#F3F4F6',      /* Foreground content color to use on base color */

           'info' : '#2094f3',              /* Info */
           'success' : '#009485',           /* Success */
           'warning' : '#ff9900',           /* Warning */
           'error' : '#ff5724',             /* Error */
        },
      },
    ],
    base: true,
    utils: true,
  },
  plugins: [
    require('daisyui'),
  ],
}
