import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { burgerPlaces as normalizedBurgers } from '../data/normalizedBurgers'
import { shuffleArray } from '../utils/spiralPath'
import { useRouteStore } from '../stores/routeStore'
import PathCanvas from './PathCanvas'
import AnimatedBurger from './AnimatedBurger'
import PlaceCard from './PlaceCard'
import ScrollController from './ScrollController'
import MiniNavigation from './MiniNavigation'

export default function IllustratedRoute() {
  const { currentStep, visitedSteps } = useRouteStore()
  
  // Mezclar lugares una sola vez al montar el componente
  const shuffledPlaces = useMemo(() => 
    shuffleArray(normalizedBurgers), 
    []
  )

  return (
    <div className="relative">
      {/* Scroll Controller */}
      <ScrollController />
      
      {/* Mini Navigation */}
      <MiniNavigation />

      {/* Contenedor principal */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
        
        {/* Layout en dos columnas */}
        <div className="flex flex-col lg:flex-row">
          
          {/* Columna izquierda: Path Canvas */}
          <div className="lg:w-1/2 lg:min-h-screen flex items-center justify-center p-6">
            <div className="relative w-full max-w-2xl">
              <PathCanvas width={800} height={800} />
              <AnimatedBurger canvasWidth={800} canvasHeight={800} />
            </div>
          </div>

          {/* Columna derecha: Cards de lugares */}
          <div className="lg:w-1/2 lg:min-h-screen overflow-y-auto">
            <div className="p-6 space-y-8">
              
              {/* Encabezado de la ruta */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Tu Viaje 🍔
                </h2>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  Sigue la hamburguesa mientras descubre los mejores lugares de Cartago
                </p>
                
                {/* Estadísticas */}
                <div className="flex justify-center gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      {visitedSteps.size}
                    </div>
                    <div className="text-sm text-gray-500">Visitados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {27 - visitedSteps.size}
                    </div>
                    <div className="text-sm text-gray-500">Por descubrir</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {Math.round((visitedSteps.size / 27) * 100)}%
                    </div>
                    <div className="text-sm text-gray-500">Completado</div>
                  </div>
                </div>
              </motion.div>

              {/* Cards de los lugares */}
              <div className="space-y-12">
                {shuffledPlaces.map((place, index) => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    stepNumber={index}
                    isActive={currentStep === index}
                    isVisited={visitedSteps.has(index)}
                  />
                ))}
              </div>

              {/* Mensaje final */}
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: visitedSteps.size === 27 ? 1 : 0.3 }}
                transition={{ duration: 1 }}
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-3xl font-bold text-green-700 mb-4">
                    ¡Felicitaciones!
                  </h3>
                  <p className="text-lg text-green-600 max-w-md mx-auto">
                    Has completado la Ruta de Hamburguesas de Cartago. 
                    ¡Ahora eres un experto en hamburguesas locales!
                  </p>
                  
                  {visitedSteps.size === 27 && (
                    <motion.button
                      className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full font-semibold shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      🔄 Empezar de nuevo
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 