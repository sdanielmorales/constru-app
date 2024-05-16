import { atom } from "jotai";
import TProduct from "../types/TProduct";

export const usernameAtom = atom<string | null | undefined>(undefined);
export const cartProductsAtom = atom<TProduct[] | null | undefined>(undefined);
export const purchasedProductsAtom = atom<TProduct[] | null | undefined>(
  undefined
);
export const returnedProductsAtom = atom<TProduct[] | null | undefined>(
  undefined
);
