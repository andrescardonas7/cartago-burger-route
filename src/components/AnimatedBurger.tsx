import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { generateSpiralPath, getPointAtProgress } from '../utils/spiralPath'
import { useRouteStore } from '../stores/routeStore'

interface AnimatedBurgerProps {
  canvasWidth?: number
  canvasHeight?: number
}

export default function AnimatedBurger({ 
  canvasWidth = 800, 
  canvasHeight = 800 
}: AnimatedBurgerProps) {
  const { scrollProgress, currentStep } = useRouteStore()
  
  const spiralPoints = useMemo(() => 
    generateSpiralPath(canvasWidth / 2, canvasHeight / 2, 30, 350, 3.5, 27), 
    [canvasWidth, canvasHeight]
  )
  
  const currentPosition = useMemo(() => 
    getPointAtProgress(spiralPoints, scrollProgress), 
    [spiralPoints, scrollProgress]
  )

  // Calcular rotación basada en la dirección del movimiento
  const rotation = currentPosition.angle * (180 / Math.PI)

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg 
        width={canvasWidth} 
        height={canvasHeight} 
        viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
        className="w-full h-auto"
      >
        {/* Hamburguesa animada */}
        <g>
          {/* Sombra */}
          <motion.ellipse
            cx={currentPosition.x + 3}
            cy={currentPosition.y + 25}
            rx="25"
            ry="8"
            fill="rgba(0,0,0,0.2)"
            animate={{
              cx: currentPosition.x + 3,
              cy: currentPosition.y + 25,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />

          {/* Contenedor de la hamburguesa */}
          <motion.g
            animate={{
              x: currentPosition.x,
              y: currentPosition.y,
              rotate: rotation * 0.1, // Rotación suave
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Efecto de brillo/glow alrededor */}
            <motion.circle
              r="35"
              fill="rgba(249, 115, 22, 0.3)"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Hamburguesa emoji principal */}
            <text
              textAnchor="middle"
              dominantBaseline="central"
              className="text-4xl font-bold"
              style={{ userSelect: 'none' }}
            >
              🍔
            </text>

            {/* Partículas que siguen la hamburguesa */}
            <motion.g>
              {[...Array(3)].map((_, i) => (
                <motion.circle
                  key={i}
                  r="2"
                  fill="#F97316"
                  animate={{
                    x: [0, -10 - i * 5, 0],
                    y: [0, -5 + i * 2, 0],
                    opacity: [0.8, 0, 0.8]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.g>
          </motion.g>

          {/* Indicador de progreso */}
          <motion.g
            animate={{
              x: currentPosition.x,
              y: currentPosition.y - 50,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <rect
              x="-25"
              y="-8"
              width="50"
              height="16"
              fill="rgba(255,255,255,0.9)"
              stroke="#E5E7EB"
              strokeWidth="1"
              rx="8"
            />
            
            <motion.rect
              x="-23"
              y="-6"
              width="46"
              height="12"
              fill="url(#progress-gradient)"
              rx="6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: scrollProgress }}
              style={{ transformOrigin: 'left center' }}
            />

            <text
              textAnchor="middle"
              dominantBaseline="central"
              className="text-xs font-bold fill-gray-700"
              y="2"
            >
              {Math.round(scrollProgress * 100)}%
            </text>
          </motion.g>

          {/* Mensaje dinámico */}
          {currentStep < spiralPoints.length && (
            <motion.g
              animate={{
                x: currentPosition.x,
                y: currentPosition.y + 60,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <rect
                x="-40"
                y="-12"
                width="80"
                height="24"
                fill="rgba(255,255,255,0.95)"
                stroke="#F97316"
                strokeWidth="2"
                rx="12"
              />
              
              <text
                textAnchor="middle"
                dominantBaseline="central"
                className="text-xs font-semibold fill-orange-600"
              >
                Parada {currentStep + 1}/27
              </text>
            </motion.g>
          )}
        </g>

        {/* Gradientes */}
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
} 