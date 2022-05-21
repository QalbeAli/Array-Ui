import Image from 'next/image'
import Grid from '@mui/material/Grid'
import Images from '../../public/images/Images'
import { Container } from '@mui/material'
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

      <div
        className="py-10"
        style={{
          backgroundImage: `url(images/hero.png)`,
          backgroundPosition: 'center',
          minHeight: '600px',
          backgroundRepeat:"no-repeat"
        }}
      >
        <div className=" px-4 block  md:flex items-center justify-center space-x-4">
          <div className="flex justify-between rounded-2xl border-2 border-blue-500 bg-transparent">
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
          <div className=" mt-2  flex justify-between rounded-2xl border-2 border-blue-500 bg-transparent">
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

      <Container>
        <Grid container columnSpacing={4}>
          <Grid xs={12} sm={12} md={6} lg={6}>
            <div className='flex flex-col justify-center items-center'>
              <div className=" ml-[4rem] flex  bg-gradient-to-br from-[#FF3E3D] to-[#466DFD] bg-clip-text pt-[4rem] text-[2rem] font-bold text-transparent ">
                Bootstrap your innovations
              </div>
              <div className="text-xs text-white flex pl-6 pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                accumsan viverra. Tellus est nunc, donec arcu. Neque, nunc
                ultricies justo, mi viverra nulla risus. Arcu malesuada sed
                aenean nullam ac turpis. A aliquam a ultricies luctus et nisi.
                Nisi, gravida pharetra, neque ut malesuada parturient auctor.
                Gravida porta nisi lacus volutpat nunc id porta. Leo nibh donec
                id ullamcorper eget. Vel blandit urna sed volutpat libero.
              </div>
            </div>
          </Grid>

          <Grid items xs={12} sm={12} md={6} lg={6}>
            <div className=' ml-6 flex justify-center items-center'>
              <Image src={Images.video} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
