"use client";

import { createActorContext } from "@xstate/react";
import cartMachine from "@/xstate/cartMachine";
import { PropsWithChildren } from "react";

export const CartContext = createActorContext(cartMachine);

export const CartProviders = ({ children }: PropsWithChildren) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};
