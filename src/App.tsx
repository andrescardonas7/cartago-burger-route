import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import SearchAndFilters from './components/SearchAndFilters'
import SVGMap from './components/SVGMap'
import PlacesList from './components/PlacesList'
import PlaceDetail from './components/PlaceDetail'
import { burgerPlaces, NormalizedBurgerPlace } from './data/normalizedBurgers'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedPlace, setSelectedPlace] = useState<NormalizedBurgerPlace | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // Filtrar lugares basado en búsqueda y filtros
  const filteredPlaces = useMemo(() => {
    let filtered = burgerPlaces

    // Filtro por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(place =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filtro por categoría
    switch (selectedFilter) {
      case 'gourmet':
        filtered = filtered.filter(place => 
          place.tags.includes('gourmet')
        )
        break
      case 'traditional':
        filtered = filtered.filter(place => 
          place.tags.includes('tradicional')
        )
        break
      case 'delivery':
        filtered = filtered.filter(place => 
          place.tags.includes('delivery')
        )
        break
    }

    return filtered
  }, [searchTerm, selectedFilter])

  const handleSelectPlace = (place: NormalizedBurgerPlace) => {
    setSelectedPlace(place)
    setSelectedId(place.id)
  }

  const handleMapClick = (id: string) => {
    const place = burgerPlaces.find(p => p.id === id)
    if (place) {
      handleSelectPlace(place)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto py-6 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              🍔 Ruta de Hamburguesas - Cartago
            </h1>
            <p className="text-gray-600">
              Descubre las mejores hamburgueserías de la ciudad
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <SearchAndFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <SVGMap
              places={filteredPlaces}
              onLocationClick={handleMapClick}
              selectedId={selectedId}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <PlacesList
              places={filteredPlaces}
              onSelectPlace={handleSelectPlace}
              selectedId={selectedId}
            />
          </motion.div>
        </div>

        {/* Place Detail */}
        {selectedPlace && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6"
          >
            <PlaceDetail
              place={selectedPlace}
              onClose={() => {
                setSelectedPlace(null)
                setSelectedId(null)
              }}
            />
          </motion.div>
        )}

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">📊 Estadísticas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-500">{burgerPlaces.length}</p>
              <p className="text-gray-600">Total</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-500">
                {burgerPlaces.filter(p => p.tags.includes('gourmet')).length}
              </p>
              <p className="text-gray-600">Gourmet</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-500">
                {burgerPlaces.filter(p => p.tags.includes('delivery')).length}
              </p>
              <p className="text-gray-600">Delivery</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-500">
                {filteredPlaces.length}
              </p>
              <p className="text-gray-600">Mostrando</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default App 