'use client'
import React from 'react'
import { useStore } from './HOC/Context/StoreProvider';

function SavingFormat({ price, discount_price, plain }: { price: string, discount_price?: string, plain?: boolean }) {
  const { currency } = useStore();
  const saving = `${currency.symbol_left}${(parseFloat(price) - parseFloat(discount_price || price)).toFixed(currency.decimal_place)}${currency.symbol_right}`;
  
  if (plain) {
    return saving;
  }

  return (
    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mb-4">
      Save {saving}
    </span>
  )
}

export default SavingFormat