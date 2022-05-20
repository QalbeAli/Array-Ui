import Image from 'next/image'
import Images from '../../public/images/Images'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function Hero() {
  return (
    <>
      <div className=" bg-gradient-to-br from-[#FF3E3D] to-[#466DFD] bg-clip-text pt-[4rem] text-center text-[3rem] font-extrabold text-transparent ">
        Launchpad & DeFi hub of the Avalanche <br /> Ecosystem.
      </div>
      <div className=" py-2.5 text-center text-sm  text-white  text-transparent ">
        The DeFi hub on AVALANCHE ecosystem to bootstrap innovations, monitor
        and manage digital assets.
      </div>

      <div className='py-10' style={{ backgroundImage: `url(Images/hero)` }}>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex rounded-2xl border-2 border-blue-500 bg-transparent">
            <div className="p-2">
              <Image src={Images.b1} />
            </div>
            <div className="px-3 pt-8">
              <div className="font-bold text-white ">DEX</div>
              <div className="text-blue-500">Go PAD.FI's DEX</div>
            </div>
            <div className="cursor-pointer rounded-full pl-8 pt-8">
              <Image src={Images.arrow} />
            </div>
          </div>
          <div className="flex rounded-2xl border-2 border-blue-500 bg-transparent">
            <div className="p-2">
              <Image src={Images.b1} />
            </div>
            <div className="px-3 pt-8">
              <div className="font-bold text-white ">DEX</div>
              <div className="text-blue-500">Go PAD.FI's DEX</div>
            </div>
            <div className="cursor-pointer rounded-full pl-8 pt-8">
              <Image src={Images.arrow} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
