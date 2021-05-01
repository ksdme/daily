export default function Content({ children, className = '' }) {
  return (
    <div className={`w-full md:w-9/12 md:m-16 lg:w-1/3 xl:w-1/3 ${className}`}>
      {children}
    </div>
  )
}
