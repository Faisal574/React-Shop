import { create } from 'zustand'
import {cartSlice} from "../store/cartSlice";

export const useBoundStore = create((...a) => ({
    ...cartSlice(...a)
}))