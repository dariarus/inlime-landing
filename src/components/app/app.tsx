import React, {FunctionComponent, useState} from 'react';

import appStyles from './app.module.css';
import manicure from '../../images/manicure/maniqure-1.jpg';
import pedicure from '../../images/pedicure/pedicure-2.jpg';
import eyebrows from '../../images/eyebrows/eyebrows-5.jpg';
import eyelashes from '../../images/eyelashes/eyelashes-3.jpg';
import interior1 from '../../images/interior/interiоr-1.jpg';
import interior2 from '../../images/interior/interiоr-2.jpg';
import interior3 from '../../images/interior/interiоr-3.jpg';
import promoClientDay from '../../images/promotions/promo_client-day.jpg';
import promoFirstVisit from '../../images/promotions/promo_first-visit.jpg';
import promoBirthday from '../../images/promotions/promo_birthday.jpg';

import {Header} from '../header/header';
import {Hero} from '../hero/hero';
import {MenuItem} from '../menu-item/menu-item';
import {
  // eyebrowsPortfolio,
  eyelashesPortfolio,
  eyelashesService,
  galleryPictures,
  manicurePortfolio,
  manicureService,
  pedicurePortfolio,
  pedicureService
} from '../../utils/constants';
import {Popup} from '../popup/popup';
import {Service} from '../service/service';
import {TImage} from '../../services/types';
import {Promo} from '../promo/promo';
import {Button} from '../button/button';
import {SocialNetworks} from '../social-networks/social-networks';

