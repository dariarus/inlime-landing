import {RefObject} from 'react';

export type TImage = {
  src: string,
  index: number
}

export type TCombinedNavRef = {
  servicesTypesRef: RefObject<HTMLDivElement>,
  aboutUsRef: RefObject<HTMLDivElement>,
  priceRef: RefObject<HTMLDivElement>
  promosRef: RefObject<HTMLDivElement>
}