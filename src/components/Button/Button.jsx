

// eslint-disable-next-line react/prop-types
function PrimaryButton({children, onClick, disabled, className, type}) {
  return (
    <button
      className={`bg-primary-100 text-white px-4 py-2 rounded-md ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default PrimaryButton