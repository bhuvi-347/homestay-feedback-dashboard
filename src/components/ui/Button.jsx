/**
 * Button component
 * @param {string} variant - 'primary' | 'secondary' | 'outline'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} disabled - disables the button
 * @param {function} onClick - click handler
 * @param {React.ReactNode} children - button label
 */
function Button({ variant = 'primary', size = 'md', disabled = false, onClick, children }) {
  const base = 'rounded font-medium transition-colors focus:outline-none'

  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-purple-600 text-purple-600 hover:bg-purple-50',
  }

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
