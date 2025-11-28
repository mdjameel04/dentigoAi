import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SignUpButton } from '@clerk/nextjs'
const Homepage = () => {
  return (
    <div>
    <Button> click me</Button>
  <SignUpButton> signup</SignUpButton>
    </div>
  )
}

export default Homepage