'use client';

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { FiDownload } from "react-icons/fi";
import { HiOutlineSparkles } from 'react-icons/hi';
import { BsImageFill } from 'react-icons/bs';
import { getConvertedImageURLFromBase64 } from '@/lib/image-conversion';
import { downloadImage } from '@/lib/download';
import { useContexts } from '@/context/AuthContext';
import { toast } from "sonner"
import axios from 'axios';


type ImageFile = {
  file: File;
  previewUrl: string;
  cartoonUrl?: string;
  isGenerating?: boolean;
};

const GeneratePage = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isGeneratingAll, setIsGeneratingAll] = useState(false);
  const [cartoon, setCartoon] = useState("")
  const { imageGen, fetchUser, endDate, backendUrl, token, uusername, userprice, userperiod, usercredit, userStartDate, status, isTrial } = useContexts()

  useEffect(() => {
    return () => {
      images.forEach((image) => {
        URL.revokeObjectURL(image.previewUrl);
        if (image.cartoonUrl) {
          URL.revokeObjectURL(image.cartoonUrl);
        }
      });
    };
  }, [images]);

  const CancelSubscriptionMonthEnd = async () => {
    const subscriptionData = {
      plan: "",
      price: 0,
      period: "",
      credits: 0,
      image: 0,
    }

    if (imageGen > 0) {
      try {
        const response = await axios.post(backendUrl + "/api/user/subscription", subscriptionData, { headers: { token } })
        if (response.data.success) {
          console.log("updated")
        } else {
          toast.error(response.data.message)
        }
      } catch (error) {
        toast.error('update error:');
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (endDate === Date()) {
      CancelSubscriptionMonthEnd()
    }
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
        isGenerating: false,
      }));

      setImages((prev) => [...prev, ...newImages]);
      e.target.value = ''; // Reset input to allow selecting same files again
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    URL.revokeObjectURL(newImages[index].previewUrl);
    if (newImages[index].cartoonUrl) {
      URL.revokeObjectURL(newImages[index].cartoonUrl!);
    }
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const generateCartoon = async (index: number) => {
    fetchUser()
    const image = images[index];
    if (!image || image.isGenerating || image.cartoonUrl) return;

    try {
      // Update the image state to show loading
      setImages(prev => prev.map((img, i) =>
        i === index ? { ...img, isGenerating: true } : img
      ));

      // Convert image to base64
      const base64Image = await fileToBase64(image.file);

      // Call the conversion API
      const cartoonUrl = await getConvertedImageURLFromBase64(base64Image, 4096);
      setCartoon(cartoonUrl)

      // Update the image with the cartoon URL
      setImages(prev => prev.map((img, i) =>
        i === index ? { ...img, cartoonUrl, isGenerating: false } : img
      ));
      //toast.success("loading")
    } catch (error) {
      console.error('Error generating cartoon:', error);
      setImages(prev => prev.map((img, i) =>
        i === index ? { ...img, isGenerating: false } : img
      ));
      toast('Failed to generate cartoon. Please try again.');
    }
  };

  const generateAllCartoons = async () => {
    fetchUser()
    if (imageGen > 0) {

      if (images.length === 0 || isGeneratingAll) return;

      setIsGeneratingAll(true);
      try {
        for (let i = 0; i < images.length; i++) {
          if (!images[i].cartoonUrl) {
            await generateCartoon(i);
          }
        }
      } finally {
        setIsGeneratingAll(false);

        const subscriptionData = {
          plan: uusername,
          price: userprice,
          period: userperiod,
          credits: usercredit,
          image: imageGen - 1,
          startDate: userStartDate,
          status: status,
          isTrial: isTrial
        }

        if (imageGen > 0) {
          try {
            const response = await axios.post(backendUrl + "/api/user/subscription", subscriptionData, { headers: { token } })
            if (response.data.success) {
              console.log("updated")
            } else {
              toast.error(response.data.message)
            }
          } catch (error) {
            toast.error('Coundn\'t update');
            console.log(error)
          }
        }

        //add photo
        const photo = cartoon
        try {
          const response = await axios.post(backendUrl + "/api/user/addphoto", photo, { headers: { token } })
          if (response.data.success) {
            console.log("updated")
          } else {
            toast.error(response.data.message)
          }
        } catch (error) {

        }
      }
    } else {
      toast("Purchase Your Subscription to Generate, Your free trials are used")
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const downlo = () => {
    downloadImage(cartoon, "3D.png");
  }

  return (
    <div className={`sm:pt-[5rem] min-h-screen h-screen `}>
      <div className={`relative overflow-hidden px-[0.8rem] md:px-[2rem] py-[4rem] sm:py-0  bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-xl h-full border border-gray-900 ${cartoon !== "" ? "pt-[8rem]" : " pt-[10rem] sm:pt-[1rem]"}`}>
        <div className="container mx-auto sm:p-4  sm:pt-[4rem]">
          {cartoon === "" ? "" : (
            <button
              onClick={downlo}
              className="absolute top-[5rem] sm:top-0 sm:left-1 bg-green-600 text-white rounded-xl p-[0.5rem] flex items-center justify-center"
              title="Download cartoon"
            >
              <FiDownload />
            </button>
          )}
          <label htmlFor='file' className='mx-auto block cursor-pointer'>
            {cartoon === "" ? <div className='p-[2rem] w-full mx-auto rounded-xl max-w-[50rem] flex flex-col gap-[2rem] border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-black'>
              <p className='text-center font-medium sm:text-[1.3rem]'>Upload image from your system</p>
              <div className="w-full h-[13rem] sm:h-[50%] border-[2px] border-dashed bg-gray-900 border-gray-700 rounded-xl  p-[1rem] ">
                <BsImageFill className='mx-auto text-[3rem] font-light text-blue-300 mt-[2rem] mb-[2rem]' />
                <div className="text-center mb-[2rem]">
                  <p className='font-medium mt-4'><span className='underline text-[#8a40fc] '>Click to upload</span> or Drag and Drop</p>
                </div>
              </div>
            </div> : <div>
              <img
                src={cartoon}
                alt={`Cartoon`}
                className=" w-full object-cover h-[25rem] max-w-[30rem]  mx-auto rounded-xl"
              />
            </div>}
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

          <div className={`absolute bottom-[1rem] sm:bottom-[2rem]  p-[0.6rem] px-[1rem] items-center w-[94%] sm:w-[87%] lg:w-[92%] bg-gray-900 border border-gray-700 rounded-2xl mx-auto ${images.length === 0 ? `${cartoon === "" ? "sm:mt-[16rem]" : "sm:mt-[11rem]"}` : `${cartoon === "" ? "sm:mt-[13rem]" : "sm:mt-[8rem]"}`} `}>
            <div className="flex gap-2 flex-wrap">
              {images.map((image, index) => {
                console.log(image.previewUrl)
                return (
                  <div key={index} className="relative group">
                    <div className="w-[4rem] h-[4rem] rounded-xl overflow-hidden">
                      <>
                        <img
                          src={image.previewUrl}
                          alt={`Preview ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                        {image.isGenerating && (
                          <div className="absolute inset-0 flex justify-center items-center bg-black/30 rounded-xl">
                            <div className="w-5 h-5 border-2 border-l-transparent border-white rounded-full animate-spin"></div>
                          </div>
                        )}
                      </>
                    </div>
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                    >
                      x
                    </button>
                    {!image.cartoonUrl && !image.isGenerating && (
                      <button
                        onClick={() => generateCartoon(index)}
                        className="absolute bottom-1 left-1 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                        title="Generate cartoon"
                      >
                        <HiOutlineSparkles className="text-xs" />
                      </button>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="flex justify-between items-center mt-[0.8rem]">
              <div onClick={generateAllCartoons} className="p-[0.5rem] rounded-full bg-gray-50 border border-gray-200 cursor-pointer">
                <HiOutlineSparkles className="md:text-[1.4rem] star" />
              </div>
              <div className="bg-gradient-to-r from-[#8a40fc] to-[#7800f0] max-w-[16rem] md:max-w-[17rem] rounded-[20rem] border-[2px] border-[#893dff] cursor-pointer">
                <button
                  onClick={generateAllCartoons}
                  className="border-animate w-full rounded-[20rem] cursor-pointer"
                  disabled={isGeneratingAll}
                >
                  <div className="py-[0.3rem] flex gap-2 items-center px-[2rem] rounded-[20rem] text-[0.9rem] text-[#fff] md:text-[1rem]">
                    {isGeneratingAll ? 'Generating...' : 'Generate'}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePage;