import { Grid } from '@mui/material'

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

        <Grid container>
          <Grid items xs={12} sm={12} md={4} lg={4}>
            <div className="rounded-xl bg-[#0d1324]">
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
              
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
