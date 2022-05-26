import { Grid, Container, Box, Typography, Button, styled } from '@mui/material'
import Header from '../components/Header'
import Image from 'next/image'
import Images from '../public/images/Images'
import DoneIcon from '@mui/icons-material/Done'

export default function Staking() {
  const data = [
    {
      img: Images.tiresystem1,
      title: 'Tier 1',
      Requirement: '10,000',
      LockPeriod: '10,000',
      PoolWeight: '10,000',
    },
    {
      img: Images.tiresystem2,
      title: 'Tier 2',
      Requirement: '10,000',
      LockPeriod: '10,000',
      PoolWeight: '10,000',
    },
    {
      img: Images.tiresystem3,
      title: 'Tier 3',
      Requirement: '10,000',
      LockPeriod: '10,000',
      PoolWeight: '10,000',
    },
    {
      img: Images.tiresystem4,
      title: 'Tier 4',
      Requirement: '10,000',
      LockPeriod: '10,000',
      PoolWeight: '10,000',
    },
  ]

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <div className="py-[8rem] ">
          <Grid container>
            <Grid item sm={12} md={6}>
              <Box className="flex items-center justify-center">
                <Image src={Images.blockchain} />
              </Box>
            </Grid>
            <Grid item sm={12} md={6} className="justify-center items-center">
              <Box className="pt-12">
                <div className=" flex justify-center items-center bg-gradient-to-br  from-red-700 to-blue-600 bg-clip-text text-xl font-extrabold text-transparent lg:justify-start ">
                  About Stake
                </div>
                <div className="flex justify-center items-center lg:justify-start">
                  <Typography
                    variant="h1"
                    color="common.white"
                    className="py-3 pb-12"
                  >
                    About Stake Tiers
                  </Typography>
                </div>
                <Typography variant="h2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  accumsan blandit arcu, nec. Semper ut fusce feugiat libero
                  volutpat turpis volutpat varius viverra. Tellus est nunc,
                  donec arcu. Neque, nunc ultricies justo, mi viverra nulla
                  risus. Arcu malesuada sed aenean nullam ac turpis. A aliquam a
                  ultricies luctus et nisi. <br /> <br /> Nisi, gravida
                  pharetra, neque ut malesuada parturient auctor. Gravida porta
                  nisi lacus volutpat nunc id porta. Leo nibh donec id
                  ullamcorper eget. Vel blandit urna sed volutpat libero.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>

        {/* --------------------------------TIERCARD--------------------------------------- */}

        <div>
          <div className=" flex justify-center bg-gradient-to-br from-red-700  to-blue-600 bg-clip-text py-4 text-xl font-extrabold text-transparent  ">
            About Stake
          </div>
          <div className="flex justify-center">
            <Typography
              variant="h1"
              color="common.white"
              className="py-3 pb-12"
            >
              Tier System
            </Typography>
          </div>

          <div>
            <Grid container>
              {data.map((item, id) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={id} className="p-2">
                    <Box
                      border="1px solid #212642"
                      sx={{ backgroundColor: '#0B0D20', borderRadius: '16px' }}
                    >
                      <Box className="text-center">
                        <Image src={item.img} />
                        <div className=" flex justify-center bg-gradient-to-br from-red-700  to-blue-600 bg-clip-text pb-3 text-3xl font-extrabold text-transparent  ">
                          {item.title}
                        </div>
                        <Box sx={{ borderBottom: '1px solid #212642' }} />
                      </Box>

                      <Box className="p-3 ">
                        <Box className="flex justify-between px-3 py-3">
                          <Typography variant="h2">Requirements</Typography>
                          <Typography
                            variant="h2"
                            color="white"
                            fontWeight="bold"
                            fontSize="1.2rem"
                          >
                            10,000
                          </Typography>
                        </Box>
                        <Box className="flex justify-between px-3 pb-3">
                          <Typography variant="h2">Lock Period</Typography>
                          <Typography
                            variant="h2"
                            color="white"
                            fontWeight="bold"
                            fontSize="1.2rem"
                          >
                            10,000
                          </Typography>
                        </Box>
                        <Box className="flex justify-between px-3 pb-3">
                          <Typography variant="h2">Pool Weight</Typography>
                          <Typography
                            variant="h2"
                            color="white"
                            fontWeight="bold"
                            fontSize="1.2rem"
                          >
                            1
                          </Typography>
                        </Box>
                      </Box>

                      <Box>
                        <Container>
                          <Box
                            sx={{
                              background: '#121736',
                              borderRadius: '8px',
                              border: '1px solid #212642',
                            }}
                          >
                            <Box className="flex justify-between px-3 py-1">
                              <Typography
                                variant="h2"
                                fontWeight="bold"
                                color="white"
                                className="pt-2"
                              >
                                Voting Power
                              </Typography>
                              <Box
                                className="mt-1"
                                sx={{
                                  background:
                                    'linear-gradient(90deg, #FF3E3D 0%, #466DFD 100%)',
                                  borderRadius: '50px',
                                }}
                              >
                                <DoneIcon className="pb-0.5" />
                              </Box>
                            </Box>
                          </Box>
                          {/* ------------------ 2 ------------------- */}
                          <Box
                            sx={{
                              background: '#121736',
                              borderRadius: '8px',
                              border: '1px solid #212642',
                            }}
                            className="mt-2"
                          >
                            <Box className="flex justify-between px-3 py-1">
                              <Typography
                                variant="h2"
                                fontWeight="bold"
                                color="white"
                                className="pt-2"
                              >
                                Guaranteed Allocation
                              </Typography>
                              <Box
                                className="mt-1"
                                sx={{
                                  background:
                                    'linear-gradient(90deg, #FF3E3D 0%, #466DFD 100%)',
                                  borderRadius: '50px',
                                }}
                              >
                                <DoneIcon className="pb-0.5" />
                              </Box>
                            </Box>
                          </Box>
                          <Box className="flex justify-center py-3  ">
                            <Button
                              variant="contained"
                              className="w-[25rem]"
                              style={{
                                background:
                                  'linear-gradient(90deg, #FF3E3D 0%, #466DFD 100%)',
                              }}
                            >
                              Stake
                            </Button>
                          </Box>
                        </Container>
                      </Box>
                    </Box>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        </div>

        <Box className="py-12">
          <div className=" flex justify-center bg-gradient-to-br from-red-700  to-blue-600 bg-clip-text py-4 text-xl font-extrabold text-transparent  ">
            GitBook
          </div>
          <div className="flex justify-center">
            <Typography
              variant="h1"
              color="common.white"
              className="py-3 pb-12"
            >
              Read Our Gitbook
            </Typography>
          </div>
          <Box className="flex justify-center py-3  ">
            <Button
              variant="contained"
              className="h-[6rem] w-[20rem]  font-bold"
              style={{
                background: 'linear-gradient(90deg, #FF3E3D 0%, #466DFD 100%)',
              }}
            >
              <Box className="pt-2">
                <Image src={Images.books} width="85" height="85" />
              </Box>
              <Box className="px-2">Read Our Gitbook</Box>
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}
