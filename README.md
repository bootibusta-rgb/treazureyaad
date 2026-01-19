# Treazure Yaad - Next.js Website

A modern dark-themed marketplace website for browsing cars and properties.

## Features

- 🎨 Dark theme with purple, white, black, blue, orange, and yellow color scheme
- 🚗 Cars category with vehicle listings
- 🏠 Properties category with real estate listings
- 📱 Responsive design
- 🎯 Interactive sidebar navigation
- 💳 Listing cards with images, prices, locations, and contact buttons

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
marketplace/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Sidebar.tsx     # Left sidebar navigation
│   └── ListingCard.tsx # Listing card component
├── data/
│   └── listings.ts     # Static data for cars and properties
└── package.json
```

## Technologies

- Next.js 14
- React 18
- TypeScript
- CSS-in-JS (styled-jsx)
