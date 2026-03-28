import { cn } from '../lib/cn'

export function Logo({ className = '', variant = 'light' }) {
  return (
    <a
      href="#top"
      className={cn(
        'inline-flex items-center gap-2.5 no-underline font-sans text-[1.2rem] font-extrabold tracking-tight',
        variant === 'dark' ? 'text-kwik-black' : 'text-inherit',
        className,
      )}
    >
      <span
        className={cn(
          'flex shrink-0',
          variant === 'dark' ? 'text-kwik-forest' : 'text-kwik-lime',
        )}
        aria-hidden="true"
      >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <rect
            x="2"
            y="2"
            width="30"
            height="30"
            rx="9"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M10 22c3-6 5-9 7-12 2 4 4 8 7 14M13 18h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>KwikBudget</span>
    </a>
  )
}
