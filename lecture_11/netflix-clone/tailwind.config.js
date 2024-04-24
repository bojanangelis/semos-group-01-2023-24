/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-header':
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/0c55dc02-ef28-4531-82be-a21286e4b9d7/MK-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      },
    },
  },
  plugins: [],
}
