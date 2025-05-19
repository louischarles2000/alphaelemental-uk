'use client'
import React from 'react'
import { useStore } from './HOC/Context/StoreProvider';

function PriceFormat({ amount }: { amount: string }) {
  const { currency } = useStore();

  return (
    <>
    {currency.symbol_left}{parseFloat(amount).toFixed(currency.decimal_place)}{currency.symbol_right}
    </>
  )
}

export default PriceFormat