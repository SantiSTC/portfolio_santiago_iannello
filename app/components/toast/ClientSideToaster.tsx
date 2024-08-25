'use client'

import { useEffect, useState } from 'react'
import { Toaster } from "./toaster";

export function ClientSideToaster() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <Toaster />
}