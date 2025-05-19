'use client';
import { CategoryType, CurrencyType } from '@/lib/types';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

type StoreContextType = {
  categories: CategoryType[];
  currency: CurrencyType;
  loading: boolean;
};

export const StoreContext = createContext<StoreContextType>({
  categories: [],
  currency: {
    currency_id: 0,
    code: 'USD',
    title: 'US Dollar',
    symbol_left: '',
    symbol_right: '$',
    decimal_place: 2,
    value: 1
  },
  loading: true,
}); 

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [currency, setCurrency] = useState<CurrencyType>({
    currency_id: 0,
    code: 'USD',
    title: 'US Dollar',
    symbol_left: '',
    symbol_right: '$',
    decimal_place: 2,
    value: 1
  });
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories', { params: { limit: 8 } });
      const data = await response.data.Data.categories;
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getStoreCurrency = async () => {
    try {
      const { data } = await axios.get('/api/store/currency');
      const currency: CurrencyType = data.Data;
      setCurrency(currency);
    } catch (error) {
      console.log("Error fetching store currency:", error);
    }
  } 

  useEffect(() => {
    const promises = [
      fetchCategories(),
      getStoreCurrency(),
    ];
    Promise.all(promises)
      .then(() => {
        console.log('Store data fetched successfully');
      })
      .catch((error) => {
        console.error('Error fetching store data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {};
  }, []);

  return (
    <StoreContext.Provider value={{ categories, loading, currency }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
