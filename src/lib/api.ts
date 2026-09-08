export type Product = { id: string; name: string };
const db: Product[] = [{ id: "1", name: "Widget" }];
export function listProducts(): Product[] { return db; }
export function addProduct(name: string): Product { const p = { id: String(db.length + 1), name }; db.push(p); return p; }
