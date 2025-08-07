import React from 'react';
import './downloadFile.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function DownloadButton() {
  const downloadFile = async () => {
    try {
      const response = await fetch('http://localhost:5000/download', {
        method: 'GET',
      });

      const blob = await response.blob(); // Get file data
      const url = window.URL.createObjectURL(blob); // Create a blob URL

      const link = document.createElement('a');
      link.href = url;
      link.download = 'Resume (1).pdf'; // Name of the downloaded file
      document.body.appendChild(link);
      link.click(); // Trigger download
      link.remove();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div className='download-button'>
    <button onClick={downloadFile}>
      Download Resume 
      <ArrowDownwardIcon className='scroll-icon'/>
    </button>
    </div>
  );
}

export default DownloadButton;
