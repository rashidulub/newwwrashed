import Banner from '@/Components/home/Banner/Banner'
import Counter from '@/Components/home/Counter/Counter'
import MoreInfo from '@/Components/home/MoreInfo/MoreInfo'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-[80%] px-5 mx-auto mt-12">
      <Banner />
      <MoreInfo />
      <Counter />
    </main>
  )
}
