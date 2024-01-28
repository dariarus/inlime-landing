import React, {FunctionComponent, useEffect, useRef, useState} from 'react';

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
import {Popup} from '../popup/popup';
import {ServiceType} from '../service-type/service-type';
import {Promo} from '../promo/promo';
import {Button} from '../button/button';
import {SocialNetworks} from '../social-networks/social-networks';
import {ToTopButton} from '../to-top-button/to-top-button';

import {
  eyebrowsService,
  eyebrowsPortfolio,
  eyelashesPortfolio,
  eyelashesService,
  galleryPictures,
  manicurePortfolio,
  manicureService,
  pedicurePortfolio,
  pedicureService
} from '../../utils/constants';
import {getWindowWidth} from '../../utils/functions';

import {TCombinedNavRef, TImage} from '../../services/types';

const App: FunctionComponent = () => {
  const [popupIsOpened, setPopupIsOpened] = useState<boolean>(false);
  const [imageToShow, setImageToShow] = useState<TImage>({src: '', index: 0});
  const [isToTopVisible, setIsToTopVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState<{innerWidth: number}>(getWindowWidth());

  // const isMobileDevice = screenWidth.innerWidth > 715;

  useEffect(() => {
    const handleScreenWidth = () => setScreenWidth(getWindowWidth())

    window.addEventListener('resize', handleScreenWidth);
    return () => {
      window.removeEventListener('resize', handleScreenWidth);
    };
  }, [screenWidth.innerWidth])

  const headerRef = useRef<HTMLDivElement>(null);

  const servicesTypesRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const promosRef = useRef<HTMLDivElement>(null);

  const manicureRef = useRef<HTMLDivElement>(null);
  const pedicureRef = useRef<HTMLDivElement>(null);
  const eyebrowsRef = useRef<HTMLDivElement>(null);
  const eyelashesRef = useRef<HTMLDivElement>(null);

  const combinedNavRef: TCombinedNavRef = {
    headerRef: headerRef,
    servicesTypesRef: servicesTypesRef,
    aboutUsRef: aboutUsRef,
    priceRef: priceRef,
    promosRef: promosRef,
  }

  // Обработчик прокрутки страницы
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    // Показывать кнопку "Наверх", если прокрутка больше 200 пикселей
    setIsToTopVisible(scrollTop > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={appStyles.content}>
      <Header refs={combinedNavRef} windowWidth={screenWidth.innerWidth}/>
      <main>
        <Hero windowWidth={screenWidth.innerWidth}/>
        <div className={appStyles.decor}/>
        <menu className={appStyles.menu} ref={servicesTypesRef}>
          <div className={appStyles.menu__list}>
            <MenuItem service="Маникюр" url={manicure} ref={manicureRef} windowWidth={screenWidth.innerWidth}/>
            <MenuItem service="Педикюр" url={pedicure} ref={pedicureRef} windowWidth={screenWidth.innerWidth}/>
            <MenuItem service="Брови" url={eyebrows} ref={eyebrowsRef} windowWidth={screenWidth.innerWidth}/>
            <MenuItem service="Реснички" url={eyelashes} ref={eyelashesRef} windowWidth={screenWidth.innerWidth}/>
          </div>
        </menu>
        <section className={appStyles.section} ref={aboutUsRef}>
          <h2 className={`${appStyles.section__text} ${appStyles.section__text_heading}`}>О нас</h2>
          <div className={appStyles['about-us']}>
            <p className={appStyles.text}>
              <span className={appStyles.text_color_pink}>In</span><span
              className={appStyles.text_color_lime}>Lime</span> - студия красоты, специализирующаяся на одновременном
              оказании услуг маникюра, педикюра, коррекции бровей и наращивании ресничек.
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
        <section className={appStyles.section} ref={priceRef}>
          <h2 className={`${appStyles.section__text} ${appStyles.section__text_heading}`}>Стоимость услуг</h2>
          <ServiceType serviceHeading="Маникюр" servicesList={manicureService} portfolio={manicurePortfolio}
                       ref={manicureRef}/>
          <ServiceType serviceHeading="Педикюр" servicesList={pedicureService} portfolio={pedicurePortfolio}
                       ref={pedicureRef}/>
          <ServiceType serviceHeading="Брови" servicesList={eyebrowsService} portfolio={eyebrowsPortfolio}
                       ref={eyebrowsRef}/>
          <ServiceType serviceHeading="Реснички" servicesList={eyelashesService} portfolio={eyelashesPortfolio}
                       ref={eyelashesRef}/>
        </section>
        <section className={appStyles.section} ref={promosRef}>
          <h2 className={`${appStyles.section__text} ${appStyles.section__text_heading}`}>Акции</h2>
          <h3 className={`${appStyles.section__text} ${appStyles.section__text_subheading}`}>
            Специальные предложения от студии красоты <span
            className={`${appStyles.text} ${appStyles.text_color_pink}`}>In</span><span
            className={`${appStyles.text} ${appStyles.text_color_lime}`}>Lime</span>
          </h3>
          <div className={appStyles.promotions}>
            <Promo promoImage={promoClientDay} heading="Клиентский день! -20% на все услуги"
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
          isToTopVisible &&
          <ToTopButton ref={headerRef}/>
        }
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