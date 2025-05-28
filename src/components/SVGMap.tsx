import React from 'react'
import { motion } from 'framer-motion'
import { NormalizedBurgerPlace } from '../data/normalizedBurgers'

interface MapProps {
  places: NormalizedBurgerPlace[]
  onLocationClick: (id: string) => void
  selectedId: string | null
}

export default function SVGMap({ places, onLocationClick, selectedId }: MapProps) {
  const placesWithCoords = places.filter(p => p.coordinates)
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Mapa de Hamburgueserías</h3>
      <svg
        width="100%"
        height="400"
        viewBox="0 0 500 400"
        className="border rounded-lg"
      >
        {/* Fondo del mapa */}
        <rect width="500" height="400" fill="#f0f9ff" />
        
        {/* Río La Vieja */}
        <path
          d="M 0 200 Q 100 180 200 200 T 400 220 L 500 200 L 500 400 L 0 400 Z"
          fill="#60a5fa"
          opacity="0.3"
        />
        
        {/* Calles principales */}
        <line x1="0" y1="200" x2="500" y2="200" stroke="#d1d5db" strokeWidth="2" />
        <line x1="250" y1="0" x2="250" y2="400" stroke="#d1d5db" strokeWidth="2" />
        
        {/* Centro de Cartago */}
        <circle cx="250" cy="200" r="80" fill="#fef3c7" opacity="0.4" />
        <text x="250" y="200" textAnchor="middle" className="text-xs fill-gray-500">
          Centro
        </text>
        
        {/* Puntos de hamburgueserías */}
        {placesWithCoords.map((place) => (
          <motion.g
            key={place.id}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onLocationClick(place.id)}
            className="cursor-pointer"
          >
            <circle
              cx={place.coordinates!.x}
              cy={place.coordinates!.y}
              r={selectedId === place.id ? 12 : 8}
              fill={selectedId === place.id ? '#ef4444' : '#f59e0b'}
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={place.coordinates!.x}
              y={place.coordinates!.y - 15}
              textAnchor="middle"
              className="text-xs fill-gray-700 font-medium pointer-events-none"
            >
              {place.name.length > 10 ? place.name.substring(0, 10) + '...' : place.name}
            </text>
          </motion.g>
        ))}
        
        {/* Leyenda */}
        <g transform="translate(10, 10)">
          <rect width="120" height="60" fill="white" opacity="0.9" rx="5" />
          <circle cx="20" cy="25" r="6" fill="#f59e0b" />
          <text x="30" y="30" className="text-xs">Hamburguería</text>
          <circle cx="20" cy="45" r="6" fill="#ef4444" />
          <text x="30" y="50" className="text-xs">Seleccionada</text>
        </g>
      </svg>
    </div>
  )
} 