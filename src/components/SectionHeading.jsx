import Reveal from './Reveal';

export default function SectionHeading({ label, title, description, align = 'left' }) {
  const alignment = align === 'right' ? 'items-end text-right' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <Reveal>
        <span className="text-[10px] uppercase tracking-[0.42em] text-graphite/55">{label}</span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="max-w-3xl font-display text-3xl leading-[0.92] tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={160}>
          <p className="max-w-xl text-sm leading-7 text-graphite/75 sm:text-[15px]">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}