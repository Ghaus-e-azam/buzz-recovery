import Layout from "@/components/common/Layout"
import "@/styles/main.scss"
import { Fab } from "@mui/material"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import PhoneIcon from '@mui/icons-material/Phone';
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <FloatingWhatsApp 
      phoneNumber="+447898067523" // Replace with your WhatsApp number
      accountName="Buzz Recovery"
      chatMessage="Hello! How can we help you today?"
      avatar='/images/avatar.png' // Optional: Add an avatar image
      statusMessage="Typically replies within 5 minutes"
     
    />

<Fab
      color="primary"
      aria-label="call"
      href="tel:+447898067523" // Replace with your phone number
      style={{
        position: 'fixed',
        bottom: '110px',
        right: '33px',
        backgroundColor: '#28a745',
        color: '#fff',
      }}
    >
      <PhoneIcon />
    </Fab>
    </Layout>
  )
}
