import { test } from "node:test";
import assert from "node:assert";
import { listProducts, addProduct } from "../src/lib/api.ts";
test("adds a product", () => { const before = listProducts().length; addProduct("X"); assert.equal(listProducts().length, before + 1); });
