'use client'
import { getDataEmail } from "@/server/email"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'

export default function ContactPage() {

  useEffect(() => {
    emailjs.init(process.env.EMAILJS_USER_ID)
  }, [])

  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [isSending, setIsSending] = useState<boolean>(false)
  const [mailStatus, setMailStatus] = useState<EmailJSResponseStatus>()

  const nameControls = useAnimation()
  const emailControls = useAnimation()
  const msgControls = useAnimation()

  const sendEmailHandler = async () => {

    if (!email) {
      emailControls.start({
        backgroundColor: ['#C73535', '#D9D9D9'],
        transition: { duration: 1 }
      })
      
      return
    }
    
    if (!name) {
      nameControls.start({
        backgroundColor: ['#C73535', '#D9D9D9'],
        transition: { duration: 1 }
      })
      
      return
    }
    
    if (!message) {
      msgControls.start({
        backgroundColor: ['#C73535', '#D9D9D9'],
        transition: { duration: 1 }
      })
      
      return
    }
    
    setIsSending(true)
    const apiRequestData = await getDataEmail(email, name, message)

    const res = await emailjs.send(apiRequestData.service, apiRequestData.template, apiRequestData.params, apiRequestData.userid)
    setIsSending(false)

    setMailStatus(res)
    setTimeout(() => {
      setMailStatus(undefined)
    }, 3000)
  }

  return (
    <div className="flex flex-col mt-16 h-screen">
      <h1 className="uppercase text-white text-s px-5">Send Me a Message</h1>
      <motion.div className="flex items-center w-fit mt-10 text-xs bg-dark-white rounded-r-3xl"
        animate={nameControls}
      >
        <input type="text" placeholder="Your Name"
          className="rounded-xl bg-transparent border-0"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="w-fit p-2">
          <img src="/svg/name-icon.svg" alt="name icon" width={64} height={64}/>
        </div>
      </motion.div>
      <motion.div className="self-end flex items-center w-fit mt-10 text-xs bg-dark-white rounded-l-3xl"
        animate={emailControls}
      >
        <div className="w-fit p-2 pl-3">
          <img src="/svg/email-icon.svg" alt="email icon" width={54} height={54}/>
        </div>
        <input type="text" placeholder="E-mail"
          className="rounded-xl bg-transparent border-0"
          onChange={(e) => setEmail(e.target.value)}
        />
      </motion.div>

      <div className="flex flex-col m-5 mt-10 text-xs">
        <motion.textarea name="message" id="message" cols={20} rows={10} placeholder="Write your message here" maxLength={500}
          className=" p-5 rounded-3xl bg-dark-white border-0 resize-none"
          onChange={(e) => setMessage(e.target.value)}
          animate={msgControls}
        ></motion.textarea>
        <div className="flex justify-end mt-5">
          <div className="self-end flex items-center justify-center h-full px-5">
            <motion.img src="/svg/spinner.svg" alt="spinner" className={` ${isSending ? '' : 'hidden'}`}
              animate={{ rotate: 360, transition: { duration: 1, repeat: Infinity }}}
            />
            {
              mailStatus && mailStatus.status === 200 ?
              <span className="text-xs text-green-500">Message sent!</span> :
              mailStatus && mailStatus.status !== 200 &&
              <span className="text-xs text-red-500">Failed to send :(</span>
            }
          </div>
          <button className="p-3 px-5 bg-light-gray rounded-3xl"
            onClick={sendEmailHandler}
          >
            Send!
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <img src="/illustration/mail.svg" alt="email illustration" className="w-full h-full" />
      </div>
    </div>
  )
}