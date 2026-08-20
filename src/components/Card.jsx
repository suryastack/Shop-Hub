import { useDispatch,useSelector } from "react-redux";
import { addCart, addToast } from "../redux/features/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const isInCart = products.some((savedItem) => savedItem.id === product.id);

  const addToCart = () => {
    if (isInCart) return;

    dispatch(addCart(product));
    dispatch(addToast())
  };
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-(--c3) transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10">
      {/* Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-zinc-900 p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Discount */}
        {product.discountPercentage && (
          <span className="absolute left-3 top-3 rounded-full bg-(--c2) px-3 py-1 text-xs font-semibold text-white">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-(--c2)">
          <i className="ri-heart-line"></i>
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="text-xs font-medium uppercase tracking-wider text-(--c2)">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mt-2 line-clamp-2 min-h-12 text-lg font-semibold text-white">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 text-yellow-400">
            <i className="ri-star-fill text-sm"></i>
            <span className="text-sm font-medium">{product.rating}</span>
          </div>

          <span className="text-xs text-zinc-500">
            ({product.stock} in stock)
          </span>
        </div>

        {/* Price + Cart */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-white">${product.price}</p>
          </div>

          <button
            onClick={addToCart}
            className="cursor-pointer active:scale-95 flex h-11 w-11 items-center justify-center rounded-full bg-(--c2) text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <i className="ri-shopping-cart-2-line text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
