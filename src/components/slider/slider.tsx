import React, {FunctionComponent, useState} from 'react';

import sliderStyles from './slider.module.css';
import {
  gapBetweenSliderElements,
  widthOfOuterSliderWindow,
  widthOfSliderElement
} from '../../utils/constants';
import {TImage} from '../../services/types';
import {Popup} from '../popup/popup';

type TSlider = {
  picturesArray: string[];
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

  return (
    <>
      <div className={sliderStyles.slider}>
        <h4 className={sliderStyles.slider__heading}>Примеры работ</h4>
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
                      setPopupIsOpened(true);
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
      </div>
      {
        popupIsOpened &&
        <Popup
          imageToShow={imageToShow}
          imagesList={props.picturesArray}
          setImageToShow={setImageToShow}
          onClosePopup={() => setPopupIsOpened(false)}
        />
      }
    </>
  )
}
