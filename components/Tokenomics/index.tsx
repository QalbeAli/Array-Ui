import { Container, Grid } from '@mui/material'
import Images from '../../public/images/Images'
import Image from 'next/image'
export default function Tokenomics() {
  return (
    <>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="  bg-gradient-to-br from-red-700 to-blue-600 bg-clip-text text-2xl font-extrabold text-transparent ">
            Tokenomics
          </div>
          <div className="text-3xl font-bold text-white">The Tokenomics</div>
        </div>
        <Grid container className="py-10  ">
          <Grid items xs={12} sm={12} md={4} lg={4} className="pt-4">
            <div className="  rounded-xl bg-[#0d1324]">
              <div className=" py-4 text-center text-2xl font-bold text-white">
                Token Distribution
              </div>

              <div className=" mx-3 rounded-xl border-2 border-blue-300">
                <div className=" flex justify-between  text-white">
                  <div className="px-4 font-bold">Staking Rewards</div>
                  <div className=" px-4 font-bold">30m</div>
                </div>
                <div className="p-3">
                  <div className="h-2.5 w-full rounded-full bg-gray-900 dark:bg-gray-700">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                      style={{ width: '45%' }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* --------------------- */}
              <div className=" mx-3 rounded-xl border-2 border-blue-300">
                <div className=" flex justify-between  text-white">
                  <div className="px-4 font-bold">Farming Rewards</div>
                  <div className=" px-4 font-bold">30m</div>
                </div>
                <div className="p-3">
                  <div className="h-2.5 w-full rounded-full bg-gray-900 dark:bg-gray-700">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                      style={{ width: '45%' }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* ----------------------- */}
              <div className=" mx-3 rounded-xl border-2 border-blue-300">
                <div className=" flex justify-between  text-white">
                  <div className="px-4 font-bold">Development Fund</div>
                  <div className=" px-4 font-bold">15m</div>
                </div>
                <div className="p-3">
                  <div className="h-2.5 w-full rounded-full bg-gray-900 dark:bg-gray-700">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                      style={{ width: '25%' }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* ------------------ */}
              <div className=" mx-3 rounded-xl border-2 border-blue-300">
                <div className=" flex justify-between  text-white">
                  <div className="px-4 font-bold">Token Sale</div>
                  <div className=" px-4 font-bold">10m</div>
                </div>
                <div className="p-3">
                  <div className="h-2.5 w-full rounded-full bg-gray-900 dark:bg-gray-700">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                      style={{ width: '20%' }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* ---------------------- */}
              <div className=" mx-3 rounded-xl border-2 border-blue-300">
                <div className=" flex justify-between  text-white">
                  <div className="px-4 font-bold">Liquiduity</div>
                  <div className=" px-4 font-bold">5m</div>
                </div>
                <div className="p-3">
                  <div className="h-2.5 w-full rounded-full bg-gray-900 dark:bg-gray-700">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                      style={{ width: '15%' }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* ------------------------- */}
              <div className=" mx-3 rounded-xl border-2 border-blue-300">
                <div className=" flex justify-between  text-white">
                  <div className="px-4 font-bold">Advisors</div>
                  <div className=" px-4 font-bold">5m</div>
                </div>
                <div className="p-3">
                  <div className="h-2.5 w-full rounded-full bg-gray-900 dark:bg-gray-700">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                      style={{ width: '10%' }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* ------------------- */}
              <div className=" mx-3 rounded-xl border-2 border-blue-300">
                <div className=" flex justify-between  text-white">
                  <div className="px-4 font-bold">Marketing Funds</div>
                  <div className=" px-4 font-bold">3m</div>
                </div>
                <div className="p-3">
                  <div className="h-2.5 w-full rounded-full bg-gray-900 dark:bg-gray-700">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                      style={{ width: '7%' }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* ---------------- */}
              <div className=" mx-3 rounded-xl border-2 border-blue-300">
                <div className=" flex justify-between  text-white">
                  <div className="px-4 font-bold">Community Rewards</div>
                  <div className=" px-4 font-bold">2m</div>
                </div>
                <div className="p-3">
                  <div className="h-2.5 w-full rounded-full bg-gray-900 dark:bg-gray-700">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                      style={{ width: '5%' }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* ----------------- */}
              <div className="pb-2">
                <div className=" mx-4 my-4 mb-4 flex items-center justify-center rounded-md bg-red-500 bg-gradient-to-r from-[#7d3e3d] to-[#4a61b5] py-2">
                  <div>
                    <Image src={Images.king} alt="image" />
                  </div>
                  <div className="px-2 pb-1 text-white"> Total Tokens</div>
                  <div className="text-lg font-bold text-white">100M</div>
                </div>
              </div>
            </div>
          </Grid>

          {/* --------------------------------------------------------------------- */}

          <Grid items xs={12} md={8}>
            <Container>
              <div className=" mx-4 my-4 rounded-lg bg-[#0d1324]">
                <div className="p-3 text-center text-3xl font-bold text-white">
                  Vesting Schedule
                </div>
                <div className=" mx-5 flex justify-around rounded-md bg-gradient-to-r from-[#7d3e3d] to-[#4a61b5] py-3 text-white">
                  <div>Initials Unlocks</div>
                  <div>Vesting Schedules</div>
                </div>

                <Container>
                  <div className="my-3 flex justify-around rounded-xl border-2 py-2">
                    <div className="bg-[#1f2b4d] bg-gradient-to-br from-red-700 to-blue-600 bg-clip-text pt-2 text-xl font-semibold text-transparent">
                      Team Adisvors
                    </div>
                    <div className=" flex justify-center items-center  pt-3 text-white">0%</div>
                    <div className="px-10 text-white">
                      12 months lockup, <br /> next 30 months subsequent linear
                      vesting
                    </div>
                  </div>

                  <div className="my-3 flex justify-around rounded-xl border-2 py-2">
                    <div className="text-start bg-[#1f2b4d] bg-gradient-to-br from-red-700 to-blue-600 bg-clip-text pt-2 text-xl font-semibold text-transparent">
                      Treasury
                    </div>
                    <div className=" flex justify-center items-center pt-3 text-white">5%</div>
                    <div className="px-10 text-white">
                      6 months cliff & subsequent, 36 months <br /> linear
                      vesting
                    </div>
                  </div>

                  <div className="my-3 flex justify-around rounded-xl border-2 py-2">
                    <div className="text-start bg-[#1f2b4d] bg-gradient-to-br from-red-700 to-blue-600 bg-clip-text pt-2 text-xl font-semibold text-transparent">
                      Private Sale
                    </div>
                    <div className=" flex justify-center items-center px-10 pt-3 text-white">10%</div>
                    <div className="px-10 text-white">
                      3 months lockup, <br /> next 30 months subsequent linear
                      vesting
                    </div>
                  </div>

                  <div className="my-3 flex justify-around rounded-xl border-2 py-2">
                    <div className="text-start bg-[#1f2b4d] bg-gradient-to-br from-red-700 to-blue-600 bg-clip-text pt-2 text-xl font-semibold text-transparent">
                      Public Sale
                    </div>
                    <div className="flex items-center justify-center px-10 pt-3 text-white">
                      10%
                    </div>
                    <div className="px-10 text-white ">
                      Monthly vesting for 12 months
                    </div>
                  </div>

                  <div className="my-3 flex justify-around rounded-xl border-2 py-2">
                    <div className="text-start bg-[#1f2b4d] bg-gradient-to-br from-red-700 to-blue-600 bg-clip-text pt-2 text-xl font-semibold text-transparent">
                      Dex Liquiditiy
                    </div>
                    <div className="px-10 pt-3 text-white">50%</div>
                    <div className="px-10 text-white">
                      6 months <br /> cliff & subsequent, 6 months linear
                      vesting
                    </div>
                  </div>

                  <div className="my-3 flex justify-around rounded-xl border-2 py-2">
                    <div className="text-start bg-[#1f2b4d] bg-gradient-to-br from-red-700 to-blue-600 bg-clip-text pt-2 text-xl font-semibold text-transparent">
                      Dex Liquiditiy
                    </div>
                    <div className="px-10 pt-3 text-white">50%</div>
                    <div className="px-10 text-white">
                      The unlock is <br /> discretionary & Contigent upon a{' '}
                      <br /> number of factors that the team <br /> has
                      identified. <br /> Any incentive unlocks will be annouced.
                    </div>
                  </div>
                </Container>
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
