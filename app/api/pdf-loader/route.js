import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

// const pdfUrl="https://pleasant-gecko-979.convex.cloud/api/storage/6752d390-ce23-49ed-9d8b-b72c428b34e0";

export async function GET(req,res){

    const reqUrl=req.url;
    const {searchParams}=new URL(reqUrl);
    const pdfUrl=searchParams.get('pdfUrl');
    console.log(pdfUrl);

    //1. Load pdf file from url.
    const response=await fetch(pdfUrl);
    const data=await response.blob();
    const pdfLoader=new WebPDFLoader(data);
    const documents=await pdfLoader.load();

    let pdfTextContent='';
    for(const doc of documents){
        pdfTextContent+=doc.pageContent;
    }

    //2. split the text into small chunks.
    const splitter=new RecursiveCharacterTextSplitter({
        chunkSize:10,
        chunkOverlap:1,
    })
    
    const output=await splitter.createDocuments([pdfTextContent]);

    let splitterList = [];
    for (const doc of output) {
        splitterList.push(doc.pageContent);
    }
    
    return NextResponse.json({result:splitterList})

}