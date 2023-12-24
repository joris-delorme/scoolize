'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Dropzone, { useDropzone } from 'react-dropzone'
import { Cloud, File } from 'lucide-react'
import { toast } from 'sonner'

const UploadDropzone = () => {

    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps,
    } = useDropzone({
        accept: {
            'application/pdf': []
        },
        onDropAccepted: processFiles
    })

    function processFiles(files: File[]) {
        
    }

    return (
        <div
            {...getRootProps()}
            className='border h-64 m-4 border-dashed border-gray-300 rounded-lg'>
            <div className='flex items-center justify-center h-full w-full'>
                <label
                    htmlFor='dropzone-file'
                    className='flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'>
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                        <Cloud className='h-6 w-6 text-zinc-500 mb-2' />
                        <p className='mb-2 text-sm text-zinc-700'>
                            <span className='font-semibold'>
                                Cliquez pour ajouter
                            </span>{' '}
                            ou drag and drop
                        </p>
                        <p className='text-xs text-zinc-500'>
                            PDF (jusqu'à 4MB)
                        </p>
                    </div>

                    {
                        acceptedFiles && <div className="grid gap-2">
                            {acceptedFiles.map((f, key) => (
                                <div key={key} className='max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200'>
                                    <div className='px-3 py-2 h-full grid place-items-center'>
                                        <File className='h-4 w-4 text-blue-500' />
                                    </div>
                                    <div className='px-3 py-2 h-full text-sm truncate'>
                                        {f.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    }

                    <input
                        {...getInputProps()}
                        type='file'
                        id='dropzone-file'
                        className='hidden'
                    />
                </label>
            </div>
        </div>
    )
}

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(v: boolean) => {
                if (!v) {
                    setIsOpen(v)
                }
            }}>
            <DialogTrigger
                onClick={() => setIsOpen(true)}
                asChild>
                <Button>Ajouter un bulletin</Button>
            </DialogTrigger>

            <DialogContent>
                <UploadDropzone />
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton