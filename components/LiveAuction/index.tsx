import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Images from '../../public/images/Images'
import TimelapseIcon from '@mui/icons-material/Timelapse'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PieChartIcon from '@mui/icons-material/PieChart';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
export default function LiveAuction() {
  return (
    <>
      <div className="py-10">
        <Container>
          <div className="py-6 text-center">
            <div className=" bg-gradient-to-br from-red-700 to-blue-600 bg-clip-text text-xl font-extrabold text-transparent ">
              Ongoing Sale
            </div>
            <div className="text-3xl font-bold text-white">Live Auction</div>
          </div>

          <div className="container mx-auto px-4">
            <Box
              sx={{
                backgroundColor: 'secondary.main',
                borderRadius: '10px',
                border: '1px solid silver',
              }}
            >
              <Box display="flex">
                <Grid container>
                  <Grid item sm={12} md={4}>
                    <Box>
                      <Image src={Images.auction}  />
                    </Box>
                  </Grid>
                  <Grid sm={12} md={8}>
                  <Container>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    borderBottom="1px solid #466DFD"
                  >
                    <div className="flex p-4">
                      <Image src={Images.nft} alt="" />
                      <div>
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          color="white"
                          className="pl-3"
                        >
                          NFT Digital Art
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          className="pl-3 text-blue-100"
                        >
                          1 SLIME = 0.019 AVAX
                        </Typography>
                      </div>
                    </div>
                    <div className="">
                      <Box
                        sx={{
                          borderRadius: '16px',
                          border: '2px solid #FF5E5E',
                          color: 'common.orange',
                          background: 'transparent',
                        }}
                        className=" mt-[2rem]"
                      >
                        <Box className="flex px-3 pb-1">
                          <Box className="px-2">
                            <TimelapseIcon />
                          </Box>
                          <Box className="pt-1">
                            <Typography variant="subtitle2">
                              Sold Out
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </div>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    className="py-4"
                  >
                    <Box>
                      <Typography variant="subtitle1" color="common.blue">
                        Total Raised
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" color="common.blue">
                        Time Left
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="common.Blue"
                      >
                        $1,232,300 / $1,232,300
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        color="common.white"
                        fontWeight="bold"
                      >
                        <AccessTimeIcon className=" mx-2" />
                        3h, 30Mins
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: 'common.cardbg2',
                      border: '1px solid #466DFD',
                    }}
                    className="mt-4 mb-2 rounded-lg"
                  >
                    <Container>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        className="py-2"
                      >
                        <Box>
                          <Typography variant="h6" color="common.blue">
                            Curent Sale
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            color="common.Blue"
                          >
                            72%
                          </Typography>
                        </Box>
                      </Box>
                      <div className="pb-3">
                        <div className="h-4 w-full rounded-full bg-gray-900 dark:bg-gray-700">
                          <div
                            className="h-4 rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                            style={{ width: '75%' }}
                          ></div>
                        </div>
                      </div>
                     
                    </Container>
                    <Box borderTop="1px solid #466DFD">
                        <Grid container>
                          <Grid item sm={4} md={4}>
                          <Box borderRight="1px solid #466DFD" className="px-4 py-2">
                            <Typography variant="h6" color="common.blue" >
                              Participants
                            </Typography>
                            <Typography color="white">
                              1235
                            </Typography>
                          </Box>
                          </Grid>
                          <Grid item sm={4} md={4}>
                          <Box borderRight="1px solid #466DFD" className="px-4 py-2">
                            <Typography variant="h6" color="common.blue" >
                              Start Date
                            </Typography>
                            <Typography color="white">
                            05.03.2022
                            </Typography>
                          </Box>
                          </Grid>
                          <Grid item sm={4} md={4}>
                          <Box borderRight="1px solid #466DFD" className="px-4 py-2">
                            <Typography variant="h6" color="common.blue" >
                              Token Price
                            </Typography>
                            <Typography color="white">
                            $0.001
                            </Typography>
                          </Box>
                          </Grid>
                        </Grid>
                      </Box>
                  </Box>

                  <Box className="">
                  <Grid container>
                          <Grid item sm={4} md={4}>
                          <Box >
                            <Typography variant="subtitle1" color="common.blue" >
                            <PieChartIcon className="pr-1" />
                              Tokens Sold
                            </Typography>
                            <Typography color="common.Blue" fontWeight="bold">
                              100
                            </Typography>
                          </Box>
                          </Grid>
                          <Grid item sm={4} md={4}>
                          <Box >
                            <Typography variant="subtitle1" color="common.blue" >
                            <BuildCircleIcon className="pr-1" />
                              Sales Progress
                            </Typography>
                            <Typography color="common.Blue" fontWeight="bold">
                            0.1%
                            </Typography>
                          </Box>
                          </Grid>
                          <Grid item sm={4} md={4}>
                          <Box >
                            <Typography variant="h6" color="common.blue" >
                              <ArrowCircleUpIcon className="pr-1" />
                              Your Allocation
                            </Typography>
                            <Typography color="common.Blue" fontWeight="bold">
                            100%
                            </Typography>
                          </Box>
                          </Grid>
                        </Grid>
                  </Box>
                </Container>
                  </Grid>
                </Grid>

                
              </Box>
            </Box>
          </div>
        </Container>
      </div>
    </>
  )
}
