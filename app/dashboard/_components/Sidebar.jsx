import { Button } from '@/components/ui/button'
import { Layout, Plus, Shield } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

import React from 'react'
import UploadPdfDialog from './UploadPdfDialog'


const Sidebar = () => {
  return (
    <div className="shadow-md h-screen p-7">
        <div className="mt-10">
            <UploadPdfDialog>
                <Button className="w-full">
                    + Upload PDF
                </Button>
            </UploadPdfDialog>
            <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer'>
                <Layout/>
                <h2>Workspace</h2>
            </div>
            <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-100 rounded-lg cursor-pointer'>
                <Shield/>
                <h2>Upgrade</h2>
            </div>
        </div>
        <div className='absolute bottom-24 w-[80%]'>
            <Progress value={33} className="w-full"/>
            <p className='text-sm mt-1'>2 out of 5 pages uploaded</p>
            <p className='text-sm mt-2 text-gray-500'>Upgrade to upload more pages</p>
        </div>
    </div>
  )
}

export default Sidebar