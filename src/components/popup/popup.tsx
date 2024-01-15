import React, {FunctionComponent, useCallback, useEffect} from 'react';
import ReactDOM from 'react-dom';

import popupStyles from './popup.module.css';

import {Overlay} from '../overlay/overlay';
import {TImage} from '../../services/types';

type TPopup = {
  imagesList: string[];
  imageToShow: TImage;
  setImageToShow: (image: TImage) => void;
  onClosePopup: () => void;
}

export const Popup: FunctionComponent<TPopup> = (props) => {
  const popupRoot = document.getElementById('popup');

  const handleEscClose = useCallback((evt: KeyboardEvent): void => {
    if (evt.key === 'Escape') {
      props.onClosePopup();
    }
  }, [props])

  useEffect(() => {
    document.addEventListener("keydown", handleEscClose)
    return () => {
      document.removeEventListener("keydown", handleEscClose)
    }
  }, [handleEscClose])

  if (popupRoot !== null) {
    return ReactDOM.createPortal(
      (
        <>
          <Overlay onClose={props.onClosePopup}/>
          <div className={popupStyles.popup}>
            <button
              className={`${popupStyles['popup-button']} ${popupStyles['popup-button_cross']}`}
              onClick={props.onClosePopup}
            />
            <button
              className={`${popupStyles['popup-button']} ${popupStyles['popup-button_arrow']} ${popupStyles['popup-button_arrow_left']}`}
              disabled={props.imageToShow.index === 0}
              onClick={() => {
                if (props.imageToShow.index - 1 >= 0) {
                  const previousImageSrc = props.imagesList[props.imageToShow.index - 1]
                  props.setImageToShow({
                    src: previousImageSrc,
                    index: props.imageToShow.index - 1
                  })
                }
              }}
            />
            <img src={props.imageToShow.src} alt="Просматриваемое фото" className={popupStyles.image}/>
            <button
              className={`${popupStyles['popup-button']} ${popupStyles['popup-button_arrow']} ${popupStyles['popup-button_arrow_right']}`}
              disabled={props.imageToShow.index + 1 === props.imagesList.length}
              onClick={() => {
                if (props.imageToShow.index + 1 < props.imagesList.length) {
                  const nextImageSrc = props.imagesList[props.imageToShow.index + 1]
                  props.setImageToShow({
                    src: nextImageSrc,
                    index: props.imageToShow.index + 1
                  })
                }
              }}
            />
          </div>
        </>
      ), popupRoot
    )
  } else return null
}