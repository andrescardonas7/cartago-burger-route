import React from 'react'
import { motion } from 'framer-motion'
import { NormalizedBurgerPlace } from '../data/normalizedBurgers'

interface PlacesListProps {
  places: NormalizedBurgerPlace[]
  onSelectPlace: (place: NormalizedBurgerPlace) => void
  selectedId: string | null
}

export default function PlacesList({ places, onSelectPlace, selectedId }: PlacesListProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <span className="mr-2">📋</span>
        Lista de Hamburgueserías ({places.length})
      </h3>
      
      <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
        {places.map((place, index) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => onSelectPlace(place)}
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              selectedId === place.id
                ? 'bg-amber-50 border-2 border-amber-500'
                : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{place.name}</h4>
                {place.address && (
                  <p className="text-sm text-gray-600 mt-1">📍 {place.address}</p>
                )}
                {place.tags && place.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {place.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <motion.div
                whileHover={{ rotate: 15 }}
                className="text-2xl ml-3"
              >
                🍔
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {places.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No se encontraron hamburgueserías
        </div>
      )}
    </div>
  )
} 