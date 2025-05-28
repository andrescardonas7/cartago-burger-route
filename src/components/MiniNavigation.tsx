import { motion } from 'framer-motion'
import { useRouteStore } from '../stores/routeStore'

export default function MiniNavigation() {
  const { currentStep, visitedSteps, scrollToStep } = useRouteStore()

  const handleStepClick = (step: number) => {
    scrollToStep(step)
  }

  return (
    <motion.div 
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200">
        <div className="flex flex-col gap-2 max-h-96 overflow-y-auto custom-scrollbar">
          {Array.from({ length: 27 }, (_, index) => {
            const isActive = currentStep === index
            const isVisited = visitedSteps.has(index)
            
            return (
              <motion.button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300 relative
                  ${isActive 
                    ? 'bg-orange-500 ring-2 ring-orange-300 ring-offset-1' 
                    : isVisited 
                      ? 'bg-orange-300 hover:bg-orange-400' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                title={`Paso ${index + 1}`}
              >
                {/* Efecto de pulso para el step activo */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-orange-500"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>
        
        {/* Indicador de progreso */}
        <div className="mt-3 pt-3 border-t border-gray-200">
          <div className="text-xs text-gray-600 text-center mb-2">
            {currentStep + 1}/27
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / 27) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
} 