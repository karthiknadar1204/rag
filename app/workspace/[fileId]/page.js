"use client";
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader';
import PDFViewer from '../_components/PDFViewer';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import PdfViewer from '../_components/PDFViewer';
import TextEditor from '../_components/TextEditor';

const Page = () => {
    const params = useParams();
    const fileId = params.fileId;
    
    const fileInfo = useQuery(api.fileStorage.GetFileRecord, {
        fileId: fileId
    });

    useEffect(() => {
        console.log(fileInfo?.fileUrl);
    }, [fileInfo])

    return (
        <div>
            <WorkspaceHeader/>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <TextEditor/>
                </div>
                <div>
                    <PdfViewer fileUrl={fileInfo?.fileUrl} />
                </div>
            </div>
        </div>
    )
}

export default Page;