import { Box, Grid } from '@mui/material'
import Images from '../../public/images/Images'
import Image from 'next/image'
export default function Roadmap() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="py-6 text-center">
          <div className=" bg-gradient-to-br from-red-700 to-blue-600 bg-clip-text text-xl font-extrabold text-transparent ">
            The Roadmap
          </div>
          <div className="text-3xl font-bold text-white">Our Roadmap</div>
        </div>

        <div>
          <Grid container className="flex ">
            <Grid items xs={12} sm={6} md={3} lg={3}>
              <div className='flex justify-center  items-center flex-col'>
                <div className=" flex w-[10rem] items-center justify-center rounded-xl border-2 border-l-red-500 border-t-pink-500 border-r-indigo-500 border-b-violet-500 bg-[#0d1324] py-3 text-center font-bold text-white ">
                  Q1-2022
                </div>
                <div>
                  <Image src={Images.line} />
                </div>
              </div>
              <div className='ml-5 '>
                <div className=" mb-5 rounded-xl bg-[#0d1324] md:hidden">
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">Start developing</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">Beta Test Platform</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">Protocol Complete</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">Start Marketing</div>
                  </div>
                </div>
              </div>
            </Grid>
            {/* ---------------------------------------------- */}
            <Grid items xs={12} sm={6} md={3} lg={3}>
            <div className='flex justify-center items-center flex-col'>
                <div className=" flex w-[10rem] items-center justify-center rounded-xl border-2 border-l-red-500 border-t-pink-500 border-r-indigo-500 border-b-violet-500 bg-[#0d1324] py-3 text-center font-bold text-white ">
                  Q1-2022
                </div>
                <div>
                  <Image src={Images.line} />
                </div>
              </div>
              <div className='ml-5 '>
                <div className=" mb-5 rounded-xl bg-[#0d1324] md:hidden">
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">Launch Platform</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">SnowPad Public Sale</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">Listing on Dex</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">Airdrop Event</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">launching Staking</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">First Launch IDO</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">Stratgic Partnership</div>
                  </div>
                </div>
              </div>
              {/* ---------------------------- */}

            </Grid>
            <Grid items xs={12} sm={6} md={3} lg={3}>
            <div className='flex justify-center items-center flex-col'>
                <div className=" flex w-[10rem] items-center justify-center rounded-xl border-2 border-l-red-500 border-t-pink-500 border-r-indigo-500 border-b-violet-500 bg-[#0d1324] py-3 text-center font-bold text-white ">
                  Q1-2022
                </div>
                <div>
                  <Image src={Images.line} />
                </div>
              </div>
              <div className='ml-5 '>
                <div className=" mb-5 rounded-xl bg-[#0d1324] md:hidden">
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">Governance</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">Launch NFTs</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">NFT Integration</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">Listing On CEX</div>
                  </div>
                </div>
              </div>

              
            </Grid>
            <Grid items xs={12} sm={6} md={3} lg={3}>
            <div className='flex justify-center items-center flex-col'>
                <div className=" flex w-[10rem] items-center justify-center rounded-xl border-2 border-l-red-500 border-t-pink-500 border-r-indigo-500 border-b-violet-500 bg-[#0d1324] py-3 text-center font-bold text-white ">
                  Q1-2022
                </div>
                <div>
                  <Image src={Images.line} />
                </div>
              </div>
              <div className='ml-5 '>
                <div className=" mb-5 rounded-xl bg-[#0d1324] md:hidden">
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">Launch a New CEX</div>
                  </div>
                  <div className="flex p-4">
                    <div className="pt-1">
                      <Image src={Images.tick} />
                    </div>
                    <div className=" px-3 text-white">LaunchPad Refinement</div>
                  </div>
                  
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="mb-6 hidden lg:flex  ">
          <div className="mb-5 w-[8.8rem] border-b-2 border-pink-500 px-1"></div>
          <div>
            <Image src={Images.rightarrow} width="30" height="30" />
          </div>
          <div className="mb-5 w-[17.6rem] border-b-2 border-pink-500 px-1"></div>
          <div>
            <Image src={Images.rightarrow} width="30" height="30" />
          </div>
          <div className="mb-5 w-[17.6rem] border-b-2 border-pink-500 px-1"></div>
          <div>
            <Image src={Images.rightarrow} width="30" height="30" />
          </div>
          <div className="mb-5 w-[17.7rem] border-b-2 border-pink-500 px-1"></div>
          <div>
            <Image src={Images.rightarrow} width="30" height="30" />
          </div>
          <div className="mb-5 w-[8rem] border-b-2 border-pink-500 px-1"></div>
        </div>


        

        <Grid container className="space-x-4">
          <Grid items xs={12} sm={6} md={2.5} lg={2.5}>
          <div className=" hidden md:block my-4 rounded-xl bg-[#0d1324]">
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Start Developing</div>
              </div>
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Beta Test Platform</div>
              </div>
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Protocol Complete</div>
              </div>
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Start Marketing</div>
              </div>
            </div>
          </Grid>
          {/* --------------- */}
          <Grid items xs={12} sm={6} md={3} lg={3}>
            <div className=" hidden md:block my-4 rounded-xl bg-[#0d1324]">
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Launch Platform</div>
              </div>
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">SnowPad Public Sale</div>
              </div>
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Listing on DEX</div>
              </div>
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Airdrop Event</div>
              </div>

              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Launch Staking</div>
              </div>

              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">First Launcg IDO</div>
              </div>
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Stratagic Paartnership </div>
              </div>
            </div>
          </Grid>
          {/* --------------- */}

          <Grid items xs={12} sm={6} md={3} lg={3}>
            <div className=" hidden md:block my-4 rounded-xl bg-[#0d1324]">
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Governance</div>
              </div>
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Launch NFTs</div>
              </div>
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">NFT Integration</div>
              </div>
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Listing on CEX</div>
              </div>
            </div>
          </Grid>

          <Grid items xs={12} sm={6} md={2.5} lg={2.5}>
            <div className=" hidden md:block my-4 rounded-xl bg-[#0d1324]">
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Launch on a CEX</div>
              </div>
              <div className="flex p-4">
                <div className="pt-1">
                  <Image src={Images.tick} />
                </div>
                <div className=" px-3 text-white">Launchpad Reinfinement</div>
              </div>
              
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
