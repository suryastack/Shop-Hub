import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/features/productSlice";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const { query } = useParams();

  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(
      fetchProducts(query)
    );
  }, [query, dispatch]);

  return (
    <div className="min-h-screen bg-(--c1) px-7 py-10 text-white">
        <Link
      to="/"
      className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-(--c3) px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-purple-500/50 hover:bg-(--c2)"
    >
      <i className="ri-arrow-left-line"></i>
      Back to Home
    </Link>

      <h1 className="text-3xl font-semibold">
        Search results for "{query}"
      </h1>

      {loading && <p className="mt-6">Loading...</p>}

      {error && <p className="mt-6 text-red-400">{error}</p>}

      {!loading && !error && (
        <div className="flex flex-col gap-5">
            <p className="mt-6">
              Products found: {products.length}
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                   <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;