// app/components/ContactForm/index.tsx


import dynamic from 'next/dynamic'

const ContactFormClient = dynamic(() => import('./ContactFormClient'), {
  ssr: false
})

export default function ContactForm() {
  return <ContactFormClient />
}