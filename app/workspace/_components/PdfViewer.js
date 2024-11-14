import React from 'react'

const PdfViewer = ({fileUrl}) => {
    if (!fileUrl) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="pdf-viewer">
            <iframe src={`${fileUrl}#toolbar=0`} height="90vh" width="100%" className='h-[90vh]' title="PDF Document"/>
        </div>
    );
};

export default PdfViewer
