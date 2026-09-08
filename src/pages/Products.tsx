import { ProductCard } from "../components/ProductCard";
import { listProducts, addProduct } from "../lib/api";
export function Products() { addProduct("Gadget"); return listProducts().map((p) => ProductCard({ name: p.name })); }
