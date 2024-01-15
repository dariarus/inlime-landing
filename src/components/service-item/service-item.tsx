import React, {FunctionComponent} from 'react';

import serviceItemStyles from './service-item.module.css';

type TServiceItem = {
  serviceName: string;
  servicePrice: string;
}

export const ServiceItem: FunctionComponent<TServiceItem> = (props) => {
  return (
    <div className={serviceItemStyles.item}>
      <p className={serviceItemStyles.text}>{props.serviceName}</p>
      <p className={serviceItemStyles.text}>{props.servicePrice}</p>
    </div>
  )
}