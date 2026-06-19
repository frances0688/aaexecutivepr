import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import {
  createContext,
  useContext,
  useState,
  type ComponentProps,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

type SheetContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const SheetContext = createContext<SheetContextValue | null>(null)

function useSheet() {
  const context = useContext(SheetContext)
  if (!context) {
    throw new Error('Sheet components must be used within Sheet')
  }
  return context
}

export function Sheet({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        {children}
      </Dialog.Root>
    </SheetContext.Provider>
  )
}

export function SheetTrigger({
  children,
  asChild = false,
  className,
  ...props
}: ComponentProps<'button'> & { asChild?: boolean }) {
  if (asChild) {
    return <Dialog.Trigger asChild>{children}</Dialog.Trigger>
  }

  return (
    <Dialog.Trigger
      className={cn('cursor-pointer', className)}
      {...props}
    >
      {children ?? <Menu className="h-10 w-10 md:h-12 md:w-12" />}
    </Dialog.Trigger>
  )
}

export function SheetContent({
  children,
  className,
  side = 'right',
}: {
  children: ReactNode
  className?: string
  side?: 'right' | 'left'
}) {
  const { setOpen } = useSheet()

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out" />
      <Dialog.Content
        className={cn(
          'sheet-content fixed top-0 z-50 flex h-full w-[300px] flex-col bg-white px-6 pt-20 shadow-xl',
          side === 'right' ? 'right-0' : 'left-0',
          className,
        )}
      >
        <Dialog.Close
          className="absolute top-6 right-6 cursor-pointer text-primary transition-colors hover:text-primary/80"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <X className="h-6 w-6" />
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}
