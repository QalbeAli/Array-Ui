import Image from 'next/image'
import Images from '../../public/images/Images'
export default function Modal() {
  return (
    <>
      <div className="container mx-auto px-4 my-4 ">
        <div className="text-center">
          <div className=" bg-gradient-to-br from-red-700 to-blue-600 bg-clip-text text-xl font-extrabold text-transparent ">
            Model
          </div>
          <div className="text-3xl font-bold text-white">Financial Modal</div>
        </div>

        <div className='my-5'>
          <Image src={Images.modal} />
        </div>
        {/* <div className=" my-8 border-[0.5px] bg-black py-4 font-bold text-white">
          <div className="flex p-4 ">
            <div className=" flex items-center justify-center rounded-xl bg-[#0d1324] px-5">
              <div className="p-2 px-6">
                <Image src={Images.man} />
              </div>
              <div className="px-6 text-lg font-bold">User</div>
            </div>
            <div className="mx-2 mb-5 w-[29%] border-b-4 border-dotted border-indigo-500"></div>
            <div className="mr-4 pt-10">
              <Image src={Images.rightarrow} />
            </div>
            <div className="mb-5 w-[29%] border-b-4 border-dotted border-indigo-500"></div>
            <div className=" flex items-center justify-center rounded-xl bg-[#0d1324] px-5">
              <div className="p-2 px-6">
                <Image src={Images.king} width="50" height="50" />
              </div>
              <div className="px-6 text-lg font-bold">IDO Tokens</div>
            </div>
          </div>

          <div className='flex justify-between items-center'>
          <div className="mx-2 mb-5 h-[3rem] border-r-4  border-dotted border-indigo-500"></div>

        </div>
        </div> */}

       
      </div>
    </>
  )
}
