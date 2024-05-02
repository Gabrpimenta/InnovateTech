import { Action } from '@reduxjs/toolkit';
import React from 'react';
import { RootState } from '.';

export interface StoreContextProps<A extends Action> {
  dispatch: React.Dispatch<A>;
  state: RootState;
}

export const StoreContext = React.createContext<StoreContextProps<any> | null>({
  dispatch: () => {},
  state: {} as RootState,
});
