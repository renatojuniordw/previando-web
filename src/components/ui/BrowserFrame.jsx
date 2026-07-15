export default function BrowserFrame({ children, url = 'app.previando.com.br', className = '' }) {
  return (
    <div className={`glass rounded-lg overflow-hidden glow-md ${className}`}>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-dark-600 bg-dark-800/80">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="glass rounded-md px-4 py-1 text-gray-400 text-xs font-medium tracking-wide">
            {url}
          </span>
        </div>
        <div className="w-12" aria-hidden="true" />
      </div>
      <div className="bg-dark-900">{children}</div>
    </div>
  )
}
