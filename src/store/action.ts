import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const addOffers = createAction<{ offers: Offer[] }>('offers/addOffers');
export const changeCity = createAction<{ city: string }>('offers/changeCity');
export const testAction = createAction('testAction', (value: string) => ({
  payload: {
    value,
    innerField: 'Paris',
    innerField2: 2222
  },
  currentTime: new Date().getTime(),
  meta: 9999,
  error: 77777,
  someField: '1010101'
}));

