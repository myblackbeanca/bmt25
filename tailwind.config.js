/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
          950: '#1a1a1a'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333333',
            maxWidth: 'none',
            a: {
              color: '#000000',
              '&:hover': {
                color: '#666666',
              },
            },
            h1: {
              color: '#000000',
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
            },
            h2: {
              color: '#000000',
              fontSize: '2rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              color: '#000000',
              fontSize: '1.5rem',
            },
            strong: {
              color: '#000000',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            ul: {
              listStyleType: 'disc',
              marginLeft: '1.5rem',
            },
            blockquote: {
              borderLeftColor: '#000000',
              color: '#666666',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};