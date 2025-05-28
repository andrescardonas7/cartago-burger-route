import React, { useState } from 'react'
import burgerData from '../../ubicacion.json'

interface BurgerPlace {
  ID: string
  NOMBRE: string
  "DIRECCIÓN"?: string
  CIUDAD?: string
  "TELÉFONO"?: string
  "CATEGORÍA "?: string
  "ENLACE GOOGLE MAPS"?: string
  "SITIO WEBSITIO WEB"?: string
}

export default function BurgerRoute() {
  const [selectedPlace, setSelectedPlace] = useState<BurgerPlace | null>(null)
  const places = burgerData as BurgerPlace[]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          🍔 {places.length} Hamburgueserías en Cartago
        </h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          {places.map((place) => (
            <div
              key={place.ID}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedPlace(place)}
            >
              <h3 className="font-bold text-lg">{place.NOMBRE}</h3>
              {place["DIRECCIÓN"] && (
                <p className="text-sm text-gray-600">📍 {place["DIRECCIÓN"]}</p>
              )}
              {place["TELÉFONO"] && (
                <p className="text-sm text-gray-600">📞 {place["TELÉFONO"]}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedPlace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setSelectedPlace(null)}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-4">{selectedPlace.NOMBRE}</h3>
            {selectedPlace["DIRECCIÓN"] && (
              <p className="mb-2">📍 <strong>Dirección:</strong> {selectedPlace["DIRECCIÓN"]}</p>
            )}
            {selectedPlace["TELÉFONO"] && (
              <p className="mb-2">📞 <strong>Teléfono:</strong> {selectedPlace["TELÉFONO"]}</p>
            )}
            {selectedPlace["ENLACE GOOGLE MAPS"] && (
              <a
                href={selectedPlace["ENLACE GOOGLE MAPS"]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Ver en Google Maps
              </a>
            )}
            <button
              onClick={() => setSelectedPlace(null)}
              className="mt-4 ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 