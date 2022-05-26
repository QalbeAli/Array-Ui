import Images from '../../public/images/Images'
import Image from 'next/image'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

export default function Product() {
  return (
    <>
      <div className="text-center">
        <div className=" bg-gradient-to-br from-[#FF3E3D] to-[#466DFD] bg-clip-text pt-[4rem] text-center text-[1rem] font-semibold text-transparent ">
          PAD.FI PRODUCTS
        </div>
        <div className="py-3 text-xl font-semibold text-white">
          Everything You Need In One Place
        </div>
        <div className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at at
          libero <br /> tincidunt arcu tellus. Nunc, orci cursus blandit.
        </div>
      </div>

      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4} sx={{
            background:' radial-gradient(50% 50% at 50% 50%, rgba(255, 62, 61, 0.2) 0%, rgba(255, 62, 61, 0) 100%)',
            mixBlendMode: 'screen'
          }}>
            <div className="m-4 rounded-xl bg-[#0d1324]">
              <div className="flex ">
                <div className="p-3">
                  <Image src={Images.kyc} />
                </div>
                <div className="pt-6 text-[2rem] font-semibold text-white">
                  KYC
                </div>
              </div>
              <div className="p-2 pb-4 text-white">
                DEX aggregators are a relatively new type of blockchain-based
                service that allow cryptocurrency traders to benefit from a
                large variety of financial tools
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className="m-4 rounded-xl bg-[#0d1324]">
              <div className="flex ">
                <div className="p-3">
                  <Image src={Images.security} />
                </div>
                <div className="pt-6 text-[2rem] font-semibold text-white">
                  MULTISIG
                </div>
              </div>
              <div className="p-2 pb-4 text-white">
                DEX aggregators are a relatively new type of blockchain-based
                service that allow cryptocurrency traders to benefit from a
                large variety of financial tools
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className="m-4 rounded-xl bg-[#0d1324]">
              <div className="flex ">
                <div className="p-3">
                  <Image src={Images.audit} />
                </div>
                <div className="pt-6 text-[2rem] font-semibold text-white">
                  AUDIT
                </div>
              </div>
              <div className="p-2 pb-4 text-white">
                DEX aggregators are a relatively new type of blockchain-based
                service that allow cryptocurrency traders to benefit from a
                large variety of financial tools
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className=" m-4 rounded-xl bg-[#0d1324]">
                <div className="flex ">
                  <div className="p-3">
                    <Image src={Images.launch} />
                  </div>
                  <div className="pt-6 text-[2rem] font-semibold text-white">
                    FAIR LAUCNH
                  </div>
                </div>
                <div className="p-2 pb-4 text-white">
                  DEX aggregators are a relatively new type of blockchain-based
                  service that allow cryptocurrency traders to benefit from a
                  large variety of financial tools
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className=" m-4 rounded-xl bg-[#0d1324]">
                <div className="flex ">
                  <div className="p-3">
                    <Image src={Images.listing} />
                  </div>
                  <div className="pt-6 text-[2rem] font-semibold text-white">
                    FAIR LAUCNH
                  </div>
                </div>
                <div className="p-2 pb-4 text-white">
                  DEX aggregators are a relatively new type of blockchain-based
                  service that allow cryptocurrency traders to benefit from a
                  large variety of financial tools
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className=" m-4 rounded-xl bg-[#0d1324]">
                <div className="flex ">
                  <div className="p-3">
                    <Image src={Images.vesting} />
                  </div>
                  <div className="pt-6 text-[2rem] font-semibold text-white">
                    FAIR LAUCNH
                  </div>
                </div>
                <div className="p-2 pb-4 text-white">
                  DEX aggregators are a relatively new type of blockchain-based
                  service that allow cryptocurrency traders to benefit from a
                  large variety of financial tools
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>

        <div className="grid grid-flow-col grid-cols-3 space-x-4 py-[2rem] "></div>
    </>
  )
}
