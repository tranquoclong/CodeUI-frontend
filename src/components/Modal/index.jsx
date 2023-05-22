import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL } from "../../store/constants/modal.const";
export function ModalContainer() {
  const { isOpen, content } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  function close() {
    dispatch({
      type: CLOSE_MODAL,
    });
  }

  return ReactDOM.createPortal(
    isOpen && (
      <div className="react-responsive-modal-root">
        <div
          className="react-responsive-modal-overlay customOverlay"
          style={{
            animation: isOpen
              ? "300ms ease 0s 1 normal none running react-responsive-modal-overlay-in"
              : "300ms ease 0s 1 normal none running react-responsive-modal-overlay-out",
          }}
          onClick={close}
        />
        <div className="react-responsive-modal-container react-responsive-modal-containerCenter">
          <div
            className="react-responsive-modal-modal customModal customModal--options"
            style={{
              animation:
                "300ms ease 0s 1 normal none running react-responsive-modal-modal-in",
            }}
          >
            {content}
            <button
              className="react-responsive-modal-closeButton"
              onClick={close}
            >
              <svg
                width={28}
                height={28}
                viewBox="0 0 36 36"
                data-testid="close-icon"
              >
                <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    ),
    document.getElementById("root_modal")
  );
}
