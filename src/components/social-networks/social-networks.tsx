import React, {FunctionComponent} from 'react';

import socialNetworksStyles from './social-networks.module.css';
import instagram from '../../images/instagram-icon.png';
import vkontakte from '../../images/vkontakte-icon.png';

export const SocialNetworks: FunctionComponent = () => {
  return (
    <div className={socialNetworksStyles['social-networks']}>
      <a
        href='https://www.instagram.com/in.lime.nvrsk/'
        target='_blank'
        rel="noreferrer noopener"
        className={socialNetworksStyles['social-networks__link']}
      >
        <img src={instagram} alt="Инстаграм" className={socialNetworksStyles['social-networks__icon']}/>
      </a>
      <a
        href='https://vk.com/inlime_nvrsk'
        target='_blank'
        rel="noreferrer noopener"
        className={socialNetworksStyles['social-networks__link']}>
        <img src={vkontakte} alt="ВКонтакте" className={socialNetworksStyles['social-networks__icon']}/>
      </a>
    </div>
  )
}

