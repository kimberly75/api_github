import React from "react";
import PropTypes from 'prop-types';
import {
    InputGroup, FormControl, Button
  } from 'react-bootstrap'

export function Input({functionRepos, functionStarred, changeUser}) {
  return (
    <InputGroup style={{ maxWidth: '40%' }}>
      <FormControl
        placeholder="username"
        aria-label="username"
        onChange={changeUser}
      />
      <InputGroup.Append>
        <Button variant="primary" style={{marginRight: '2px'}} onClick={functionRepos}>Repos</Button>
        <Button variant="primary" onClick={functionStarred}>Starred</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

Input.propTypes = {
  functionRepos: PropTypes.func.isRequired,
  functionStarred: PropTypes.func.isRequired,
  changeUser: PropTypes.func.isRequired
};