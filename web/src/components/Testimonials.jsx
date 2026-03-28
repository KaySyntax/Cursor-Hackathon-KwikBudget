const reviews = [
  {
    name: 'Alex Rivera',
    text:
      'KwikBudget replaced three apps for our team. The live analytics alone paid for itself in week one.',
    initials: 'AR',
  },
  {
    name: 'Jordan Lee',
    text:
      'Transfers are fast and the security controls give our finance lead real peace of mind.',
    initials: 'JL',
  },
  {
    name: 'Sam Okonkwo',
    text:
      'Finally one place for budgets, crypto tracking, and day-to-day banking. Radically simple.',
    initials: 'SO',
  },
]

function Stars() {
  return (
    <div
      className="tracking-[2px] text-kwik-lime"
      aria-label="5 out of 5 stars"
    >
      ★★★★★
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      className="bg-kwik-forest py-16 pb-14 text-kwik-white"
      aria-labelledby="kb-testi-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <h2
          className="mb-8 font-sans text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold tracking-tight text-white"
          id="kb-testi-heading"
        >
          Hear From Our Happy Users.
        </h2>
        <div
          className={[
            'flex gap-5 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory]',
            '[&::-webkit-scrollbar]:h-1.5',
            '[&::-webkit-scrollbar-thumb]:rounded-sm [&::-webkit-scrollbar-thumb]:bg-kwik-lime/35',
            'min-[1024px]:grid min-[1024px]:grid-cols-3 min-[1024px]:overflow-visible',
          ].join(' ')}
        >
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex min-w-0 shrink-0 snap-start flex-col gap-3.5 rounded-[18px] border border-kwik-lime/10 bg-kwik-card-green p-[22px] max-[1023px]:w-[min(320px,85vw)] min-[1024px]:shrink"
            >
              <Stars />
              <p className="m-0 flex-1 font-sans text-[0.95rem] leading-[1.55] text-kwik-muted">
                {r.text}
              </p>
              <div className="flex items-center gap-3">
                <span
                  className="flex size-11 items-center justify-center rounded-full border-2 border-kwik-lime bg-kwik-lime/25 font-sans text-[0.75rem] font-extrabold text-white"
                  aria-hidden="true"
                >
                  {r.initials}
                </span>
                <span className="font-sans text-[0.95rem] font-bold text-white">
                  {r.name}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div
          className="mt-9 flex items-center justify-center pl-6"
          aria-hidden="true"
        >
          {['BK', 'CD', 'EM', 'FR', 'GH', 'IJ', 'KL'].map((x, i) => (
            <span
              key={x}
              className="-ml-3.5 first:ml-0 flex size-10 items-center justify-center rounded-full border-[3px] border-kwik-forest bg-kwik-forest-light font-sans text-[0.6rem] font-extrabold text-kwik-lime shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
              style={{ zIndex: 7 - i }}
            >
              {x}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
