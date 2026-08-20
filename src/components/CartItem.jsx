import { useDispatch } from "react-redux";
import {
  removeCart,
  removeToast,
} from "../redux/features/cartSlice";

const CartItem = ({product}) => {
    const dispatch = useDispatch()
  return (
    <div
      key={product.id}
      className="group flex flex-col gap-5 rounded-2xl border border-white/10 bg-(--c3) p-4 transition-all duration-300 hover:border-purple-500/30 sm:flex-row sm:items-center"
    >
      {/* Image */}
      <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-zinc-900 p-4 sm:w-32">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs uppercase tracking-wider text-(--c2)">
            {product.category}
          </p>

          <h2 className="mt-1 text-lg font-semibold">{product.title}</h2>

          <div className="mt-2 flex items-center gap-2">
            <i className="ri-star-fill text-sm text-yellow-400"></i>

            <span className="text-sm text-zinc-400">{product.rating}</span>
          </div>
        </div>

        {/* Price + Remove */}
        <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
          <p className="text-xl font-bold">${product.price}</p>

          <button
            onClick={() => {
              dispatch(removeCart(product.id));
              dispatch(removeToast());
            }}
            className="flex items-center gap-2 rounded-full border border-red-500/20 px-4 py-2 text-sm text-red-400 transition-all duration-300 hover:bg-red-500/10"
          >
            <i className="ri-delete-bin-line"></i>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
