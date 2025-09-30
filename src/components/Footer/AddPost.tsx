import React from 'react'


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";
import { toast } from 'react-hot-toast';
import {useForm} from 'react-hook-form'
import {
  Sheet,
  SheetContent,

  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DollarSign } from 'lucide-react';
import { useState } from 'react';

export const AddPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [previewImage, setPreviewImage] = useState(null);









const {
        register,
        handleSubmit,
        formState: { errors },         
        reset,
       watch
    } = useForm()


     const imageFile = watch('image');


      React.useEffect(() => {
    if (imageFile && imageFile[0]) {
      const file = imageFile[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  }, [imageFile]);







   const onSubmit = async (data) => {

     setIsLoading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('caption', data.caption);
      formData.append('image', data.image[0]);
      formData.append('poster',"capiyo");
      formData.append("fun","manchester united")
      formData.append("time","time")
     formData.append("country","france")

      const response = await fetch('http://localhost:8000/clash/add_post', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`, // or use your auth method
        },
      });

      if (response.ok) {
        setMessage('Content uploaded successfully!');
        reset();
        setPreviewImage(null);
      } else {
        const errorData = await response.json();
        setMessage(`Upload failed: ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      setMessage(`Upload error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
         
                  
      }
  
  
  
  
   return (
  <div className="sm:w-screen  lg:w-[400pz] h-screen overflow-auto">
  <div className="">
    <div className="bg-[#300669] p-1 rounded-lg">
      <h2 className="text-sm text-white text-center ">Upload Content</h2>
    </div>
    
    <div className="p-3">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="form-group">
          <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-2">
            Caption
          </label>
          <textarea
            id="caption"
            className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-[#300669] focus:border-transparent transition-all duration-200 resize-none bg-pink-50/30"
            rows="4"
            placeholder="Write your caption here..."
            {...register('caption', { 
              required: 'Caption is required',
              minLength: {
                value: 3,
                message: 'Caption must be at least 3 characters'
              }
            })}
          />
          {errors.caption && (
            <span className="error text-rose-500 text-sm font-medium mt-2 block">
              {errors.caption.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
            Image
          </label>
          <div className="relative">
            <input
              id="image"
              type="file"
              accept="image/*"
              className="hidden"
              {...register('image', {
                required: 'Image is required',
                validate: {
                  isImage: (files) => {
                    if (files && files[0]) {
                      const file = files[0];
                      return (
                        file.type.startsWith('image/') ||
                        'Please select a valid image file'
                      );
                    }
                    return true;
                  },
                  fileSize: (files) => {
                    if (files && files[0]) {
                      const file = files[0];
                      return (
                        file.size <= 5 * 1024 * 1024 || // 5MB
                        'File size must be less than 5MB'
                      );
                    }
                    return true;
                  }
                }
              })}
            />
            <label 
              htmlFor="image" 
              className="flex items-center justify-center px-4 py-3 border-2 border-dashed border-[#300669] rounded-xl cursor-pointer hover:border-pink-400 hover:bg-pink-50/50 transition-all duration-200"
            >
              <svg className="w-6 h-6 text-pink-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-pink-600 font-medium">Choose an image</span>
            </label>
          </div>
          {errors.image && (
            <span className="error text-rose-500 text-sm font-medium mt-2 block">
              {errors.image.message}
            </span>
          )}
        </div>

       

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-[#300669] text-white py-3 px-4 rounded-xl font-semibold shadow-lg
           hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 
           disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Uploading...
            </div>
          ) : (
            'upload post'
          )}
        </button>

        {message && (
          <div className={`message p-4 rounded-xl font-medium text-center ${
            message.includes('success') 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-rose-100 text-rose-700 border border-rose-200'
          }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  </div>
</div>)}
                


                          
                    