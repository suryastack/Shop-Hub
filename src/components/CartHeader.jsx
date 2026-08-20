import { Link } from "react-router-dom"

const CartHeader = ({products}) => {
    
  return (
    <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-(--c2)">
            Your Cart
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-2 text-zinc-400">
            {products.length} items in your cart
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-(--c3) px-5 py-2.5 text-sm transition-all duration-300 hover:bg-(--c2)"
        >
          <i className="ri-arrow-left-line"></i>
          Continue Shopping
        </Link>

      </div>
  )
}

export default CartHeader
