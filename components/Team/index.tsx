import { Grid } from '@mui/material'
import Image from 'next/image'
import Images from '../../public/images/Images'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Team() {
  return (
    <>
      <div className="container mx-auto px-4 py-[3rem]">
        <div className="text-center text-xs text-white">
          <div className=" bg-gradient-to-br from-red-700 to-blue-600 bg-clip-text text-xl font-extrabold text-transparent ">
            Meet With Our
          </div>
          <div className="text-2xl font-bold ">Creative Team</div>
        </div>

        <div>
          <Grid container className="my-[8rem]" spacing={3} >
            <Grid items xs={12} sm={6} md={4} lg={4} >
              <div className="rounded-xl border-[0.5px] mx-3 my-[8rem] lg:my-0 bg-[#0d1324] ">
                <div className="flex -translate-y-20 items-center justify-center">
                  <Image src={Images.team1} />
                </div>
                <div className="mb-2 text-center text-2xl font-bold text-white">
                  Mark Stanwyck
                </div>
                <div className="mb-4 text-center text-blue-300">Director</div>

                <div className='text-center text-blue-300 px-6 mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  vitae convallis imperdiet ultrices turpis. Molestie euismod
                  tortor dignissim sed lacus sit quis. Eget dui tellus.
                </div>
                <div className="flex justify-center items-center space-x-5">
                    <div className="p-3 scale-140 text-white">
                        <a href="https://www.facebook.com/">
                        <FacebookIcon />
                        </a>
                    </div>
                    <div className="p-3 scale-140 text-white">
                        <a href="https://twitter.com/?lang=en">
                        <TwitterIcon />
                        </a>
                    </div>
                    <div className="p-3 scale-140 text-white">
                        <a href="https://github.com/">
                        <GitHubIcon />
                        </a>
                    </div>
                </div>
              </div>
            </Grid>
                {/* --------------------------- */}
            <Grid items xs={12} sm={6} md={4} lg={4}>
              <div className="rounded-xl border-[0.5px] mx-3 my-[8rem] lg:my-0 bg-[#0d1324] ">
                <div className="flex -translate-y-20 items-center justify-center">
                  <Image src={Images.team2} />
                </div>
                <div className="mb-2 text-center text-2xl font-bold text-white">
                  Mark Stanwyck
                </div>
                <div className="mb-4 text-center text-blue-300">Director</div>

                <div className='text-center text-blue-300 px-6 mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  vitae convallis imperdiet ultrices turpis. Molestie euismod
                  tortor dignissim sed lacus sit quis. Eget dui tellus.
                </div>
                <div className="flex justify-center items-center space-x-5">
                    <div className="p-3 scale-140 text-white">
                        <a href="https://www.facebook.com/">
                        <FacebookIcon />
                        </a>
                    </div>
                    <div className="p-3 scale-140 text-white">
                        <a href="https://twitter.com/?lang=en">
                        <TwitterIcon />
                        </a>
                    </div>
                    <div className="p-3 scale-140 text-white">
                        <a href="https://github.com/">
                        <GitHubIcon />
                        </a>
                    </div>
                </div>
              </div>
            </Grid>
            {/* --------------------------- */}
            <Grid items xs={12} sm={6} md={4} lg={4}>
              <div className="rounded-xl border-[0.5px] mx-3 my-[8rem] lg:my-0 bg-[#0d1324] ">
                <div className="flex -translate-y-20 items-center justify-center">
                  <Image src={Images.team3} />
                </div>
                <div className="mb-2 text-center text-2xl font-bold text-white">
                  Mark Stanwyck
                </div>
                <div className="mb-4 text-center text-blue-300">Director</div>

                <div className='text-center text-blue-300 px-6 mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  vitae convallis imperdiet ultrices turpis. Molestie euismod
                  tortor dignissim sed lacus sit quis. Eget dui tellus.
                </div>
                <div className="flex justify-center items-center space-x-5">
                    <div className="p-3 scale-140 text-white">
                        <a href="https://www.facebook.com/">
                        <FacebookIcon />
                        </a>
                    </div>
                    <div className="p-3 scale-140 text-white">
                        <a href="https://twitter.com/?lang=en">
                        <TwitterIcon />
                        </a>
                    </div>
                    <div className="p-3 scale-140 text-white">
                        <a href="https://github.com/">
                        <GitHubIcon />
                        </a>
                    </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}
