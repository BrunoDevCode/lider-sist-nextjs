import { useCallback } from 'react';

const FormatPrice = (price: any) => {
  if (typeof price == 'string') price = price.replace(/\D/g, '');

  return (price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price / 100));
};

const FormatPercent = (percent: any) => {
  if (percent !== '') {
    percent = percent.replace(/\D/g, '');
    return (percent = new Intl.NumberFormat('pt-BR', {
      style: 'percent',
      minimumFractionDigits: 2,
    }).format(percent / 10000));
  }
};

const FormatPriceFormBack = (price: any) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export { FormatPrice, FormatPercent, FormatPriceFormBack };
