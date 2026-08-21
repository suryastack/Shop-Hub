import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [data, setData] = useState('')
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap items-center justify-between gap-y-4">
      <div className="flex gap-2 shrink-0 items-center">
        <i className="ri-shopping-bag-4-fill text-(--c2) text-3xl"></i>
        <h1 className="text-white font-semibold text-2xl">ShopHub</h1>
      </div>
      <div>
        <nav className="hidden lg:flex text-white gap-7 ">
          <a
            className="relative inline-block after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            href="/"
          >
            Home
          </a>
          <a
            className="relative inline-block after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            href="#products"
          >
            Products
          </a>
          <a
            className="relative inline-block after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            href="#categories"
          >
            Categories
          </a>
          <a
            className="relative inline-block after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            href="#about"
          >
            About
          </a>
          <a
            className="relative inline-block after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </div>
      <form 
      onSubmit={(e)=>{
        e.preventDefault()
        if (!data.trim()) return;
        navigate(`/search/${encodeURIComponent(data.trim())}`);
        setData('')
      }}
      className="relative w-full md:w-75 lg:w-87.5 order-last md:order-0">
        <i className="ri-search-line absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl"></i>
        <input
          type='text'
          value={data}
          onChange={(e)=>{
            setData(e.target.value)
          }}
          placeholder="Search products..."
          className="w-full rounded-4xl bg-(--c3) py-3 pl-5 pr-12 text-white outline-none"
        />
      </form>
      <div className="flex shrink-0">
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full hover:bg-(--c2)"
        >
          <i className="ri-menu-line text-2xl text-white"></i>
        </button>
        <Link 
        to='/cart'
        className="flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 hover:bg-(--c2)">
          <i className="ri-shopping-cart-2-line text-2xl text-white"></i>
        </Link>
        <button className="flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 hover:bg-(--c2)">
          <i className="ri-user-line text-2xl text-white"></i>
        </button>
      </div>

      <div
        className={`fixed top-5 right-5 rounded-xl z-50 h-102 w-52 bg-(--c3) p-6 shadow-2xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-[calc(100%+1.25rem)]"
        }`}
      >
        {/* Close button */}

        <div className="flex justify-end">
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-(--c2)"
          >
            <i className="ri-close-line text-2xl text-white"></i>
          </button>
        </div>

        {/* Mobile navigation */}

        <nav className="mt-10 flex flex-col gap-6 text-white text-lg items-end">
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#products" onClick={() => setMenuOpen(false)}>
            Products
          </a>

          <a href="#categories" onClick={() => setMenuOpen(false)}>
            Categories
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
