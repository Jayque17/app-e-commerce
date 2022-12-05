export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'PS5',
    price: 799,
    description: 'A video game station design and built by Sony'
  },
  {
    id: 2,
    name: 'Switch',
    price: 399,
    description: 'You could play to Zelda on it.'
  },
  {
    id: 3,
    name: 'Personal computer',
    price: 130,
    description: 'Only for desktop buisness.'
  },
  {
    id: 4,
    name: 'Not Affordable Personal computer',
    price: 4000,
    description: 'You can do everything with that monster.'
  },
  {
    id: 5,
    name: 'An entire day with Maël and Thomas',
    price: 15000,
    description: 'Yeah, it is expensive but it is normal, they are so BEAUtifull'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/