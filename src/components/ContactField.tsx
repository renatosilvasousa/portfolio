import type { ReactNode } from 'react'

type ContactFieldProps = {
  icon: ReactNode
  label: string
  children: ReactNode
}

export function ContactField({ icon, label, children }: ContactFieldProps) {
  return (
    <li className="flex min-w-0 items-start gap-3">
      <span className="mt-0.5 shrink-0 text-neon">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-wider text-subtle lg:text-sm">{label}</p>
        <div className="mt-1">{children}</div>
      </div>
    </li>
  )
}
