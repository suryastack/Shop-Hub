import { useSelector } from "react-redux";
import CartHeader from "../components/CartHeader";
import EmptyCart from "../components/EmptyCart";
import CartItem from "../components/CartItem";
import CartSummery from "../components/CartSummery";

const CartPage = () => {
  
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="min-h-screen bg-(--c1) px-5 py-8 text-white sm:px-7 lg:px-12">

      {/* Header */}
      <CartHeader products={products}/>

      {products.length === 0 ? (

        /* Empty Cart */
        <EmptyCart />

      ) : (

        /* Cart Content */
        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">

          {/* Products */}
          <div className="space-y-4">

            {products.map((product) => (

              <CartItem
                key={product.id}
                product={product}
              />

            ))}

          </div>

          {/* Summary */}
          <CartSummery products={products} />

        </div>

      )}

    </div>
  );
};

export default CartPage;
