import { motion } from 'framer-motion'
import { useRouteStore } from '../stores/routeStore'

export default function Hero() {
  const { scrollToStep } = useRouteStore()

  const handleStartJourney = () => {
    scrollToStep(0)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-6xl">🍔</div>
        <div className="absolute top-40 right-20 text-4xl">🌮</div>
        <div className="absolute bottom-32 left-1/4 text-5xl">🍟</div>
        <div className="absolute bottom-20 right-1/3 text-3xl">🥤</div>
      </div>

      <div className="text-center max-w-4xl mx-auto px-6 z-10">
        <motion.h1 
          className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ruta de 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            {' '}Hamburguesas
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cartago, Valle del Cauca
        </motion.p>

        <motion.p 
          className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Acompaña a nuestra hamburguesa 🍔 en un viaje delicioso por 27 lugares increíbles. 
          Cada parada es una nueva aventura gastronómica esperándote.
        </motion.p>

        <motion.button
          onClick={handleStartJourney}
          className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          🚀 Comenzar el Viaje
        </motion.button>

        <motion.div 
          className="mt-16 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p>Scroll para seguir la ruta</p>
          <div className="mt-2">
            <motion.div 
              className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto relative"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-1 h-2 bg-gray-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 