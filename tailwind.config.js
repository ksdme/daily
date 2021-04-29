module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: [
        'bg-red-600',
        'bg-blue-600',
        'bg-indigo-600',
        'bg-green-600',
        'bg-purple-600',
        'bg-gray-300',
        'bg-gray-600',
        'bg-black',
        'text-red-600',
        'text-blue-600',
        'text-indigo-600',
        'text-green-600',
        'text-purple-600',
        'text-gray-600',
        'text-black',
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
