import {
  siDropbox,
  siGithub,
  siIntercom,
  siMailchimp,
  siNotion,
  siSquare,
} from 'simple-icons'
import { useTranslation } from '../context/TranslationContext'

const brands = [
  { icon: siMailchimp, name: 'Mailchimp' },
  { icon: siNotion, name: 'Notion' },
  { icon: siIntercom, name: 'Intercom' },
  { icon: siDropbox, name: 'Dropbox' },
  { icon: siSquare, name: 'Square' },
  { icon: siGithub, name: 'GitHub' },
]

function BrandLogo({ icon, label }) {
  const fill = `#${icon.hex}`

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-auto max-w-[6.5rem] shrink-0"
      aria-label={label}
    >
      <path d={icon.path} fill={fill} />
    </svg>
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
        <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-12 gap-y-8 p-0">
          {brands.map((b) => (
            <li
              key={b.name}
              className="flex flex-col items-center gap-2 opacity-90 transition-opacity hover:opacity-100"
            >
              <div className="flex h-12 min-w-[7rem] items-center justify-center px-2">
                <BrandLogo icon={b.icon} label={b.name} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
