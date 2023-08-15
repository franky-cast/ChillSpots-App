import './mydropzone.css'

import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

export default function MyDropzone( { parentCallback } ) {
   const [acceptedFiles, setAcceptedFiles] = useState([])
   const [ rejectedFiles, setRejectedFiles ] = useState([])

   // when user uses dropzone
   const onDrop = useCallback( (acceptedFile, rejectedFile) => {  

      // accepted files
      if (acceptedFile?.length) {

         // from dropzone
         const { path, name, lastModified, size, type } = acceptedFile[0]

         // upload them to google cloud buckets here ****


         // adding a preview AND GOOGLE CLOUD IMG URL to the acceptedFile
         const accFile = {
         path: path,
         name: name,
         size: size,
         type: type,
         lastModified: lastModified,
         preview: URL.createObjectURL(acceptedFile[0]),
         // sdkUrl: sdkUrl 
         }

         //updating state
         setAcceptedFiles(prevFiles => [
            ...prevFiles,
            accFile
         ])

         // use callback to updated state  (img url) to parent component (so u can add img url to DB)
         // parentCallback(acceptedFiles)
      }


      // rejected files
      if (rejectedFile?.length) {
         const { message, code } = rejectedFile[0].errors[0]
         const { name } = rejectedFile[0].file

         setRejectedFiles(prevFile  => [
            ...prevFile,
            {
               name: name,
               errorMessage: message,
               errorCode: code,
            }
         ])
      }
   
   }, [])


   // X handler for accepted files
   function removeAccepted (name, sdkUrl) {
      // update state
      setAcceptedFiles(files => files.filter(item => item.name != name))

      // delete the img from google cloud buckets

      // use callback to send info (img url) to parent component (so u can delete img url from DB)
      // parentCallback(acceptedFiles)
   }


   // X handler for rejected files
   function removeRejected (name) {
      // update state
      setRejectedFiles(files => files.filter(item => item.name != name))
   }


   // <-- defining rules for dropzone
   const {getRootProps, getInputProps, isDragActive} = useDropzone({
      onDrop,
      accept: {           
      'image/*': []
      },
      maxFiles: 4,
      maxSize: 3000000
   })


   // mapping through accepted files
   const acceptedFilesData = acceptedFiles.map(file => (
      <div key={file.name} className='file-preview-wrap'>
         <img src={`${file.preview}`} alt={`${file.name}`} />
         <button className='remove-img-button' onClick={() => removeAccepted(file.name, file.sdkUrl)}>X</button>
      </div>
   ))


   // mapping through rejected files
   const rejectedFilesData = rejectedFiles.map(file => (
      <li key={file.errorCode}>
         {file.name}
         <button className='remove-img-button' onClick={() => removeRejected(file.name)}>X</button>
      </li>
   ))

   return (
      <div {...getRootProps()} className='container mydropzone'>

         {/* dropzone UI */}
         <input {...getInputProps()} />
         { isDragActive ? <p>Drop the files here ...</p>: <p>Drag 'n' drop some files here, or <span>click</span> to select files</p> }

         {/* accepted files preview */}
         <div className='file-preview-container'>
            {acceptedFiles.length > 0 && <h4 className='acceptedfiles-heading'>Accepted files</h4>}
            {acceptedFilesData}
         </div>

         {/* rejected files preview */}
         <div className='file-preview-container'>
            <ul className='rejected-files-list'>
               {rejectedFiles.length > 0 && <h4 className='rejectedfiles-heading'>Rejected files</h4>}
               {rejectedFilesData}
            </ul>
         </div>
      </div>
    )
}