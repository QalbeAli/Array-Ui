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
        

       
      </div>
    </>
  )
}
