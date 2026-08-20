const Footer = () => {
  return (
    <footer className="mt-5 border-t border-white/10 bg-(--c3) px-7 py-12 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <i className="ri-shopping-bag-4-fill text-3xl text-(--c2)"></i>

            <h2 className="text-2xl font-semibold">
              ShopHub
            </h2>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
            Discover products you love and make every shopping experience
            simple, smooth and enjoyable.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:bg-(--c2)"
            >
              <i className="ri-instagram-line"></i>
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:bg-(--c2)"
            >
              <i className="ri-twitter-x-line"></i>
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:bg-(--c2)"
            >
              <i className="ri-github-line"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 font-semibold">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-sm text-zinc-400">
            <a className="transition-colors hover:text-white" href="/">
              Home
            </a>

            <a className="transition-colors hover:text-white" href="#products">
              Products
            </a>

            <a className="transition-colors hover:text-white" href="#categories">
              Categories
            </a>

            <a className="transition-colors hover:text-white" href="#about">
              About
            </a>
          </div>
        </div>

        {/* Customer */}
        <div>
          <h3 className="mb-5 font-semibold">
            Customer Care
          </h3>

          <div className="flex flex-col gap-3 text-sm text-zinc-400">
            <a className="transition-colors hover:text-white" href="#">
              Contact Us
            </a>

            <a className="transition-colors hover:text-white" href="#">
              Shipping & Delivery
            </a>

            <a className="transition-colors hover:text-white" href="#">
              Returns & Refunds
            </a>

            <a className="transition-colors hover:text-white" href="#">
              FAQs
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-5 font-semibold">
            Stay Updated
          </h3>

          <p className="mb-4 text-sm leading-6 text-zinc-400">
            Get updates about new products and special offers.
          </p>

          <div className="flex overflow-hidden rounded-full bg-white/5">
            <input
              type="email"
              placeholder="Your email"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
            />

            <button className="px-5 text-(--c2) transition-colors hover:text-white">
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">

        <p>
          © 2026 ShopHub. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a href="#" className="hover:text-white">
            Privacy
          </a>

          <a href="#" className="hover:text-white">
            Terms
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;