/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    keyframes: {
      'fade-in': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      'fade-out': {
        '0%': { opacity: 1 },
        '100%': { opacity: 0 },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.7s ease-out',
      'fade-out': 'fade-out 0.5s ease-in',
    },
  },
};
export const plugins = [];

// 테일윈드 번들링 (vue파일을 사용하고 싶으면 content안에 vue를 넣으면됨)
