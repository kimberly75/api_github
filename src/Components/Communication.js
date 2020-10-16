import React, { useEffect, useState } from "react"
import { Creators as communicationActions } from "./../Store/Reducers/communication";
import { Toast } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"

function Communication() {
  const {status, description, type} = useSelector((state) => state.communication);
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    console.warn('status', status);
    status ? setShow(status) : setShow(false);
  }, [status]);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: "relative"
      }}
    >
      <Toast
        show={show}
        onClose={() => {
          setShow(false)
          dispatch(communicationActions.removeCommunication())
        }}
        delay={3000}
        autohide
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          background: type ? 'rgba(159, 223, 159, 0.3)' : 'rgba(255, 128, 128, 0.3)'
        }}
      >
        <Toast.Body>{description}</Toast.Body>
      </Toast>
    </div>
  );
}

export default Communication;
