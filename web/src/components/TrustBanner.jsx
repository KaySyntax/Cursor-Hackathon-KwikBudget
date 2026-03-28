import { useTranslation } from '../context/TranslationContext'

const brands = [
  { name: 'Mailchimp', abbr: 'M' },
  { name: 'Notion', abbr: 'N' },
  { name: 'Intercom', abbr: 'I' },
  { name: 'Dropbox', abbr: 'D' },
  { name: 'Square', abbr: 'S' },
  { name: 'GitHub', abbr: 'G' },
]

export function TrustBanner() {
  const { t } = useTranslation()

  return (
    <section
      className="border-b border-kwik-forest/10 bg-white"
      aria-label="Trusted by growing companies"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-9 pb-10 text-center">
        <p className="mb-7 font-sans text-[1.05rem] font-semibold text-kwik-black">
          {t('Get in on the growth of 5K+ companies')}
        </p>
        <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-10 gap-y-6 p-0">
          {brands.map((b) => (
            <li
              key={b.name}
              className="flex flex-col items-center gap-2 grayscale opacity-[0.78] transition-opacity hover:opacity-100"
            >
              <span
                className="flex size-11 items-center justify-center rounded-xl border-2 border-[#c5c5c5] bg-[#f5f5f5] font-sans text-[1.1rem] font-extrabold text-[#444]"
                aria-hidden="true"
              >
                {b.abbr}
              </span>
              <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-wider text-[#666]">
                {b.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
