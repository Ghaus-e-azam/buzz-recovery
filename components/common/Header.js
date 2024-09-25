import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import Image from "next/image"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)
  const phoneNumber = "+447898067523";

    const handleCall = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };
  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              {/* <TitleLogo title='creative' caption='7' className='logomin' /> */}
              <Image
        src="/images/logo1.png" // path to your logo in the public directory
        alt="Logo"
        width={250} // width of the image
        height={80}  // height of the image
      />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>
            
            
            <Link href='/ourWork' className={activeLink == "/ourWork" ? "activeLink" : "none"}>
              Our Work
            </Link>
          
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
            <button onClick={handleCall} className='button-primary '>Contact US</button>
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header
