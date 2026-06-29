/**
 * Loader component
 * @param {string} size - 'sm' | 'md' | 'lg'
 */
function Loader({ size = 'md' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizes[size]} border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin`}
      />
    </div>
  )
}

export default Loader
