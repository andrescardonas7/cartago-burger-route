import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { generateSpiralPath, createSpiralSVGPath, type PathPoint } from '../utils/spiralPath'
import { useRouteStore } from '../stores/routeStore'

interface PathCanvasProps {
  width?: number
  height?: number
}

export default function PathCanvas({ width = 800, height = 800 }: PathCanvasProps) {
  const { currentStep, visitedSteps, scrollProgress } = useRouteStore()
  
  const spiralPoints = useMemo(() => 
    generateSpiralPath(width / 2, height / 2, 30, 350, 3.5, 27), 
    [width, height]
  )
  
  const pathString = useMemo(() => 
    createSpiralSVGPath(spiralPoints), 
    [spiralPoints]
  )

  // Calcular el progreso del trazo del path
  const pathProgress = Math.min(scrollProgress * 1.2, 1)

  return (
    <div className="sticky top-20 w-full max-w-4xl mx-auto">
      <svg 
        width={width} 
        height={height} 
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto drop-shadow-lg"
      >
        {/* Fondo decorativo */}
        <defs>
          <radialGradient id="bg-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="100%" stopColor="#FED7AA" />
          </radialGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Fondo */}
        <rect 
          width={width} 
          height={height} 
          fill="url(#bg-gradient)" 
          rx="20"
        />

        {/* Path completo (gris claro) */}
        <path
          d={pathString}
          stroke="#E5E7EB"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="5,5"
        />

        {/* Path progresivo */}
        <motion.path
          d={pathString}
          stroke="url(#path-gradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: pathProgress }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>

        {/* Puntos de parada */}
        {spiralPoints.map((point: PathPoint, index: number) => {
          const isVisited = visitedSteps.has(index)
          const isCurrent = currentStep === index
          const shouldShow = index <= Math.floor(scrollProgress * spiralPoints.length)

          if (!shouldShow) return null

          return (
            <g key={index}>
              {/* Glow effect para punto actual */}
              {isCurrent && (
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="20"
                  fill="#F97316"
                  opacity="0.3"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              
              {/* Punto principal */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r={isCurrent ? "12" : "8"}
                fill={isVisited ? "#F97316" : "#9CA3AF"}
                stroke={isCurrent ? "#DC2626" : "#FFFFFF"}
                strokeWidth="3"
                className="cursor-pointer hover:scale-110 transition-transform"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
              />

              {/* Número del step */}
              <motion.text
                x={point.x}
                y={point.y + 1}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-xs font-bold fill-white pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {index + 1}
              </motion.text>
            </g>
          )
        })}

        {/* Decoraciones adicionales */}
        <g opacity="0.1">
          <text x="50" y="100" className="text-4xl">🌟</text>
          <text x={width - 100} y="150" className="text-3xl">✨</text>
          <text x="80" y={height - 80} className="text-5xl">🎯</text>
          <text x={width - 120} y={height - 120} className="text-4xl">🏆</text>
        </g>
      </svg>
    </div>
  )
} 