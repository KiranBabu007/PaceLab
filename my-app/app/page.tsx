import LandingPage from '@/components/LandingPage'
import PosterPage from '@/components/music-fest'
import { InfiniteMovingCardsDemo } from '@/components/testimonials'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

export default function Home() {
  return (
    <main>
      <LandingPage />
      <InfiniteMovingCardsDemo />
      <PosterPage  />
    </main>
  )
}