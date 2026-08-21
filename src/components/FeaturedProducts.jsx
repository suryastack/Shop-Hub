import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      category: "Audio",
      price: "$89",
      icon: "ri-headphone-line",
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Wearables",
      price: "$129",
      icon: "ri-time-line",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      category: "Audio",
      price: "$59",
      icon: "ri-headphone-fill",
    },
    {
      id: 4,
      name: "Smartphone",
      category: "Mobile",
      price: "$499",
      icon: "ri-smartphone-line",
    },
  ];

  return (
    <section className="mt-8 mb-10">

      {/* Heading */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-(--c2)">
            Featured
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Picks worth checking.
          </h2>

          <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-400">
            A few products selected to make your next shopping decision easier.
          </p>
        </div>

        <Link
          to="/search/all"
          className="flex w-fit items-center gap-2 text-sm text-(--c2) transition-colors hover:text-white"
        >
          Explore all
          <i className="ri-arrow-right-line"></i>
        </Link>

      </div>

      {/* Products */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {products.map((product) => (
          <div
            key={product.id}
            className="group rounded-2xl border border-white/10 bg-(--c3) p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30"
          >

            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl text-(--c2)">
              <i className={product.icon}></i>
            </div>

            {/* Info */}
            <p className="mt-6 text-xs uppercase tracking-wider text-zinc-500">
              {product.category}
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">
              {product.name}
            </h3>

            {/* Bottom */}
            <div className="mt-5 flex items-center justify-between">

              <span className="text-xl font-bold text-white">
                {product.price}
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all duration-300 group-hover:bg-(--c2) group-hover:text-white">
                <i className="ri-arrow-right-up-fill"></i>
              </span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default FeaturedProducts;