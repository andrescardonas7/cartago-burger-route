export interface PathPoint {
  x: number
  y: number
  angle: number
  step: number
}

export function generateSpiralPath(
  centerX: number = 400,
  centerY: number = 400,
  startRadius: number = 20,
  endRadius: number = 350,
  turns: number = 4,
  steps: number = 27
): PathPoint[] {
  const points: PathPoint[] = []
  const angleStep = (turns * 2 * Math.PI) / (steps - 1)
  const radiusStep = (endRadius - startRadius) / (steps - 1)
  
  for (let i = 0; i < steps; i++) {
    const angle = i * angleStep
    const radius = startRadius + (i * radiusStep)
    
    // Aplicar easing suave para que el espaciado sea más natural
    const easedRadius = startRadius + (endRadius - startRadius) * easeOutQuart(i / (steps - 1))
    
    const x = centerX + Math.cos(angle) * easedRadius
    const y = centerY + Math.sin(angle) * easedRadius
    
    points.push({
      x,
      y,
      angle,
      step: i
    })
  }
  
  return points
}

function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4)
}

export function createSpiralSVGPath(points: PathPoint[]): string {
  if (points.length === 0) return ''
  
  let path = `M ${points[0].x} ${points[0].y}`
  
  // Crear curvas suaves entre puntos usando quadratic curves
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]
    
    if (i === 1) {
      path += ` L ${curr.x} ${curr.y}`
    } else {
      // Control point para curva suave
      const controlX = (prev.x + curr.x) / 2
      const controlY = (prev.y + curr.y) / 2
      path += ` Q ${controlX} ${controlY} ${curr.x} ${curr.y}`
    }
  }
  
  return path
}

export function getPointAtProgress(points: PathPoint[], progress: number): PathPoint {
  const clampedProgress = Math.max(0, Math.min(1, progress))
  const index = clampedProgress * (points.length - 1)
  const lowerIndex = Math.floor(index)
  const upperIndex = Math.ceil(index)
  
  if (lowerIndex === upperIndex) {
    return points[lowerIndex]
  }
  
  const t = index - lowerIndex
  const lower = points[lowerIndex]
  const upper = points[upperIndex]
  
  // Interpolación lineal entre puntos
  return {
    x: lower.x + (upper.x - lower.x) * t,
    y: lower.y + (upper.y - lower.y) * t,
    angle: lower.angle + (upper.angle - lower.angle) * t,
    step: Math.round(lower.step + (upper.step - lower.step) * t)
  }
}

// Shuffle array para orden aleatorio
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
} 