import React, { useEffect, useRef, useState } from "react";

import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/solid'

export default function ImageUpload ({ field, initialValidity, initialValue, profilePic, onInput }) {
    const fileSelectorRef = useRef();
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [validity, setValidity] = useState(false);

    useEffect(() => {
        if (!file) return;
        const fileReader = new FileReader();
        fileReader.onload = () => setPreviewUrl(fileReader.result);
        fileReader.readAsDataURL(file);
    }, [file]);

    const selectFileHandler = () => fileSelectorRef.current.click();

    const cancelFileUpload = () => {
        setFile();
        setPreviewUrl();
    };

    const uploadFileHandler = e => {
        e.preventDefault();
        let selectedFile;
        let fileIsValid = validity
        if (e.target.files && e.target.files.length === 1) {
            selectedFile = e.target.files[0];
            setFile(selectedFile);
            setValidity(true);
            fileIsValid = true
        } else {
            setValidity(false);
            fileIsValid = false
        }
        onInput(field, selectedFile, fileIsValid);
    };
    
    return (
        <div className={"flex flex-wrap justify-center text-center items-center cursor-pointer h-full max-h-[200px] w-1/2 sm:w-8/10 relative z-0 " + (!initialValue && "bg-var-8" )} onClick={previewUrl ? null : selectFileHandler} >
            {previewUrl && <div className="absolute top-0 right-0 w-fit flex flex-row flex-wrap text-var-1 z-20">
                <button className="rounded-tag bg-var-5 px-2 m-1.5" onClick={selectFileHandler} type="button">change</button>
                <button className="rounded-tag bg-var-5 px-2 m-1.5" onClick={cancelFileUpload} type="button">
                    <XMarkIcon className="h-5 w-5" />
                </button>
            </div>}
            <input accept=".jpg,.png,.jpeg" className="w-full h-full " id={field} onChange={uploadFileHandler} ref={fileSelectorRef} style={{display: "none"}} type="file" />

            <div className="w-full h-full flex flex-col justify-center items-center relative">
                {!previewUrl && initialValue && <img className="z-0 h-full w-full object-cover opacity-50 " src={initialValue} alt="profile-photo" />}
                {!previewUrl && <div className="z-1 cursor-pointer opacity-30 w-full px-2 absolute">
                    <p className="w-full h-fit"><PhotoIcon className="z-1 h-5 w-5 inline mx-2" />Select an image</p>
                </div>}
                {previewUrl && <img alt="Preview" className="z-1 h-full object-contain z-10" src={previewUrl} />}
            </div>
        </div>
    )
};