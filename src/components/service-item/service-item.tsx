import React, {FunctionComponent} from 'react';

import serviceItemStyles from './service-item.module.css';

type TServiceItem = {
  serviceName: string;
  servicePrice: string;
  windowWidth: number;
}

export const ServiceItem: FunctionComponent<TServiceItem> = (props) => {
  return (
    <div className={serviceItemStyles.item}>
      <p className={`${serviceItemStyles.text} ${serviceItemStyles.text_responsive}`}>{props.serviceName}</p>
      <p className={serviceItemStyles.text}>{props.servicePrice}</p>
    </div>
  )
}