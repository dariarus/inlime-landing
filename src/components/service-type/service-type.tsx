import React, {forwardRef} from 'react';

import serviceStyles from './service-type.module.css';

import {ServiceItem} from '../service-item/service-item';
import {Slider} from '../slider/slider';
import {Button} from '../button/button';

type TService = {
  serviceHeading: string;
  servicesList: Array<{ serviceName: string, servicePrice: string }>;
  portfolio: string[];
}

export const ServiceType = forwardRef<HTMLDivElement, TService>((props, ref) => {
  return (
    <div className={serviceStyles['service-content']} ref={ref}>
      <h3 className={serviceStyles['service-content__heading']}>{props.serviceHeading}</h3>
      {
        props.servicesList.map((service, index) => (
          <ServiceItem key={index} serviceName={service.serviceName} servicePrice={service.servicePrice}/>
        ))
      }
      <div className={serviceStyles['service-content__button-wrap']}>
        <Button color="pink"/>
      </div>
      <Slider picturesArray={props.portfolio}/>
    </div>
  )
})