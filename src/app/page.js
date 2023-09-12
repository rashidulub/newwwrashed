import Banner from '@/Components/home/Banner/Banner'
import Contact from '@/Components/home/Contact/Contact'
import Counter from '@/Components/home/Counter/Counter'
import Features from '@/Components/home/Features/Features'
import MoreInfo from '@/Components/home/MoreInfo/MoreInfo'
import Slider from '@/Components/home/Slider/Slider'

export default function Home() {
  return (
    <main className='lg:w-3/4 w-11/12 mx-auto'>
      <Banner />
      <MoreInfo />
      <Counter />
      <Features />
      <Slider />
      <Contact />
    </main>
  )
}
