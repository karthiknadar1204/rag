'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";

import React, { useState } from "react";
import uuid4 from "uuid4";

const UploadPdfDialog = ({children}) => {
    const [file,setFile]=useState(null);
    const[loading,setLoading]=useState(false);
    const[fileName,setFileName]=useState("");

    //useMutation hook provides a function to call the mutation.
    const generateUploadUrl=useMutation(api.fileStorage.generateUploadUrl);
    const insertFileEntry=useMutation(api.fileStorage.AddFileEntryToDb);
    const getFileUrl=useMutation(api.fileStorage.getFileUrl);
    const {user}=useUser();

    const onFileSelect=async(event)=>{
        setFile(event.target.files[0]);
    }
    const onUpload=async()=>{
        setLoading(true);

        // Step 1: Get a short-lived upload URL
        const response=await generateUploadUrl();

        // Step 2: POST the file to the URL
        const result = await fetch(response, {
            method: "POST",
            headers: { "Content-Type": file.type },
                body: file,
            });
        const { storageId } = await result.json();
        console.log("Storage Id",storageId);
        const fileId=uuid4();
        const fileUrl=await getFileUrl({storageId:storageId});
        console.log("File Url",fileUrl);
        // Step 3: Save the newly allocated storage id to the database
        const response_file=await insertFileEntry({
            fileId:fileId,
            storageId:storageId,
            fileName:fileName??"untitled file",
            fileUrl:fileUrl,
            createdBy:user?.primaryEmailAddress?.emailAddress,
        });
        console.log(response_file);
        setLoading(false);
    }
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload PDF</DialogTitle>
          <DialogDescription asChild>
            <div>
                <div className="p-3 mt-5 gap-2">
                    <h2>Select a PDF file to upload.</h2>
                    <input type="file" accept="application/pdf" onChange={(event)=>onFileSelect(event)}/>
                </div>
                <div className="mt-2">
                    <label>
                        File Name
                    </label>
                    <Input placeholder="Enter file name" onChange={(event)=>setFileName(event.target.value)}/>
                </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
            <Button onClick={onUpload} disabled={loading}>
                {loading?"Uploading...":"Upload"}
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadPdfDialog;
