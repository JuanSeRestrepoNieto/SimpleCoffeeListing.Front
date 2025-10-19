import React, { useState } from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
  const [filter, setFilter] = useState('all')

  const coffeeProducts = [
    {
      id: 1,
      name: 'Cappuccino',
      image: '/images/cappuccino.svg',
      price: '$5.20',
      rating: 4.9,
      votes: 65,
      popular: true,
      available: true
    },
    {
      id: 2,
      name: 'House Coffee',
      image: '/images/house-coffee.svg',
      price: '$3.50',
      rating: 4.85,
      votes: 55,
      popular: true,
      available: true
    },
    {
      id: 3,
      name: 'Espresso',
      image: '/images/espresso.svg',
      price: '$4.20',
      rating: 4.75,
      votes: 48,
      popular: false,
      available: true
    },
    {
      id: 4,
      name: 'Coffee Latte',
      image: '/images/latte.svg',
      price: '$4.50',
      rating: 4.92,
      votes: 73,
      popular: true,
      available: true
    },
    {
      id: 5,
      name: 'Americano',
      image: '/images/americano.svg',
      price: '$3.80',
      rating: 4.65,
      votes: 42,
      popular: false,
      available: true
    },
    {
      id: 6,
      name: 'Mocha',
      image: '/images/mocha.svg',
      price: '$5.50',
      rating: 0,
      votes: 0,
      popular: false,
      available: false
    }
  ]

  const filteredProducts = filter === 'available' 
    ? coffeeProducts.filter(product => product.available)
    : coffeeProducts

  return (
    <div className="app">
      <div className="hero-section">
        <h1 className="hero-title">Our Collection</h1>
        <p className="hero-description">
          Introducing our Coffee Collection, a selection of unique coffees from different roast types 
          and origins, expertly roasted in small batches and shipped fresh weekly.
        </p>
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            aria-pressed={filter === 'all'}
          >
            All Products
          </button>
          <button 
            className={`filter-btn ${filter === 'available' ? 'active' : ''}`}
            onClick={() => setFilter('available')}
            aria-pressed={filter === 'available'}
          >
            Available Now
          </button>
        </div>
      </div>
      <div className="card-grid">
        {filteredProducts.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
