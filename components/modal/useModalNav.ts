"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
export function useModalNav() {

  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  function back() {
    router.back()
  }
  function close() {
    setIsOpen(false)
    // history.pushState(null, "", "/")
    console.log("closing modal")
    router.push("/")
  }
  return { isOpen, toggleOpen: () => setIsOpen(prev => !prev), back, close }
}
