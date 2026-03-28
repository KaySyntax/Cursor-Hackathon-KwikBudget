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
    'flex flex-col overflow-visible',
    compact
      ? 'h-[240px] w-[120px] max-[900px]:h-[230px] max-[900px]:w-[110px]'
      : 'h-[280px] w-[140px] max-[900px]:h-[250px] max-[900px]:w-[124px]',
    compact
      ? 'shadow-[0_20px_40px_-8px_rgba(0,0,0,0.38),0_8px_16px_-4px_rgba(0,0,0,0.22)]'
      : 'shadow-[0_28px_56px_-12px_rgba(0,0,0,0.45),0_12px_24px_-6px_rgba(0,0,0,0.25)]',
    shellClassName || defaultTransform,
  )

  /* iPhone 16–like continuous curves (slightly fuller than 14) */
  const outerR = compact ? 'rounded-[24px]' : 'rounded-[28px]'
  const bezelR = compact ? 'rounded-[21px]' : 'rounded-[25px]'
  const screenR = compact ? 'rounded-[18px]' : 'rounded-[21px]'

  return (
    <div
      className={cn('[perspective:1200px] [transform-style:preserve-3d]', className)}
      aria-hidden={label ? undefined : true}
    >
      {label ? <span className="sr-only">{label}</span> : null}
      <div className={shell}>
        {/* Titanium-inspired frame — cool, minimal */}
        <div
          className={cn(
            'flex h-full w-full flex-col',
            outerR,
            'bg-gradient-to-b from-[#6e6e72] via-[#4e4e52] to-[#353538]',
            'p-[2px]',
            '[box-shadow:inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(0,0,0,0.45),inset_0_0_0_0.5px_rgba(255,255,255,0.06)]',
          )}
        >
          <div
            className={cn(
              'flex min-h-0 flex-1 flex-col bg-[#010101]',
              bezelR,
              'p-[1.5px]',
              '[box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.04)]',
            )}
          >
            <div
              className={cn(
                'relative min-h-0 flex-1 overflow-hidden bg-kwik-forest-mid',
                screenR,
                '[box-shadow:inset_0_0_24px_rgba(0,0,0,0.15)]',
              )}
            >
              {/* Dynamic Island */}
              <div
                className="pointer-events-none absolute left-1/2 top-[6px] z-10 -translate-x-1/2"
                aria-hidden="true"
              >
                <div
                  className={cn(
                    'relative overflow-hidden rounded-full bg-[#0a0a0a]',
                    '[box-shadow:inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.6),0_2px_6px_rgba(0,0,0,0.35)]',
                    compact
                      ? 'h-[9px] min-w-[52px] w-[38%]'
                      : 'h-[11px] min-w-[58px] w-[36%]',
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-full opacity-50"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(255,255,255,0.16) 0%, transparent 42%)',
                    }}
                  />
                </div>
              </div>

              <div
                className={cn(
                  'relative h-full overflow-hidden',
                  compact ? 'pt-[12px]' : 'pt-[14px]',
                )}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
