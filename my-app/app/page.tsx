import CertificationPage from '@/components/certifications'
import JobFair from '@/components/JobFair'
import LandingPage from '@/components/LandingPage'
import PosterPage from '@/components/music-fest'

export default function Home() {
  return (
    <main>
      <LandingPage />
      <CertificationPage />
      <PosterPage />
      <JobFair />
    </main>
  )
}