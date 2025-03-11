import CertificationPage from '@/components/certifications'
import Footer from '@/components/Footer'
import JobFair from '@/components/JobFair'
import LandingPage from '@/components/LandingPage'

export default function Home() {
  return (
    <main>
      <LandingPage />
      <CertificationPage />
      <JobFair />
      <Footer />
    </main>
  )
}