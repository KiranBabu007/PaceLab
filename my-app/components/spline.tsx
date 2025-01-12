
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function SplineLap() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/URoJ2YAeymxF5fJr/scene.splinecode" 
      />
    </main>
  );
}
