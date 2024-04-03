import { Footer } from '../components'
import { ContactSec, Herosection, Workforce } from './components'

const HomePg = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Herosection />
        <Workforce />
        <ContactSec />
        <Footer />
    </div>
  )
}

export default HomePg