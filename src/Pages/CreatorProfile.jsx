import React from 'react'
import { cn } from "../utils/cn";
import AnimatedText from "../components/AnimatedDiv";
import { BackgroundGradientDemo } from "../components/BackgroundGradientDemo";

const CreatorProfile = () => {
  return (

    <div className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full"
      )}>

        <div className='justify-center items-center mt-[8rem] text-slate-400 text-8xl'>
            CREATOR
        </div>
            
        <div className="flex items-center mt-[4rem]">

                <div className="w-[20rem] h-[20rem] border-2 bg-white rounded-full mr-[60px] translate-x-[8rem] translate-y-[1rem]">   
                    <div class="flex mt-[9rem] ml-[4rem]">  
                        <input type='file'></input>
                    </div>
                </div>

            

            <div className="px-[10rem] py-[2rem] rounded-md w-[80rem] h-[20rem] mr-0">  {/* Wider and taller box */}
                <AnimatedText>
                        <ol className='mt-[1rem] ml-[2rem] list-decimal text-slate-400'>
                            <li className='mb-2'>Update your information</li>
                            <li className='mb-2'>Update your information</li>
                            <li className='mb-2'>Update your information</li>
                            <li className='mb-2'>Update your information</li>
                            <li className='mb-2'>Update your information</li>
                            <li className='mb-2'>Update your information</li>
                    </ol>
                </AnimatedText>
            </div>

        </div>

    <div className='mt-[50px] flex flex-row'>

        <div className='px-8 py-4 rounded-md w-[25rem] h-[30rem] ml-[3rem] mt-[3rem]'>

            <div className='text-[5px]'>
                <AnimatedText>
                        <ol className='mt-[1rem] list-decimal text-slate-400 px-10'>
                        <li className='mb-2'>Update your information</li>
                        <li className='mb-2'>Update your information</li>
                        <li className='mb-2'>Update your information</li>
                        <li className='mb-2'>Update your information</li>
                    </ol>
                </AnimatedText>
            </div>

        </div>

        <div className="flex flex-wrap translate-x-[10rem] mt-[4rem]">


            <div className='rounded-md w-[17rem] h-[18rem] mb-[40px] flex flex-wrap mr-6'>

                <AnimatedText>
                    <div>
                        <img src='card.jpg' className=' h-[10rem] w-[40rem] relative'></img>
                    </div>

                    <div className='text-[12px] text-center text-slate-400'>
                        Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        gfvfhd fhbvf vbhfbv hbf sbvu bvbf .
                    </div>
                </AnimatedText>

            </div>

            <div className='rounded-md w-[17rem] h-[18rem] mb-[40px] mr-6 flex flex-wrap'>

                <AnimatedText>
                    <div>
                        <img src='card.jpg' className='h-[10rem] w-[30rem] relative'></img>
                    </div>

                    <div className='text-[12px] text-center text-slate-400'>
                        Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        gfvfhd fhbvf vbhfbv hbf sbvu bvbf .
                    </div>
                </AnimatedText>

            </div>

            <div className='rounded-md w-[17rem] h-[18rem] mb-[40px] mr-6 flex flex-wrap'>

                <AnimatedText>
                    <div>
                        <img src='card.jpg' className=' h-[10rem] w-[30rem] relative'></img>
                    </div>

                    <div className='text-[12px] text-center text-slate-400'>
                        Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        gfvfhd fhbvf vbhfbv hbf sbvu bvbf .
                    </div>
                </AnimatedText>

            </div>

            <div className='rounded-md w-[17rem] h-[18rem] mb-[40px] mr-6 flex flex-wrap'>

                <AnimatedText>
                    <div>
                        <img src='card.jpg' className=' h-[10rem] w-[30rem] relative'></img>
                    </div>

                    <div className='text-[12px] text-center text-slate-400'>
                        Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        gfvfhd fhbvf vbhfbv hbf sbvu bvbf .
                    </div>
                </AnimatedText>

            </div>

            

        </div>

    </div>

</div>
    
  )
}

export default CreatorProfile