'use server'

export async function getDataEmail(from: string, name: string, msg: string) {
    
  const params: Record<string, unknown> = {
    from: from,
    name: name,
    message: msg,
  }
  
  return {
    service: process.env.EMAILJS_SERVICE,
    template: process.env.EMAILJS_TEMPLATE,
    params: params,
    userid: process.env.EMAILJS_KEY
  }
}