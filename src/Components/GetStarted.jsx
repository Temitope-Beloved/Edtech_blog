import React from 'react'
import styles from '../Style'
import { arrowUp } from '../assets'
const GetStarted = () =>  (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary h-[100%] w-[100%] rounded-full`}>
            <div className={`${styles.flexCenter} flex-row `}>
                <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className='text-gradient'>
                        Get
                    </span>
                </p>
                    <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain' />
            </div>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className='text-gradient'>
                        Started
                    </span>
                </p>
        </div>
        </div>
  )


export default GetStarted