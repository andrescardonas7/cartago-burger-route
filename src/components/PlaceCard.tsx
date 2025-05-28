import { motion } from 'framer-motion'
import { BurgerPlace } from '../data/normalizedBurgers'

interface PlaceCardProps {
  place: BurgerPlace
  stepNumber: number
  isActive: boolean
  isVisited: boolean
}

export default function PlaceCard({ place, stepNumber, isActive, isVisited }: PlaceCardProps) {
  const handleCall = () => {
    if (place.phone) {
      window.open(`tel:${place.phone}`, '_self')
    }
  }

  const handleDirections = () => {
    if (place.googleMapsLink) {
      window.open(place.googleMapsLink, '_blank')
    }
  }

  const handleWebsite = () => {
    if (place.website) {
      window.open(place.website, '_blank')
    }
  }

  return (
    <motion.div
      id={`step-${stepNumber}`}
      className={`
        relative p-8 rounded-2xl shadow-xl backdrop-blur-sm transition-all duration-500
        ${isActive 
          ? 'bg-gradient-to-br from-orange-50/90 to-red-50/90 border-2 border-orange-300 scale-105' 
          : isVisited 
            ? 'bg-white/80 border-2 border-gray-200' 
            : 'bg-white/60 border border-gray-100'
        }
      `}
      initial={{ opacity: 0, x: -50, scale: 0.9 }}
      animate={{ 
        opacity: isVisited ? 1 : 0.7, 
        x: 0, 
        scale: isActive ? 1.05 : 1 
      }}
      transition={{ 
        duration: 0.6, 
        delay: stepNumber * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      {/* Número de paso */}
      <div className={`
        absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg
        ${isActive ? 'bg-gradient-to-br from-orange-500 to-red-600' : isVisited ? 'bg-orange-400' : 'bg-gray-400'}
      `}>
        <span className="text-lg">{stepNumber + 1}</span>
      </div>

      {/* Badge de estado */}
      {isActive && (
        <motion.div
          className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ¡Estás aquí! 🍔
        </motion.div>
      )}

      <div className="space-y-4">
        {/* Encabezado */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
            {place.name}
          </h3>
          <p className="text-gray-600 flex items-center gap-2">
            📍 {place.address}, {place.city}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className={`
            px-3 py-1 rounded-full text-xs font-semibold
            ${place.category === 'gourmet' ? 'bg-purple-100 text-purple-700' :
              place.category === 'tradicional' ? 'bg-yellow-100 text-yellow-700' :
              place.category === 'rapida' ? 'bg-green-100 text-green-700' :
              'bg-blue-100 text-blue-700'}
          `}>
            {place.category.charAt(0).toUpperCase() + place.category.slice(1)}
          </span>
          
          {place.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
          
          {place.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
              +{place.tags.length - 3} más
            </span>
          )}
        </div>

        {/* Acciones */}
        <div className="flex gap-3 pt-4">
          {place.phone && (
            <motion.button
              onClick={handleCall}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              📞 Llamar
            </motion.button>
          )}
          
          {place.googleMapsLink && (
            <motion.button
              onClick={handleDirections}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🗺️ Ver en Mapa
            </motion.button>
          )}
          
          {place.website && (
            <motion.button
              onClick={handleWebsite}
              className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🌐 Sitio Web
            </motion.button>
          )}
        </div>

        {/* Información adicional para el paso activo */}
        {isActive && (
          <motion.div
            className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-orange-700 font-medium">
              🎯 ¡Has llegado a tu destino! Disfruta de las deliciosas hamburguesas que ofrece este lugar.
            </p>
            {place.tags.includes('delivery') && (
              <p className="text-xs text-orange-600 mt-2">
                💡 También ofrecen servicio a domicilio
              </p>
            )}
          </motion.div>
        )}
      </div>

      {/* Efecto de brillo para el activo */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 to-red-400/20 pointer-events-none"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </motion.div>
  )
} 