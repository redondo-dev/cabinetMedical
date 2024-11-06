// app/components/ContactForm/index.tsx


import dynamic from 'next/dynamic'

const ContactFormClient = dynamic(() => import('./ContactFormClient'), {
  ssr: true
})

export default function ContactForm() {
  return <ContactFormClient />
}