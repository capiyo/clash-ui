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

export const AddPost = () => {









const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()







   const onSubmit = async (data) => {
          console.log(data)
          // send data to backend API
          /*fetch("http://localhost:8000/clash/add_post", {
              method: "POST",
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(data)
          })
              .then((res) => res.json())
             
              .catch((err) => {
                 // toast.error("An error occured")
                  console.log(err);
              })
                  */
      }
  
  
  
  
   return (
  <div className="w-screen ">
                


                          
                     <form  className="m-1"  onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                          <label className="block text-sm font-medium mb-2">username</label>
                                      <textarea
              id="message"
              
              placeholder="Start typing your message here..."
              className="w-full h-48 px-4 py-4 text-gray-800 resize-none rounded-xl 
                       focus:outline-none bg-transparent placeholder-gray-400
                       leading-relaxed text-lg"
                        required {...register("info")} 
                      
            />

                                      <label className="block text-sm font-medium mb-2">upload photo</label>
                                      <input 
                                      required {...register("image")} 
                                        type="file" 
                                         accept="image/*"
                                        className="w-full p-1  rounded-lg focus:ring-1 focus:ring-primary focus:border-transparent"
                                        placeholder="e. opponent image"
                                      />
                                    </div>
                                   
                                    <div>
                                    
                                    </div>
                                      
                          <Button variant='gradient'className='w-[400px]' >submit</Button>
                       
                            <div className=' text-[#300669]'>discard post</div>
                          
                    
                    
                                    </form>

                    
                      
                  
                  
                  
                         


















                   {/* Specify 'right' for the side property */}
                 
                  {/* Add your content here */}
               
                </div>

                
              
   )}




                  


























{/*} <DrawerContent className='lg:w-[400px]'>
    <DrawerHeader>
      <DrawerTitle>Login to proceed</DrawerTitle>
    </DrawerHeader>
    <form  className="ml-4 mr-4"  onSubmit={handleSubmit(onSubmit)}>
    <div className="">
                  <label className="block text-sm font-medium mb-2">username</label>
                  <input 
                  required {...register("username")} 
                    type="text" 
                    className="w-full p-1 border rounded-lg focus:ring-1 focus:ring-primary focus:border-transparent"
                    placeholder="e.g. tesla"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">password</label>
                  <input 
                  required {...register("password")} 
                    type="password" 
                    className="w-full p-1 border rounded-lg focus:ring-1 focus:ring-primary focus:border-transparent"
                    placeholder="e.g. @ tesla1010"
                  />
                </div>
                <div>
                
                </div>
                   <DrawerFooter>
      <Button >Submit</Button>
      <DrawerClose>
        <Button  type="submit" variant="outline">New User? Register</Button>
      </DrawerClose>
    </DrawerFooter>



                </form>

  </DrawerContent>*/}


          
  
