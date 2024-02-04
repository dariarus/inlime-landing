import React, {FunctionComponent, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import sliderStyles from './slider.module.css';
import './swiper.css';
import '../../style.css';

import {Popup} from '../popup/popup';

import {
  gapBetweenSliderElements,
  widthOfOuterSliderWindow,
  widthOfSliderElement
} from '../../utils/constants';

import {TImage} from '../../services/types';

type TSlider = {
  picturesArray: string[];
  windowWidth: number;
}

export const Slider: FunctionComponent<TSlider> = (props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [popupIsOpened, setPopupIsOpened] = useState<boolean>(false);
  const [imageToShow, setImageToShow] = useState<TImage>({src: '', index: 0});

  // Величина сдвига слайдера = длина 1 элемента + gap
  const translateWidth = widthOfSliderElement + gapBetweenSliderElements;
  // Длина внутреннего окна слайдера, т.е. длина в px всего массива элементов
  const fullElementsArrayWidthInPx = props.picturesArray.length * translateWidth;
  // Максимально возможный activeIndex, с учетом того, что последний сдвиг происходит без 10px gap-а
  const maxIndex = (fullElementsArrayWidthInPx - widthOfOuterSliderWindow - gapBetweenSliderElements) / translateWidth

  const handleOnOpenPopup = () => {
    setPopupIsOpened(true);
    document.body.classList.add('bodyOverlay');
  }

  const handleOnClosePopup = () => {
    setPopupIsOpened(false);
    document.body.classList.remove('bodyOverlay');
  }

  return (
    <>
      <div className={sliderStyles.slider}>
        <h4 className={sliderStyles.slider__heading}>Примеры работ</h4>
        {
          props.windowWidth > 830
            ? <>
              <button
                className={`${sliderStyles.slider__button} ${sliderStyles.slider__button_arrow} ${sliderStyles.slider__button_arrow_left}`}
                disabled={activeIndex === 0}
                // Устанавливать activeIndex в 0, если при очередном нажатии он ушел в минус
                onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              />
              <div className={sliderStyles['slider__outer-window']}>
                <ul className={sliderStyles['slider__inner-window']}
                    style={{
                      transform: `translateX(-${activeIndex * translateWidth}px)`
                    }}>
                  {
                    props.picturesArray.map((picture, index) => (
                      <li key={index} className={sliderStyles.slider__item}
                          onClick={() => {
                            handleOnOpenPopup();
                            setImageToShow({src: picture, index: index})
                          }}
                      >
                        <img src={picture} alt="Пример работы" className={sliderStyles.slider__picture}/>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <button
                className={`${sliderStyles.slider__button} ${sliderStyles.slider__button_arrow} ${sliderStyles.slider__button_arrow_right}`}
                disabled={activeIndex === maxIndex}
                // Устанавливать activeIndex равным maxIndex, если при очередном нажатии он превысил
                // максимально возможно при заданной длине массива (в px) значение
                onClick={() => setActiveIndex(Math.min(activeIndex + 1, maxIndex))}
              />
            </>
            : <Swiper
              slidesPerView={1}
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: false,
              }}
              breakpoints={{
                468: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="swiper"
            >
              {
                props.picturesArray.map((picture, index) => (
                  <SwiperSlide key={index} onClick={() => {
                    handleOnOpenPopup();
                    setImageToShow({src: picture, index: index})
                  }}>
                    <img src={picture} alt="Пример работы" className={sliderStyles.slider__picture}/>
                  </SwiperSlide>
                ))
              }
              {/* прослойка для того, чтобы в ней были видны точки пагинации, вынесенные за контейнер свайпера */}
              <div className="pagination-wrapper"/>
            </Swiper>
        }
      </div>
      {
        popupIsOpened &&
        <Popup
          imageToShow={imageToShow}
          imagesList={props.picturesArray}
          setImageToShow={setImageToShow}
          onClosePopup={handleOnClosePopup}
        />
      }
    </>
  )
}
