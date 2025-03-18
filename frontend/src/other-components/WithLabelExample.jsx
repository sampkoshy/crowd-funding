import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const WithLabelExample = ({ progress }) => {
  return (
    <ProgressBar now={Math.min(100, progress)} label={`${Math.min(100, progress.toFixed(2))}%`} />
  );
};

export default WithLabelExample;
