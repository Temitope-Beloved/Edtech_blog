import React from 'react'
import { clients } from '../constants'
import styles from '../Style'
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) =>(
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="logo" className='w-[100px] sm:w-[192px] object-contain'  />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients