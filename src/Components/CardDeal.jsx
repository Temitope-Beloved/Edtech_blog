import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../Style'
import Button from './Button'


const CardDeal = () => 
   (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy step</h2>
        <p className={`${styles.paragraph} max-w-[480px mt-5]`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eius culpa quis totam! Veritatis quia consequatur deleniti voluptatem officia ad id, iste nemo molestias illum, delectus a. Blanditiis, eos tempora.
        </p>

        <Button style="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%] ' />
      </div>
    </section>
  )


export default CardDeal