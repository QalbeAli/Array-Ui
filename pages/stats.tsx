import Header from '../components/Header'
import { Grid, Container, Box, Typography, Button, styled } from '@mui/material'
import Images from '../public/images/Images'
import Image from 'next/image'
import DoneIcon from '@mui/icons-material/Done'
export default function Stats() {
  const data = [
    {
      title: 'Successful Sale',
      value: '1240',
    },
    {
      title: 'Unique C Chain Wallet',
      value: '105,240',
    },
    {
      title: 'AVAX Raised',
      value: '223,234 AVAX',
    },
    {
      title: 'Total Participants',
      value: '361,234',
    },
  ]

  const Data = [
    {
      title: 'Total Value Locked (TVL)',
      value: '116,234',
    },
    {
      title: 'Total Staked',
      value: '12,232,233',
    },
    {
      title: 'Total Volume',
      value: '102,234',
    },
    {
      title: 'Treasury',
      value: '367',
    },
  ]

  const Data1 = [
    {
      title: 'Number of Participants',
      img: Images.candle1,
    },
    {
      title: 'Total Raised Per Project ($)',
      img: Images.candle2,
    },
  ]

  const Data2 = [
    {
      title: 'Fair and Equitable Fundraising',
    },
    {
      title: 'Permissionless Listings',
    },
    {
        title: 'Vesting & Distribution',
      },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="xl" className="px-12">
        <div className="py-[4rem] text-center">
          <div className=" bg-gradient-to-br  from-red-700 to-blue-600 bg-clip-text text-xl font-extrabold text-transparent lg:justify-start ">
            Stats
          </div>
          <div>
            <Typography
              variant="h1"
              color="common.white"
              className="py-3 pb-12"
            >
              Stats Analysis
            </Typography>
          </div>
        </div>
        <Box>
          <Grid container>
            {data.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} className="p-1.5">
                  <Box
                    border="1px solid #212642"
                    sx={{ backgroundColor: '#0B0D20', borderRadius: '16px' }}
                  >
                    <Box className="py-5">
                      <Typography
                        variant="h2"
                        className="text-center text-2xl font-bold"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Box className="pt-3 pb-6">
                      <Typography
                        variant="h2"
                        className="text-center  font-bold text-white"
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Box>

        <Box>
          <Grid container>
            {Data.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} className="p-1.5">
                  <Box
                    border="1px solid #212642"
                    sx={{ backgroundColor: '#0B0D20', borderRadius: '16px' }}
                  >
                    <Box className="py-5">
                      <Typography
                        variant="h2"
                        className="text-center text-2xl font-bold"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Box className="pt-3 pb-6">
                      <Typography
                        variant="h2"
                        className="text-center text-3xl font-bold text-white"
                      >
                        {item.value}
                      </Typography>
                    </Box>
                    <Box>
                      <Image src={Images.line2} />
                    </Box>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Container>

      {/* ------------------------------------Charts---------------------------------------- */}

      <Box
        borderTop="1px solid #212642"
        borderBottom="1px solid #212642"
        className="my-[6rem]"
      >
        <div className="py-[4rem] text-center">
          <div className=" bg-gradient-to-br  from-red-700 to-blue-600 bg-clip-text text-xl font-extrabold text-transparent lg:justify-start ">
            Charts
          </div>
          <div>
            <Typography
              variant="h1"
              color="common.white"
              className="py-3 pb-12"
            >
              Avalaunch to USD Chart
            </Typography>
          </div>

          <Box className=" block  justify-center md:flex">
            <Box
              sx={{
                background: '#121736',
                borderRadius: '8px',
                border: '1px solid #212642',
              }}
              className="mx-2 mb-2 md:mb-0"
            >
              <Box className="flex justify-between px-3 py-1 ">
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  className="py-2 px-5"
                >
                  Price
                </Typography>
                <Box>
                  <Typography variant="h2" className="py-2 pr-4">
                    Market Cap
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                background: '#121736',
                borderRadius: '8px',
                border: '1px solid #212642',
              }}
            >
              <Box className="flex justify-between px-3 py-1">
                <Typography variant="h4" className=" px-2 pt-2">
                  1D
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  7D
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  1M
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  3M
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  1Y
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  YTD
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  All
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  LOG
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
        {/* -------------------Chart----------------------- */}
        <Box className="flex items-center justify-center py-3">
          <Image src={Images.graph} />
        </Box>
      </Box>
      {/* --------------------------Canlde-Charts----------------------------- */}
      <div>
        <Container>
          <Grid container>
            {Data1.map((item, index) => {
              return (
                <Grid item sm={12} md={6} className="p-3">
                  <Box
                    sx={{
                      background: '#121736',
                      border: '2px solid #212642',
                      borderRadius: '12px',
                    }}
                    className="my-6"
                  >
                    <Box className="py-6 text-center">
                      <Typography
                        variant="h1"
                        className="font-normal text-white"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Box className="py-4 px-4 pl-[2rem]">
                      <Image src={item.img} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        className=" py-4 text-center font-normal text-white"
                      >
                        Number of Participants
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              )
            })}
          </Grid>

          <Box className="py-12">
            <div className="py-[4rem] text-center">
              <div className=" bg-gradient-to-br  from-red-700 to-blue-600 bg-clip-text text-xl font-extrabold text-transparent lg:justify-start ">
                Sales
              </div>
              <div>
                <Typography
                  variant="h1"
                  color="common.white"
                  className="py-3 pb-12"
                >
                  Past Sales
                </Typography>
              </div>
            </div>
            <Box
              sx={{
                background: 'linear-gradient(90deg, #200B17 0%, #22122B 100%)',
                borderRadius: '8px',
              }}
            >
              <Box className="flex justify-between px-3 py-3">
                <Typography variant="h2" className=" px-2 pt-2">
                  Project Name
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  IDO Token
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  Current Price
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  Ath
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  ATH ROI
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  No.Participant
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  Total Raised
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  Total Token Sold
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  Sale Ended At
                </Typography>
              </Box>
            </Box>

            <Box
              className="my-1"
              sx={{
                background: 'linear-gradient(90deg, #200B17 0%, #22122B 100%)',
                borderRadius: '8px',
              }}
            >
              <Box className="flex justify-between px-3 py-3">
                <Box className="flex ">
                  <Box className="px-2">
                    <Image src={Images.ava1} alt="" />
                  </Box>
                  <Box>
                    <Typography
                      color="white"
                      fontWeight="bold"
                      fontSize="0.8rem"
                    >
                      Snail Trail
                    </Typography>
                    <Typography variant="h2" fontSize="0.8rem">
                      SLIME
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="h2" className=" px-2 pt-2">
                  $0.006
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  $0.186
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  TBA
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  TBA
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  1240
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  $1,147,999.00
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  17,147,999
                </Typography>
                <Typography variant="h2" className=" px-2 pt-2">
                  May 10, 2022
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* -----------Pagination To be Apply------------------------ */}


          {/* --------------------------------------------------- */}
          <Box>
            <Grid container>
                {Data2.map((item, index) => {
                    return(
                        <Grid item sm={12} md={4} className="p-3">
                        <Box
                          sx={{ backgroundColor: '#0B0D1F', borderRadius: '12px' }}
                          className="my-6 py-12"
                        >
                          <Box className="flex items-center justify-center">
                            <Image src={Images.setting} />
                          </Box>
                          <Box className="pt-8 text-center text-white">
                            <Typography variant="h5" fontWeight="bold">
                              {item.title}
                            </Typography>
                          </Box>
                          <Box className="px-10 pt-8 text-center text-white">
                            <Typography variant="h2">
                              Our unique staking and distribution methodology ensures
                              broad participation.
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    )
                })}
              
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  )
}
