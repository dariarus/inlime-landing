import React, {FunctionComponent, useState} from 'react';

import sliderStyles from './slider.module.css';
import {
  gapBetweenSliderElements,
  manicurePortfolio,
  widthOfOuterSliderWindow,
  widthOfSliderElement
} from '../../utils/constants';

export const Slider: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  // Величина сдвига слайдера = длина 1 элемента + gap
  const translateWidth = widthOfSliderElement + gapBetweenSliderElements;
  // Длина внутреннего окна слайдера, т.е. длина в px всего массива элементов
  const fullElementsArrayWidthInPx = manicurePortfolio.length * translateWidth;
  // Максимально возможный activeIndex, с учетом того, что последний сдвиг происходит без 10px gap-а
  const maxIndex = (fullElementsArrayWidthInPx - widthOfOuterSliderWindow - gapBetweenSliderElements) / translateWidth

  return (
    <div className={sliderStyles.slider}>
      <h4 className={sliderStyles.slider__heading}>Примеры работ</h4>
      <button
        className={`${sliderStyles.slider__button} ${sliderStyles.slider__button_arrow} ${sliderStyles.slider__button_arrow_left}`}
        disabled={activeIndex === 0}
        // Устанавливать activeIndex в 0, если при очередном нажатии он ушел в минус
        onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
      />
      <div className={sliderStyles['slider__outer-window']}>
        <div className={sliderStyles['slider__inner-window']}
             style={{
               transform: `translateX(-${activeIndex * translateWidth}px)`
             }}>
          {
            manicurePortfolio.map((picture, index) => (
              <img key={index} src={picture} alt="Пример работы" className={sliderStyles.slider__picture}/>
            ))
          }
        </div>
      </div>
      <button
        className={`${sliderStyles.slider__button} ${sliderStyles.slider__button_arrow} ${sliderStyles.slider__button_arrow_right}`}
        disabled={activeIndex === maxIndex}
        // Устанавливать activeIndex равным maxIndex, если при очередном нажатии он превысил
        // максимально возможно при заданной длине массива (в px) значение
        onClick={() => setActiveIndex(Math.min(activeIndex + 1, maxIndex))}
      />
    </div>
  )
}
