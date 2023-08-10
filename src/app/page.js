import Banner from '@/Components/home/Banner/Banner'
import Counter from '@/Components/home/Counter/Counter'
import Features from '@/Components/home/Features/Features'
import MoreInfo from '@/Components/home/MoreInfo/MoreInfo'
import Slider from '@/Components/home/Slider/Slider'

export default function Home() {
  return (
    <main>
      <Banner />
      <MoreInfo />
      <Counter />
      <Features />
      <Slider></Slider>
    </main>
  )
}
