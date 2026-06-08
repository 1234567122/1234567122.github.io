type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(15,138,157,0.14),transparent_28rem),radial-gradient(circle_at_85%_10%,rgba(228,182,74,0.16),transparent_24rem)] motion-fade" />
      <div className="section-shell relative py-16 md:py-20">
        <p className="motion-rise text-sm font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
        <h1 className="motion-rise-delay-1 mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        <p className="motion-rise-delay-2 mt-6 max-w-3xl text-lg leading-8 text-muted">{description}</p>
      </div>
    </section>
  );
}
