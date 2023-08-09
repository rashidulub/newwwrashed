import Banner from '@/Components/home/Banner/Banner'
import Counter from '@/Components/home/Counter/Counter'
import Features from '@/Components/home/Features/Features'
import MoreInfo from '@/Components/home/MoreInfo/MoreInfo'

export default function Home() {
  return (
    <main>
      <Banner />
      <MoreInfo />
      <Counter />
      <Features />
    </main>
  )
}
