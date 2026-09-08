import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { listProducts } from "../lib/api";
export function Home() { return [Header(), ...listProducts().map((p) => ProductCard({ name: p.name }))]; }
