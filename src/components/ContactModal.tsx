import * as Dialog from '@radix-ui/react-dialog'
import emailjs from '@emailjs/browser'
import { X } from 'lucide-react'
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type FormData = {
  fullName: string
  email: string
  phone: string
  company: string
  message: string
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
}

type ContactModalProps = {
  children: ReactNode
}

export function ContactModal({ children }: ContactModalProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    firstInputRef.current?.focus()
  }, [open])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setErrorMessage(
        'EmailJS is not configured. Copy .env.example to .env and add your credentials.',
      )
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullName,
          reply_to: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        publicKey,
      )

      setStatus('success')
      setFormData(initialFormData)
    } catch {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again or email us directly.')
    }
  }

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen)
    if (!nextOpen) {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80" />
        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 z-50 max-h-[90vh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-white p-8 shadow-2xl',
            'data-[state=open]:animate-[fadeIn_0.2s_ease-out]',
          )}
        >
          <Dialog.Close
            className="absolute top-4 right-4 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Dialog.Close>

          <Dialog.Title className="font-serif text-2xl font-semibold text-primary">
            Schedule a Consultation
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-muted-foreground">
            Fill out the form below and we will get back to you as soon as possible.
          </Dialog.Description>

          {status === 'success' ?
            <div className="mt-8 border border-border bg-[#fafafa] p-6 text-center">
              <p className="font-medium text-primary">Thank you for reaching out!</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We received your message and will get back to you shortly.
              </p>
              <Button onClick={() => handleOpenChange(false)} className="mt-6">
                Close
              </Button>
            </div>
          : <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="text-xs font-bold tracking-widest text-primary uppercase"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border-border text-foreground focus:border-primary mt-2 w-full border bg-white px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-bold tracking-widest text-primary uppercase"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-border text-foreground focus:border-primary mt-2 w-full border bg-white px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-xs font-bold tracking-widest text-primary uppercase"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-border text-foreground focus:border-primary mt-2 w-full border bg-white px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="text-xs font-bold tracking-widest text-primary uppercase"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company LLC"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-border text-foreground focus:border-primary mt-2 w-full border bg-white px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-bold tracking-widest text-primary uppercase"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-border text-foreground focus:border-primary mt-2 w-full resize-none border bg-white px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500">{errorMessage}</p>
              )}

              <Button
                type="submit"
                disabled={status === 'sending'}
                className="bg-primary hover:bg-primary/90 w-full"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          }
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
