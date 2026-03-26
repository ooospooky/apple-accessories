'use client';

import { createActorContext } from '@xstate/react';
import { PropsWithChildren, useEffect } from 'react';

import cartMachine, { loadPersistedCart } from '@/xstate/cartMachine';

export const CartContext = createActorContext(cartMachine);

const CartHydrator = () => {
  const actorRef = CartContext.useActorRef();

  useEffect(() => {
    const persisted = loadPersistedCart();
    if (persisted) {
      actorRef.send({ type: 'HYDRATE_CART', payload: persisted });
    }
  }, [actorRef]);

  return null;
};

export const CartProviders = ({ children }: PropsWithChildren) => {
  return (
    <CartContext.Provider>
      <CartHydrator />
      {children}
    </CartContext.Provider>
  );
};
