'use client';

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import upload from "@/public/upload_area.png"
import Image from 'next/image';
import { HiOutlineSparkles } from 'react-icons/hi';

type ImageFile = {
  file: File;
  previewUrl: string;
};

const page = () => {

  const [images, setImages] = useState<ImageFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [spin, setSpin] = useState(false);


  // Clean up object URLs when component unmounts
  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.previewUrl));
    };
  }, [images]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
      }));

      setImages((prev) => [...prev, ...newImages]);
      e.target.value = ''; // Reset input to allow selecting same files again
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    URL.revokeObjectURL(newImages[index].previewUrl);
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleUpload = async () => {
    if (images.length === 0) return;

    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image.file);
    });

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Upload successful!');
        // Clear all images after successful upload
        images.forEach((image) => URL.revokeObjectURL(image.previewUrl));
        setImages([]);
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading images:', error);
      alert('Upload failed. Please try again.');
    }
  };

  return (
    <div className="relative overflow-hidden px-[0.8rem] md:px-[2rem] py-[2rem] bg-gray-100 rounded-xl">
      <div className="container mx-auto p-4 ">
        <label htmlFor='file' className=' mx-auto'>
          <Image src={upload} alt='Image' className='w-[20rem] h-[18rem] mx-auto cursor-pointer' />
        </label>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          multiple
          className="hidden"
          id='file'
        />
        <div className={`p-[0.6rem] px-[1rem] items-center w-full bg-[#fff]  rounded-2xl mx-auto ${images.length === 0 ? "mt-[12rem]" : "mt-[9rem]"}`}>
          <div className="flex gap-2">
            {images.map((image, index) => {
              setTimeout(() => {
                setSpin(true)
              }, 3000)
              return (
                <div key={index} className="relative group">
                  {spin === false ? (<div className="w-[4rem] h-[4rem] rounded-xl overflow-hidden">
                    <img
                      src={image.previewUrl}
                      alt={`Preview ${index + 1}`}
                      className=" object-cover w-full h-full"
                    />
                    <div className="absolute justify-center items-center w-full h-full top-0 p-[1.2rem] bg-[#00000057] rounded-xl">
                      <div className="w-5 h-5  border-l-3 border-l-[#fff] border-gray-300 border-3 rounded-full animate-spin"></div>
                    </div>
                  </div>) : (
                    <div className="w-[4rem] h-[4rem] rounded-xl overflow-hidden">
                      <img
                        src={image.previewUrl}
                        alt={`Preview ${index + 1}`}
                        className=" object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-gray-800 text-[#fff] rounded-full w-3 h-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[0.8rem]"
                  >
                    x
                  </button>
                  { }
                </div>
              )
            })}
          </div>

          <div className="flex justify-between items-center mt-[0.8rem]">
            <div className="p-[0.5rem] rounded-full bg-gray-50 border border-gray-200">
              <HiOutlineSparkles className="md:text-[1.5rem] star" />
            </div>
            <div className="bg-gradient-to-r from-[#8a40fc] to-[#7800f0] max-w-[16rem] md:max-w-[17rem] rounded-[20rem] border-[2px] border-[#893dff]">
              <button onClick={handleUpload} className="border-animate w-full rounded-[20rem] ">
                <div className="py-[0.3rem] flex gap-2 items-center px-[2rem] rounded-[20rem] text-[0.9rem] text-[#fff] md:text-[1rem]">
                  Generate
                </div>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default page;