import { createContext, useCallback, useContext, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type ResumeToastContextType = {
  triggerToast: () => void
}

const ResumeToastContext = createContext<ResumeToastContextType>({
  triggerToast: () => {},
})

export function useResumeToast() {
  return useContext(ResumeToastContext)
}

export function ResumeToastProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const triggerToast = useCallback(() => {
    setVisible(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setVisible(false), 2800)
  }, [])

  return (
    <ResumeToastContext.Provider value={{ triggerToast }}>
      {children}
      <ResumeToast visible={visible} />
    </ResumeToastContext.Provider>
  )
}

function ResumeToast({ visible }: { visible: boolean }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`resume-toast${visible ? ' resume-toast-visible' : ''}`}
    >
      {/* ícone check inline pra evitar import circular */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-3.5 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      Download iniciado!
    </div>
  )
}
