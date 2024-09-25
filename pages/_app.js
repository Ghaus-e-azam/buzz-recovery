import Layout from "@/components/common/Layout"
import "@/styles/main.scss"
import { FloatingWhatsApp } from "react-floating-whatsapp"

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
    </Layout>
  )
}
