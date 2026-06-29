/**
 * Input component
 * @param {string} label - input label
 * @param {string} placeholder - placeholder text
 * @param {string} type - input type (text, email, password)
 * @param {string} value - input value
 * @param {function} onChange - change handler
 * @param {string} error - error message
 */
function Input({ label, placeholder, type = 'text', value, onChange, error }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  )
}

export default Input
