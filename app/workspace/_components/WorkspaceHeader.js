import { UserButton } from '@clerk/nextjs'
import React from 'react'

const WorkspaceHeader = () => {
  return (
    <div className="p-4 flex justify-between shadow-md">
        RAG
        <UserButton/>
    </div>
  )
}

export default WorkspaceHeader