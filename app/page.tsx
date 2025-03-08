import type { AppProps } from 'next/app'
import Building from "../components/Building"
import BuildingFar from "../components/BuildingFar"
import Popup from '@/components/Popup';
import Stairs from '@/components/Stairs';

export default function Home() {
  return (
    <main>
      <div className="w-screen">
          <BuildingFar></BuildingFar>
          <Building></Building>
          <Stairs></Stairs>
          <Popup></Popup>
      </div>
    </main>
  );
}



