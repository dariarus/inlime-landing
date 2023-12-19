import React, {FunctionComponent} from 'react';

import socialNetworksStyles from './social-networks.module.css';
import instagram from '../../images/instagram-icon.png';
import vkontakte from '../../images/vkontakte-icon.png';

export const SocialNetworks: FunctionComponent = () => {
  return (
    <div className={socialNetworksStyles.wrap}>
      <img src={instagram} alt="Инстаграм" className={socialNetworksStyles.icon}/>
      <img src={vkontakte} alt="ВКонтакте" className={socialNetworksStyles.icon}/>
    </div>
  )
}