import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button'

const Message = ({ msg, variant }) => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
      	{msg}
      </Alert>
    );
  }
  return <Button variant="outline-light" onClick={() => setShow(true)}></Button>;
}


Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;