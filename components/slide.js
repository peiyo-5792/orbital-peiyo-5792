import Image from "next/image"
import pic from "../images/ban1.jpg"

export default function Slide() {
  return (
    <>
      <div>
        <Image src={pic} alt="banner" className="w-full" height="auto" />
      </div>
    </>
  )
}