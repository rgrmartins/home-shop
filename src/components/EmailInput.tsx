import { Mail } from 'lucide-react'

import { Button } from './ui/button'
import { Input } from './ui/input'

const EmailInput = () => {
  return (
    <div className="mt-2 flex items-center gap-2 border-b py-2 md:w-96 md:p-2">
      <Mail size="20" className="text-muted-foreground" />
      <Input
        type="email"
        placeholder="Email address"
        className="border-none bg-transparent"
      />
      <Button
        variant="link"
        className="rounded-md px-4 py-2 text-muted-foreground"
      >
        Signup
      </Button>
    </div>
  )
}

export default EmailInput
