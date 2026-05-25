module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBg: '#F8F7F4',
        primaryText: '#111111',
        secondaryText: '#6B7280',
        primaryAccent: '#2563EB',
        accentHover: '#1D4ED8',
        cardSurface: '#FFFFFF',
        borderColor: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'Manrope', 'sans-serif'],
      },
      borderRadius: {
        'premium': '20px',
        'premium-sm': '16px',
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(17, 17, 17, 0.04), 0 2px 6px -1px rgba(17, 17, 17, 0.02)',
        'premium-hover': '0 20px 40px -4px rgba(17, 17, 17, 0.08), 0 8px 16px -2px rgba(17, 17, 17, 0.04)',
      }
    },
  },
  plugins: [],
}
