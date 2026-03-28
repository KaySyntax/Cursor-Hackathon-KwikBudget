import { cn } from '../lib/cn'

export function IsometricPhone({
  children,
  className = '',
  tilt = 'left',
  float = false,
  compact = false,
  shellClassName = '',
  label = '',
  /** When set, fills the screen with a real device screenshot (hides the faux Dynamic Island). */
  screenshot = null,
}) {
  const defaultTransform =
    float && tilt === 'left'
      ? '[transform:perspective(1400px)_rotateX(10deg)_rotateY(-5deg)_rotateZ(-8deg)_translateY(-10px)]'
      : float && tilt === 'right'
        ? '[transform:perspective(1400px)_rotateX(10deg)_rotateY(5deg)_rotateZ(8deg)_translateY(-6px)]'
        : tilt === 'left'
          ? '[transform:perspective(1400px)_rotateX(8deg)_rotateZ(-6deg)]'
          : '[transform:perspective(1400px)_rotateX(8deg)_rotateZ(6deg)]'

  const shell = cn(
    'flex flex-col overflow-visible',
    compact
      ? 'h-[300px] w-[148px] max-[900px]:h-[260px] max-[900px]:w-[128px]'
      : 'h-[380px] w-[186px] max-[900px]:h-[320px] max-[900px]:w-[156px]',
    compact
      ? 'shadow-[0_24px_48px_-10px_rgba(0,0,0,0.32),0_10px_20px_-5px_rgba(0,0,0,0.18)]'
      : 'shadow-[0_32px_64px_-16px_rgba(0,0,0,0.38),0_16px_32px_-8px_rgba(0,0,0,0.2)]',
    shellClassName || defaultTransform,
  )

  /* iPhone 16–like continuous curves */
  const outerR = compact ? 'rounded-[28px]' : 'rounded-[34px]'
  const bezelR = compact ? 'rounded-[25px]' : 'rounded-[31px]'
  const screenR = compact ? 'rounded-[22px]' : 'rounded-[27px]'
  const hasScreenshot = Boolean(screenshot?.src)
  const shotPosition = screenshot?.position === 'center' ? 'object-center' : 'object-top'

  return (
    <div
      className={cn('[perspective:1400px] [transform-style:preserve-3d]', className)}
      aria-hidden={label ? undefined : true}
    >
      {label ? <span className="sr-only">{label}</span> : null}
      <div className={shell}>
        {/* Titanium frame — multi-layer for realism */}
        <div
          className={cn(
            'flex h-full w-full flex-col',
            outerR,
            'bg-gradient-to-b from-[#8a8a8e] via-[#5a5a5e] to-[#38383c]',
            compact ? 'p-[2.5px]' : 'p-[3px]',
            '[box-shadow:inset_0_1.5px_0_rgba(255,255,255,0.35),inset_0_-1.5px_0_rgba(0,0,0,0.5),inset_1px_0_0_rgba(255,255,255,0.08),inset_-1px_0_0_rgba(255,255,255,0.08)]',
          )}
        >
          {/* Side button accents */}
          <div className="pointer-events-none absolute right-[-1.5px] top-[22%] h-[12%] w-[2px] rounded-r-full bg-gradient-to-b from-[#9a9a9e] to-[#6a6a6e]" aria-hidden="true" />
          <div className="pointer-events-none absolute left-[-1.5px] top-[18%] h-[7%] w-[2px] rounded-l-full bg-gradient-to-b from-[#9a9a9e] to-[#6a6a6e]" aria-hidden="true" />
          <div className="pointer-events-none absolute left-[-1.5px] top-[28%] h-[10%] w-[2px] rounded-l-full bg-gradient-to-b from-[#9a9a9e] to-[#6a6a6e]" aria-hidden="true" />
          <div className="pointer-events-none absolute left-[-1.5px] top-[40%] h-[10%] w-[2px] rounded-l-full bg-gradient-to-b from-[#9a9a9e] to-[#6a6a6e]" aria-hidden="true" />

          <div
            className={cn(
              'flex min-h-0 flex-1 flex-col bg-[#010101]',
              bezelR,
              compact ? 'p-[1.5px]' : 'p-[2px]',
              '[box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.05)]',
            )}
          >
            <div
              className={cn(
                'relative min-h-0 flex-1 overflow-hidden bg-kwik-forest-mid',
                screenR,
                '[box-shadow:inset_0_0_20px_rgba(0,0,0,0.12)]',
              )}
            >
              {/* Dynamic Island */}
              {!hasScreenshot ? (
                <div
                  className="pointer-events-none absolute left-1/2 top-[6px] z-10 -translate-x-1/2"
                  aria-hidden="true"
                >
                  <div
                    className={cn(
                      'relative overflow-hidden rounded-full bg-[#0a0a0a]',
                      '[box-shadow:inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.6),0_2px_6px_rgba(0,0,0,0.35)]',
                      compact
                        ? 'h-[10px] min-w-[56px] w-[36%]'
                        : 'h-[13px] min-w-[66px] w-[34%]',
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
              ) : null}

              <div
                className={cn(
                  'relative h-full min-h-0 w-full overflow-hidden',
                  hasScreenshot ? 'pt-0' : compact ? 'pt-[14px]' : 'pt-[16px]',
                )}
              >
                {hasScreenshot ? (
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt ?? ''}
                    className={cn(
                      'pointer-events-none h-full w-full select-none',
                      'object-cover',
                      shotPosition,
                    )}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                ) : (
                  children
                )}
              </div>

              {/* Subtle screen gloss reflection */}
              <div
                className="pointer-events-none absolute inset-0 z-20"
                aria-hidden="true"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.03) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
