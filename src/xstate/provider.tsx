'use client';

import { createActorContext } from '@xstate/react';
import { PropsWithChildren } from 'react';

import cartMachine from '@/xstate/cartMachine';

export const CartContext = createActorContext(cartMachine);

export const CartProviders = ({ children }: PropsWithChildren) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};
