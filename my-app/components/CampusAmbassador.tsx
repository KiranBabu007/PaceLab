// pages/campus-ambassador.js
import Head from 'next/head';
import Image from 'next/image';

export default function CampusAmbassador() {
  return (
    <div className="min-h-screen bg-[#080210] text-white">
      <Head>
        <title>Campus Ambassador Program - PaceLab</title>
        <meta name="description" content="Join India's most dedicated Campus Ambassador Program at PaceLab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 text-[#8a65ff]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="uppercase tracking-wider text-lg font-medium">Campus Ambassador Program</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Become the Voice of <span className="text-[#8a65ff]">PaceLab</span> on Your Campus
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join India's most dedicated Campus Ambassador Program and kickstart your journey to leadership,
            networking, and professional growth.
          </p>
        </div>

        {/* Prize Pool Section */}
        <div className="bg-[#12091b] rounded-2xl p-8 mb-16 text-center">
          <div className="inline-flex items-center justify-center mb-6 bg-[#1c1028] p-3 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a65ff] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Massive Prize Pool</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">₹5 Lakhs Prize Pool</h2>
          <p className="text-gray-300 font-mono max-w-2xl mx-auto mb-8">
            Compete with ambassadors across India and win from our massive prize pool based on your performance and impact.
          </p>
          <div className="relative z-10">
            <p className="text-xl text-gray-300 mb-6 italic tracking-wide">
              Be a leader, build your network, and boost your resume—all while making an impact on your campus !
            </p>
            <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2 font-sans font-semibold  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Apply Now
  </div>
</button>
          </div>
        </div>

        {/* Benefits Grid */}
        <h2 className="text-3xl font-bold text-center mb-12">Ambassador Perks & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Benefit Card 1 */}
          <div className="bg-[#12091b] rounded-xl p-6 hover:bg-[#1c1028] transition-colors duration-300">
            <div className="w-12 h-12 bg-[#1c1028] rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a65ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Internship Certificate</h3>
            <p className="text-gray-300">
              Earn an official internship certificate that adds significant value to your resume and professional profile.
            </p>
          </div>

          {/* Benefit Card 2 */}
          <div className="bg-[#12091b] rounded-xl p-6 hover:bg-[#1c1028] transition-colors duration-300">
            <div className="w-12 h-12 bg-[#1c1028] rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a65ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Leadership Experience</h3>
            <p className="text-gray-300">
              Develop crucial leadership skills by representing PaceLab and managing campus activities.
            </p>
          </div>

          {/* Benefit Card 3 */}
          <div className="bg-[#12091b] rounded-xl p-6 hover:bg-[#1c1028] transition-colors duration-300">
            <div className="w-12 h-12 bg-[#1c1028] rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a65ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Networking Opportunities</h3>
            <p className="text-gray-300">
              Connect with industry professionals and fellow ambassadors to build a valuable professional network.
            </p>
          </div>

          {/* Benefit Card 4 */}
          <div className="bg-[#12091b] rounded-xl p-6 hover:bg-[#1c1028] transition-colors duration-300">
            <div className="w-12 h-12 bg-[#1c1028] rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a65ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Certificate of Appreciation</h3>
            <p className="text-gray-300">
              Receive formal recognition for your outstanding contributions and achievements as a campus ambassador.
            </p>
          </div>

          {/* Benefit Card 5 */}
          <div className="bg-[#12091b] rounded-xl p-6 hover:bg-[#1c1028] transition-colors duration-300">
            <div className="w-12 h-12 bg-[#1c1028] rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a65ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
            <p className="text-gray-300">
              Enhance your communication, marketing, and organizational skills through real-world experience.
            </p>
          </div>

          {/* Benefit Card 6 */}
          <div className="bg-[#12091b] rounded-xl p-6 hover:bg-[#1c1028] transition-colors duration-300">
            <div className="w-12 h-12 bg-[#1c1028] rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8a65ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Industry Exposure</h3>
            <p className="text-gray-300">
              Gain valuable insights into the corporate world and build professional relationships with industry leaders.
            </p>
          </div>
        </div>



        {/* Partner Companies */}
       

        
      </main>

     
    </div>
  );
}