const App: FunctionComponent = () => {
  const [popupIsOpened, setPopupIsOpened] = useState<boolean>(false);
  const [imageToShow, setImageToShow] = useState<TImage>({src: '', index: 0});

  return (
    <div className={appStyles.content}>
      <Header/>
      <main>
        <Hero/>
        <div className={appStyles.decor}/>
        <menu className={appStyles.menu}>
          <ul className={appStyles.menu__list}>
            <MenuItem service="Маникюр" url={manicure}/>
            <MenuItem service="Педикюр" url={pedicure}/>
            <MenuItem service="Брови" url={eyebrows}/>
            <MenuItem service="Реснички" url={eyelashes}/>
          </ul>
        </menu>
        <section className={appStyles.section}>
          <h2 className={`${appStyles.section__text} ${appStyles.section__text_heading}`}>О нас</h2>
          <div className={appStyles['about-us']}>
            <p className={appStyles.text}>
              <span className={appStyles.text_color_pink}>In</span><span
              className={appStyles.text_color_lime}>Lime</span> - студия красоты, специализирующаяся на одновременном
              оказании услуг маникюра, педикюра и наращивании ресничек.
              Клиенты, которые ценят своё время, выбирают нас,
              чтобы за 2.5 часа сделать сразу 2 или 3 услуги.
            </p>
            <p className={appStyles.text}>Мы дорожим своими клиентами, поэтому
              наши мастера работают исключительно на качественных материалах, а инструменты перед процедурой проходят
              все необходимые
              этапы стерилизации.</p>
            <p className={appStyles.text}>Записывайтесь к нам по телефону, через WhatsApp,
              Instagram, или на сайте DIKIDI!</p>
          </div>
          <div className={appStyles['about-us__interior-photos']}>
            <img src={interior1} alt="Фото интерьера" className={appStyles['about-us__interior-photo']}/>
            <img src={interior2} alt="Фото интерьера" className={appStyles['about-us__interior-photo']}/>
            <img src={interior3} alt="Фото интерьера" className={appStyles['about-us__interior-photo']}/>
          </div>
        </section>
        <section className={appStyles.section}>
          <h2 className={`${appStyles.section__text} ${appStyles.section__text_heading}`}>Галерея</h2>
          <ul className={appStyles.gallery}>
            {
              galleryPictures.map((picture, index) => (
                <li key={index} className={appStyles['gallery-item']} onClick={() => {
                  setPopupIsOpened(true);
                  setImageToShow({src: picture, index: index})
                }}>
                  <img src={picture} alt="Фото для галереи" className={appStyles['gallery-item__picture']}/>
                </li>
              ))
            }
          </ul>
        </section>
        <section className={appStyles.section}>
          <h2 className={`${appStyles.section__text} ${appStyles.section__text_heading}`}>Стоимость услуг</h2>
          <Service serviceHeading="Маникюр" servicesList={manicureService} portfolio={manicurePortfolio}/>
          <Service serviceHeading="Педикюр" servicesList={pedicureService} portfolio={pedicurePortfolio}/>
          {/*<Service serviceHeading="Брови" servicesList={} portfolio={eyebrowsPortfolio}/>*/}
          <Service serviceHeading="Реснички" servicesList={eyelashesService} portfolio={eyelashesPortfolio}/>
        </section>
        <section className={appStyles.section}>
          <h2 className={`${appStyles.section__text} ${appStyles.section__text_heading}`}>Акции</h2>
          <h3 className={`${appStyles.section__text} ${appStyles.section__text_subheading}`}>
            Специальные предложения от студии красоты <span
            className={`${appStyles.text} ${appStyles.text_color_pink}`}>In</span><span
            className={`${appStyles.text} ${appStyles.text_color_lime}`}>Lime</span>
          </h3>
          <div className={appStyles.promotions}>
            <Promo promoImage={promoClientDay} heading="Клиентский день! -20% руб на все услуги"
                   description="Предложение актуально при записи на 20 число каждого месяца"/>
            <Promo promoImage={promoFirstVisit} heading="Знакомство с InLime! -300 руб на любые услуги"
                   description="Предложение актуально для клиентов, которые впервые записываются в студию"/>
            <Promo promoImage={promoBirthday} heading="Подарок в День рождения! -25% на все услуги"
                   description="Предложение актуально всю неделю до Вашего Дня рождения и неделю после"/>
          </div>
          <div className={appStyles['button-wrap']}>
            <Button color="lime"/>
          </div>
        </section>
        <section className={appStyles.section}>
          <h2 className={`${appStyles.section__text} ${appStyles.section__text_heading}`}>Отзывы о студии</h2>
          <div className={appStyles.reviews}>
            <iframe className={appStyles.reviews__iframe}
                    src="https://yandex.ru/maps-reviews-widget/106556456544?comments">
            </iframe>
            <a href="https://yandex.ru/maps/org/inlime/106556456544/" target="_blank"
               className={appStyles.reviews__link}>InLime
              на карте Новороссийска — Яндекс Карты</a>
          </div>
        </section>
        <section className={appStyles.section}>
          <h2 className={`${appStyles.section__text} ${appStyles.section__text_heading}`}>Контакты</h2>
          <div className={appStyles.contacts}>
            <SocialNetworks/>
            <p className={`${appStyles.text} ${appStyles.text_contacts}`}>+7 (964) 893-23-68</p>
            <p className={`${appStyles.text} ${appStyles.text_contacts}`}>г. Новороссийск, 15 мкр-н, ул Южная, 9</p>
            <div className={appStyles.contacts__map}>
              <a href="https://yandex.ru/maps/org/inlime/106556456544/?utm_medium=mapframe&utm_source=maps"
                 className={`${appStyles.contacts__link} ${appStyles.contacts__link_primary}`}>InLime</a>
              <a
              href="https://yandex.ru/maps/970/novorossiysk/category/beauty_salon/184105814/?utm_medium=mapframe&utm_source=maps"
              className={`${appStyles.contacts__link} ${appStyles.contacts__link_secondary}`}></a>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.783220%2C44.675963&mode=search&oid=106556456544&ol=biz&z=15.14"
                className={appStyles.contacts__iframe}
                allowFullScreen={true}></iframe>
            </div>
          </div>
        </section>
        {
          popupIsOpened &&
          <Popup
            imagesList={galleryPictures}
            imageToShow={imageToShow}
            setImageToShow={setImageToShow}
            onClosePopup={() => setPopupIsOpened(false)}
          />
        }
      </main>
    </div>
  )
}

export default App;