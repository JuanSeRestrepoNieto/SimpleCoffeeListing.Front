# SimpleCoffeeListing.Front

This is a project to list products from Coffee Shop.

## Features

- ✅ Reusable Card component built with React
- ✅ Responsive grid layout for product cards
- ✅ Interactive filter buttons (All Products / Available Now)
- ✅ Product information including:
  - Product name and image
  - Price display
  - Rating with vote count
  - Popular badge for trending items
  - Sold out indicator for unavailable products
- ✅ Modern, clean UI with dark theme
- ✅ Hover effects on cards

## Technologies Used

- **React** - Frontend library
- **Vite** - Build tool and dev server
- **CSS** - Styling with modern CSS features
- **SVG** - Product images

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JuanSeRestrepoNieto/SimpleCoffeeListing.Front.git
cd SimpleCoffeeListing.Front
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

Create a production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
SimpleCoffeeListing.Front/
├── public/
│   └── images/          # Product images (SVG)
├── src/
│   ├── components/
│   │   ├── Card.jsx     # Reusable Card component
│   │   └── Card.css     # Card component styles
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## Component Usage

The `Card` component accepts a `product` prop with the following structure:

```javascript
{
  id: 1,
  name: 'Cappuccino',
  image: '/images/cappuccino.svg',
  price: '$5.20',
  rating: 4.9,
  votes: 65,
  popular: true,
  available: true
}
```

## Screenshots

### All Products View
![All Products](https://github.com/user-attachments/assets/15f0de7f-e4fe-4a06-8c7b-e1f12a72df4b)

### Available Now Filter
![Available Now](https://github.com/user-attachments/assets/64477902-cb3d-439c-aced-000b441716f9)

