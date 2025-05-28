import React from 'react'
import { motion } from 'framer-motion'

interface SearchAndFiltersProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

export default function SearchAndFilters({
  searchTerm,
  onSearchChange,
  selectedFilter,
  onFilterChange
}: SearchAndFiltersProps) {
  const filters = [
    { id: 'all', label: 'Todas', icon: '🍔' },
    { id: 'gourmet', label: 'Gourmet', icon: '🎩' },
    { id: 'traditional', label: 'Tradicional', icon: '🏠' },
    { id: 'delivery', label: 'Domicilio', icon: '🛵' }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      {/* Barra de búsqueda */}
      <div className="relative mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar hamburguería..."
          className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <motion.button
            key={filter.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selectedFilter === filter.id
                ? 'bg-amber-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{filter.icon}</span>
            {filter.label}
          </motion.button>
        ))}
      </div>
    </div>
  )
} 