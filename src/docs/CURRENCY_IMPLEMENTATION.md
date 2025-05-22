# Currency Conversion Implementation

This document describes the implementation of multi-currency support in the Alpha Elemental e-commerce application.

## Overview

The application allows users to view prices in multiple currencies:

- USD (United States Dollar)
- AUD (Australian Dollar)
- EUR (Euro)
- CAD (Canadian Dollar)
- GBP (British Pound)

## Implementation Details

### Currency Context

The core of the implementation is the `CurrencyContext` (`src/context/CurrencyContext.tsx`), which provides:

1. Currency selection state management
2. Currency conversion functions
3. Price formatting with appropriate currency symbols

The context uses fixed exchange rates relative to USD, which is the base currency of the application.

### User Interface

A currency selector is implemented in the Navbar component, allowing users to:

- Switch between currencies in the desktop view
- Access currency options in the mobile menu

### Price Conversion

Prices are stored in USD in the database and converted client-side using approximate exchange rates.

### Usage

To use currency conversion in components:

```tsx
import { usePrice } from "@/hooks/usePrice";

function MyComponent() {
  const { getPrice } = usePrice();

  // Convert and format a price from USD
  const formattedPrice = getPrice(29.99);

  return <div>{formattedPrice}</div>;
}
```

## Future Improvements

Potential improvements to the currency system:

1. **Real-time Exchange Rates**: Integrate with a currency API to get up-to-date exchange rates
2. **Server-side Currency Detection**: Detect user's location and set initial currency accordingly
3. **Price Rounding Rules**: Implement specific rounding rules for different currencies
4. **Additional Currencies**: Add support for more currencies as needed
