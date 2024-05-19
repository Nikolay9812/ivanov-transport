import React from 'react'
import Banner from './components/Banner'
import News from './components/News'
import OurService from './components/OurService'
import Processing from './components/Processing'
import Service from './components/Service'
import ServiceAbout from './components/ServiceAbout'

export default function Home() {
  return (
      <>
          <Banner />
          <News />
          <OurService />
          <Service />
          <Processing />
          <ServiceAbout/>
      </>
  )
}
