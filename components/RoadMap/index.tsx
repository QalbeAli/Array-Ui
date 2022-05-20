import { Grid } from '@mui/material'

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


        <Grid container>
          <Grid items xs={12} sm={6} md={3} lg={3}>
            <div className="w-[10rem] rounded-xl border-2 border-l-red-500 border-t-pink-500 border-r-indigo-500 border-b-violet-500 bg-[#0d1324] py-3 text-center font-bold text-white ">
              Q1-2022
            </div>
          </Grid>
          <Grid items xs={12} sm={6} md={3} lg={3}>
            <div className="w-[10rem] rounded-xl border-2 border-l-red-500 border-t-pink-500 border-r-indigo-500 border-b-violet-500 bg-[#0d1324] py-3 text-center font-bold text-white ">
              Q1-2022
            </div>
          </Grid>
          <Grid items xs={12} sm={6} md={3} lg={3}>
            <div className="w-[10rem] rounded-xl border-2 border-l-red-500 border-t-pink-500 border-r-indigo-500 border-b-violet-500 bg-[#0d1324] py-3 text-center font-bold text-white ">
              Q1-2022
            </div>
          </Grid>
          <Grid items xs={12} sm={6} md={3} lg={3}>
            <div className="w-[10rem] rounded-xl border-2 border-l-red-500 border-t-pink-500 border-r-indigo-500 border-b-violet-500 bg-[#0d1324] py-3 text-center font-bold text-white ">
              Q1-2022
            </div>
          </Grid>
        </Grid>

        
      </div>
    </>
  )
}
