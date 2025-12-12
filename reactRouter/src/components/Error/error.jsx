import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl text-center p-8 bg-white rounded-lg shadow">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">Page not found — the route you tried does not exist.</p>
        <div className="flex justify-center gap-3">
          <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded">Go Home</Link>
          <button type="button" onClick={() => window.history.back()} className="px-4 py-2 border rounded">Go Back</button>
        </div>
      </div>
    </div>
  )
}

export default Error