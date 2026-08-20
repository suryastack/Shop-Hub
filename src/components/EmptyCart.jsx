import { Link } from "react-router-dom"

const EmptyCart = () => {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center rounded-3xl border border-white/10 bg-(--c3) px-5 text-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/5">
            <i className="ri-shopping-cart-2-line text-4xl text-zinc-500"></i>
          </div>

          <h2 className="mt-6 text-2xl font-semibold">
            Your cart is empty
          </h2>

          <p className="mt-2 max-w-md text-zinc-400">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/"
            className="mt-6 rounded-full bg-(--c2) px-6 py-3 font-medium transition-all duration-300 hover:scale-105"
          >
            Start Shopping
          </Link>

        </div>
  )
}

export default EmptyCart
