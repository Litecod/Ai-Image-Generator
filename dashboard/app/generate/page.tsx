

'use client';

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import upload from "@/public/upload_area.png";
import Image from 'next/image';
import { HiOutlineSparkles } from 'react-icons/hi';

type ImageFile = {
  file: File;
  previewUrl: string;
};

const GeneratePage = () => {
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
      setSpin(true);
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
    } finally {
      setSpin(false);
    }
  };

  return (
    <div className="relative overflow-hidden px-[0.8rem] md:px-[2rem] py-[2rem] bg-gray-100 rounded-xl">
      <div className="container mx-auto p-4">
        <label htmlFor='file' className='mx-auto block'>
          <Image
            src={upload}
            alt='Upload area'
            className='w-[17rem] h-[15rem] sm:w-[20rem] sm:h-[18rem] mx-auto cursor-pointer rounded-xl'
          />
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

        <div className={`p-[0.6rem] px-[1rem] items-center w-full bg-white rounded-2xl mx-auto ${images.length === 0 ? "mt-[12rem] sm:mt-[12rem]" : "mt-[9rem] sm:mt-[9rem]"}`}>
          <div className="flex gap-2 flex-wrap">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <div className="w-[4rem] h-[4rem] rounded-xl overflow-hidden">
                  <Image
                    width={64}
                    height={64}
                    src={image.previewUrl}
                    alt={`Preview ${index + 1}`}
                    className="object-cover w-full h-full"
                    onLoadingComplete={() => {
                      setTimeout(() => {
                        setSpin(true);
                      }, 3000);
                    }}
                  />
                  {!spin && (
                    <div className="absolute inset-0 flex justify-center items-center bg-black/30 rounded-xl">
                      <div className="w-5 h-5 border-2 border-l-transparent border-white rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                >
                  x
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-[0.8rem]">
            <div className="p-[0.5rem] rounded-full bg-gray-50 border border-gray-200">
              <HiOutlineSparkles className="md:text-[1.5rem] star" />
            </div>
            <div className="bg-gradient-to-r from-[#8a40fc] to-[#7800f0] max-w-[16rem] md:max-w-[17rem] rounded-[20rem] border-[2px] border-[#893dff] cursor-pointer">
              <button onClick={handleUpload} className="border-animate w-full rounded-[20rem] cursor-pointer">
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

export default GeneratePage;