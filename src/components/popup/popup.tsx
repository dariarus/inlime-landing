import React, {FunctionComponent, useCallback, useEffect} from 'react';
import ReactDOM from 'react-dom';

import popupStyles from './popup.module.css';

import {Overlay} from '../overlay/overlay';

type TPopup = {
  image: string;
  disabledLeft: boolean;
  disabledRight: boolean;
  onClosePopup: () => void;
  passLeft: () => void;
  passRight: () => void;
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
              disabled={props.disabledLeft}
              onClick={props.passLeft}
            />
            <img src={props.image} alt="Просматриваемое фото" className={popupStyles.image}/>
            <button
              className={`${popupStyles['popup-button']} ${popupStyles['popup-button_arrow']} ${popupStyles['popup-button_arrow_right']}`}
              disabled={props.disabledRight}
              onClick={props.passRight}
            />
          </div>
        </>
      ), popupRoot
    )
  } else return null
}