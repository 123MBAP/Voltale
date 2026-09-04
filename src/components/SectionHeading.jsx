import Reveal from './Reveal';

export default function SectionHeading({ label, title, description, align = 'left' }) {
  const alignment = align === 'right' ? 'items-end text-right' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-2.5 sm:gap-3 ${alignment}`}>
      <Reveal>
        <span className="text-[10px] uppercase tracking-[0.35em] text-graphite/50 font-mono font-semibold">{label}</span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="max-w-3xl font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-snug tracking-[-0.03em] text-ink">
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={160}>
          <p className="max-w-xl text-xs sm:text-sm leading-6 sm:leading-7 text-graphite/75">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}