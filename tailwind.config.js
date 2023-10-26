/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'yellow-custom': {
          light: '#ffea00',
          dark: '#ff7b00',
          1000: '#ff7b00',
          900: '#ff8800',
          800: '#ff9500',
          700: '#ffa200',
          600: '#ffaa00',
          500: '#ffb700',
          400: '#ffc300',
          300: '#ffd000',
          200: '#ffdd00',
          100: '#ffea00',
        }
      },
      fontFamily: {
        brittany: "BrittanySignature",
        helveticaMedium: "HelveticaNeueMediumExtended",
        helveticaExtraLight: "HelveticaNeueUltraLight",
        helveticaThin: "HelveticaNeueLT35ThinRegular",
        helveticaLight: "neueHelvetica45Light",
        exconBlack: "ExconBlack",
        exconBold: "ExconBold",
        exconLight: "ExconLight",
        exconMedium: "ExconMedium",
        exconRegular: "ExconRegular",
        exconThin: "ExconThin"
      },
    },
  },
  safelist: [
    {
      pattern: /text-(blue-theme|yellow-theme|blue)-(primary)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
