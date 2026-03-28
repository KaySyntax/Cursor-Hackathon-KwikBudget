import { useTranslation } from '../context/TranslationContext'

/**
 * Partner marks use bundled SVGs in /public/logos/.
 * MTN, Flutterwave, Kuda, Paystack: PaystackHQ/nigerialogos (MIT).
 */

const partners = [
  { id: 'mtn', src: '/logos/mtn.svg', alt: 'MTN', maxWidth: '6.5rem' },
  { id: 'kuda', src: '/logos/kuda_bank.svg', alt: 'Kuda', maxWidth: '6rem' },
  { id: 'paystack', src: '/logos/paystack.svg', alt: 'Paystack', maxWidth: '5rem' },
  {
    id: 'flutterwave',
    src: '/logos/flutterwave.svg',
    alt: 'Flutterwave',
    maxWidth: '9rem',
  },
]

function PartnerLogo({ src, alt, maxWidth, heightClass = 'h-10' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${heightClass} w-auto object-contain object-center`}
      style={{ maxWidth }}
      loading="lazy"
      decoding="async"
    />
  )
}

export function TrustBanner() {
  const { t } = useTranslation()

  return (
    <section
      className="border-b border-kwik-forest/10 bg-white"
      aria-label="Who KwikBudget is for"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-9 pb-10 text-center">
        <p className="mx-auto mb-7 max-w-[36rem] font-sans text-[1.05rem] font-semibold leading-snug text-kwik-black">
          {t("For students, young professionals, and anyone on a fixed income who's tired of running out of money before the month ends.")}
        </p>
        <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-10 gap-y-9 p-0 md:gap-x-12">
          {partners.map((p) => (
            <li
              key={p.id}
              className="flex flex-col items-center justify-center opacity-95 transition-opacity hover:opacity-100"
            >
              <div className="flex min-h-[2.75rem] items-center justify-center px-2">
                <PartnerLogo
                  src={p.src}
                  alt={p.alt}
                  maxWidth={p.maxWidth}
                  heightClass={p.heightClass ?? 'h-10'}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
