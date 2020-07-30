import React from "react";
import Button from '@material-ui/core/Button';
import "./demo.scss";

function Demo() {
  return (
      <div id="demo">
          <Button aria-label="demo" target="_blank" href="http://www.google.com/" variant="contained" color="primary">
           try our demo
          </Button>
  
      </div>
  );
}

export default Demo;
