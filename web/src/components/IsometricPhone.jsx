import { cn } from '../lib/cn'

export function IsometricPhone({
  children,
  className = '',
  tilt = 'left',
  float = false,
  compact = false,
  shellClassName = '',
  label = '',
}) {
  const defaultTransform =
    float && tilt === 'left'
      ? '[transform:perspective(1200px)_rotateX(14deg)_rotateY(-6deg)_rotateZ(-12deg)_translateY(-12px)]'
      : float && tilt === 'right'
        ? '[transform:perspective(1200px)_rotateX(14deg)_rotateY(6deg)_rotateZ(12deg)_translateY(-8px)]'
        : tilt === 'left'
          ? '[transform:perspective(1200px)_rotateX(12deg)_rotateZ(-8deg)]'
          : '[transform:perspective(1200px)_rotateX(12deg)_rotateZ(8deg)]'

  const shell = cn(
    'rounded-[22px] bg-gradient-to-br from-[#2a2a2a] to-[#0d0d0d] p-2',
    compact
      ? 'shadow-[-6px_16px_32px_rgba(0,0,0,0.35)] [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)]'
      : 'shadow-[-8px_16px_32px_rgba(0,0,0,0.45)] [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)]',
    compact
      ? 'h-[240px] w-[120px]'
      : 'h-[280px] w-[140px] max-[900px]:h-[230px] max-[900px]:w-[110px]',
    shellClassName || defaultTransform,
  )

  return (
    <div
      className={cn('[perspective:1200px] [transform-style:preserve-3d]', className)}
      aria-hidden={label ? undefined : true}
    >
      {label ? (
        <span className="sr-only">{label}</span>
      ) : null}
      <div className={shell}>
        <div className="mx-auto mb-1.5 h-3.5 w-[52%] rounded-full bg-[#0a0a0a]" />
        <div className="relative h-[calc(100%-24px)] overflow-hidden rounded-[14px] bg-kwik-forest-mid">
          {children}
        </div>
      </div>
    </div>
  )
}
