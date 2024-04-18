import { cartHandler } from "./cart";
import { productsHandler } from "./product";

export const handlers = [...productsHandler, ...cartHandler];
