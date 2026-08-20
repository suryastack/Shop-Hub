

const MiddleSection = () => {
  return (
    <section className="px-5 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-(--c2)">
            Why ShopHub?
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Everything you want.
            <span className="block text-(--c2)">Nothing you don't.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
            Discover products worth having, carefully selected for quality,
            value, and everyday life.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border border-white/10 bg-(--c3) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50">
            <span className="text-3xl text-(--c2)">01</span>

            <h3 className="mt-10 text-xl font-semibold text-white">
              Quality First
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Products selected with quality and reliability in mind.
            </p>

            <div className="mt-6 h-px w-0 bg-(--c2) transition-all duration-300 group-hover:w-full" />
          </div>

          <div className="group rounded-2xl border border-white/10 bg-(--c3) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50">
            <span className="text-3xl text-(--c2)">02</span>

            <h3 className="mt-10 text-xl font-semibold text-white">
              Better Prices
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Great products without unnecessary prices attached.
            </p>

            <div className="mt-6 h-px w-0 bg-(--c2) transition-all duration-300 group-hover:w-full" />
          </div>

          <div className="group rounded-2xl border border-white/10 bg-(--c3) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50">
            <span className="text-3xl text-(--c2)">03</span>

            <h3 className="mt-10 text-xl font-semibold text-white">
              Fast Delivery
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Simple shopping with quick and reliable delivery.
            </p>

            <div className="mt-6 h-px w-0 bg-(--c2) transition-all duration-300 group-hover:w-full" />
          </div>

          <div className="group rounded-2xl border border-white/10 bg-(--c3) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50">
            <span className="text-3xl text-(--c2)">04</span>

            <h3 className="mt-10 text-xl font-semibold text-white">
              Easy Shopping
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              A clean experience designed to help you find things faster.
            </p>

            <div className="mt-6 h-px w-0 bg-(--c2) transition-all duration-300 group-hover:w-full" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-linear-to-r from-(--c3) to-purple-950/30 p-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-zinc-400">
              Your next favorite product is waiting.
            </p>

            <h3 className="mt-1 text-2xl font-semibold text-white">
              Start exploring.
            </h3>
          </div>

          <a
            href="#products"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-(--c2) px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Explore Products
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
