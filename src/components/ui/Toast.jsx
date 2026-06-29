import { useEffect } from 'react'

/**
 * Toast component
 * @param {string} message - message to display
 * @param {string} type - 'success' | 'error' | 'info'
 * @param {function} onClose - close handler
 */
function Toast({ message, type = 'info', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  const types = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-purple-600',
  }

  return (
    <div className={`fixed bottom-6 right-6 ${types[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50`}>
      {message}
    </div>
  )
}

export default Toast
