import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Page not found</h1>
          <p className="mt-4 text-gray-600">{`Sorry we couldn't find the page you're looking for.`}</p>
          <Link href="/" className="mt-6 inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-lg">
            Return to Home
          </Link>
        </div>
      </div>
  )
}

export default NotFound