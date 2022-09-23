/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pukenza": "url('https://cloudflare-ipfs.com/ipfs/QmXtzEj3TwqKLdevj5XMbCZmkgQgi8NqvzzkEhqpN1MrtX')",
      }
    },
  },
  plugins: [],
}
