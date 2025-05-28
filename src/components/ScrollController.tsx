import { useEffect } from 'react'
import { useRouteStore } from '../stores/routeStore'

export default function ScrollController() {
  const { setScrollProgress, setCurrentStep, setIsAnimating } = useRouteStore()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = Math.min(scrollTop / documentHeight, 1)
      
      // Actualizar progreso de scroll
      setScrollProgress(scrollProgress)
      
      // Calcular step actual basado en el progreso
      // El primer 10% es para el hero, luego dividimos el resto entre 27 steps
      const heroProgress = 0.1
      if (scrollProgress <= heroProgress) {
        setCurrentStep(0)
      } else {
        const routeProgress = (scrollProgress - heroProgress) / (1 - heroProgress)
        const currentStep = Math.floor(routeProgress * 27)
        setCurrentStep(Math.min(currentStep, 26))
      }
    }

    const handleScrollStart = () => {
      setIsAnimating(true)
    }

    const handleScrollEnd = () => {
      setTimeout(() => setIsAnimating(false), 150)
    }

    // Throttle scroll events para mejor performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // Detectar inicio y fin de scroll
    let scrollTimer: NodeJS.Timeout
    const scrollWithTimers = () => {
      handleScrollStart()
      throttledScroll()
      
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(handleScrollEnd, 150)
    }

    // Event listeners
    window.addEventListener('scroll', scrollWithTimers, { passive: true })
    
    // Scroll inicial
    handleScroll()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', scrollWithTimers)
      clearTimeout(scrollTimer)
    }
  }, [setScrollProgress, setCurrentStep, setIsAnimating])

  return null // Este componente no renderiza nada visible
} 