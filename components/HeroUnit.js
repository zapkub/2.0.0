import DownArrowIcon from '../resources/down-arrow-icon.svg'
import NavigationBar from './NavigationBar'
import ShuffleImagesByPixnodeGiveMeThatDamnTicket from 'react-pixnode-shuffle-images'
import ReactBKKLogo from '../resources/reactbkk.svg'

const images = [
  '/static/hero-bg.jpg',
  'https://cloud.githubusercontent.com/assets/193136/26200621/2d440318-3bf9-11e7-909e-44cab5c9c4a8.jpg',
  'https://cloud.githubusercontent.com/assets/193136/26200625/3074fc04-3bf9-11e7-8764-b5c0adeb5bd2.jpg'
]

export default function HeroUnit () {
  return (
    <header>
      <div className='shuffle-container'>
        <ShuffleImagesByPixnodeGiveMeThatDamnTicket
          maxTimeout={4000}
          minTimeout={3000}
          images={images} />
      </div>
      <div className='bg-overlay' />
      <div className='spacer' />
      <div className='center'>
        <HeroUnitLogo />
      </div>
      <div className='footer'>
        <HeroUnitFooter />
      </div>
      <style jsx>{`
        header {
          text-align: center;
          position: relative;
          /** background: url(static/hero-bg.jpg) center no-repeat; */
          background-size: cover;
        }
        .bg-overlay {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: #222;
          opacity: 0.9;
        }
        .shuffle-container {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }
        .center {
          position: relative;
          padding-top: 160px;
        }
        .footer {
          position: relative;
          padding-bottom: 40px;
          padding-top: 80px;
        }
        @media (max-width: 639px) {
          .center { padding-top: 80px; }
          .footer { padding-top: 40px; }
        }
      `}</style>
    </header>
  )
}

function HeroUnitLogo () {
  return (
    <div>
      <div className='logo'><ReactBKKLogo /></div>
      <h1>React Bangkok</h1>
      <style jsx>{`
        h1 {
          font-size: 70px;
          font-weight: normal;
          margin: 1ex 0 0;
          color: #00D8FF;
        }
        @media (max-width: 639px) {
          h1 { font-size: 50px; }
          .logo :global(svg) { width: 196px; height: 175px; }
        }
        @media (max-width: 399px) {
          h1 { font-size: 44px; }
          .logo :global(svg) { width: 171px; height: 154px; }
        }
      `}</style>
    </div>
  )
}

function HeroUnitFooter () {
  return (
    <div className='footer'>
      <div className='nav'>
        <NavigationBar />
      </div>
      <DownArrowIcon />
      <style jsx>{`
        .nav {
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  )
}
