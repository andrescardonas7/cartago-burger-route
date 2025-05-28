import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NormalizedBurgerPlace } from '../data/normalizedBurgers'

interface PlaceDetailProps {
  place: NormalizedBurgerPlace | null
  onClose: () => void
}

export default function PlaceDetail({ place, onClose }: PlaceDetailProps) {
  if (!place) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="bg-white rounded-lg shadow-xl p-6"
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{place.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="space-y-3">
          {place.address && (
            <div className="flex items-start">
              <span className="text-2xl mr-3">📍</span>
              <div>
                <p className="font-semibold text-gray-700">Dirección</p>
                <p className="text-gray-600">{place.address}</p>
                {place.city && <p className="text-sm text-gray-500">{place.city}</p>}
              </div>
            </div>
          )}

          {place.phone && (
            <div className="flex items-start">
              <span className="text-2xl mr-3">📞</span>
              <div>
                <p className="font-semibold text-gray-700">Teléfono</p>
                <a href={`tel:${place.phone}`} className="text-blue-600 hover:underline">
                  {place.phone}
                </a>
              </div>
            </div>
          )}

          {place.category && (
            <div className="flex items-start">
              <span className="text-2xl mr-3">🏷️</span>
              <div>
                <p className="font-semibold text-gray-700">Categoría</p>
                <p className="text-gray-600">{place.category}</p>
              </div>
            </div>
          )}

          {place.tags && place.tags.length > 0 && (
            <div className="flex items-start">
              <span className="text-2xl mr-3">🏆</span>
              <div>
                <p className="font-semibold text-gray-700">Especialidades</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {place.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm bg-amber-100 text-amber-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {place.website && (
            <div className="flex items-start">
              <span className="text-2xl mr-3">🌐</span>
              <div>
                <p className="font-semibold text-gray-700">Sitio Web</p>
                <a
                  href={place.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {place.website}
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex gap-3">
          {place.googleMapsLink && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={place.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-500 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              📍 Ver en Google Maps
            </motion.a>
          )}
          {place.phone && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${place.phone}`}
              className="flex-1 bg-green-500 text-white text-center py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              📞 Llamar
            </motion.a>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 