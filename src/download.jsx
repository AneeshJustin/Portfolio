import React from 'react';
import './downloadFile.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function DownloadButton() {
  return (
    <a 
      href="/Resume.pdf" 
      download="Resume.pdf" 
      className="download-btn fixed-top-right"
    >
      Download Resume
      <ArrowDownwardIcon className="scroll-icon" />
    </a>
  );
}

export default DownloadButton;
