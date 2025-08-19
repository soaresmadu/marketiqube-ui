/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const darkMode = 'class';
export const theme = {
  extend: {
    boxShadow: {
      'custom-dark': '0 4px 6px rgba(244,244,244,0.5)',
    }
  },
};
export const plugins = [];
