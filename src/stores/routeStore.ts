import { create } from 'zustand'

interface RouteStore {
  currentStep: number
  visitedSteps: Set<number>
  scrollProgress: number
  isAnimating: boolean
  setCurrentStep: (step: number) => void
  markStepAsVisited: (step: number) => void
  setScrollProgress: (progress: number) => void
  setIsAnimating: (animating: boolean) => void
  scrollToStep: (step: number) => void
}

export const useRouteStore = create<RouteStore>((set, get) => ({
  currentStep: 0,
  visitedSteps: new Set([0]),
  scrollProgress: 0,
  isAnimating: false,
  
  setCurrentStep: (step) => {
    set({ currentStep: step })
    get().markStepAsVisited(step)
  },
  
  markStepAsVisited: (step) => {
    set((state) => ({
      visitedSteps: new Set([...state.visitedSteps, step])
    }))
  },
  
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  
  setIsAnimating: (animating) => set({ isAnimating: animating }),
  
  scrollToStep: (step) => {
    const element = document.getElementById(`step-${step}`)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center' 
      })
    }
  }
})) 