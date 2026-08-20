import { useDispatch } from "react-redux";
import {clearCart} from "../redux/features/cartSlice";

const CartSummery = ({products}) => {
    const dispatch = useDispatch()
    const total = products.reduce(
    (sum, product) => sum + product.price,
    0
    );
  return (
    <div className="h-fit rounded-2xl border border-white/10 bg-(--c3) p-6 lg:sticky lg:top-6">

            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>

            <div className="my-6 h-px bg-white/10"></div>

            <div className="flex justify-between text-zinc-400">
              <span>Items</span>
              <span>{products.length}</span>
            </div>

            <div className="mt-4 flex justify-between text-zinc-400">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="mt-4 flex justify-between text-zinc-400">
              <span>Shipping</span>
              <span className="text-green-400">Free</span>
            </div>

            <div className="my-6 h-px bg-white/10"></div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">
                Total
              </span>

              <span className="text-2xl font-bold text-(--c2)">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              className="mt-6 w-full rounded-full bg-(--c2) py-3 font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 active:scale-95"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => dispatch(clearCart())}
              className="mt-3 w-full rounded-full border border-white/10 py-3 text-sm text-zinc-400 transition-colors hover:border-red-500/30 hover:text-red-400"
            >
              Clear Cart
            </button>

          </div>
  )
}

export default CartSummery
