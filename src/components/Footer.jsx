import React from "react"
import Logo from "./Logo"

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center justify-center space-y-2 bg-slate-800 py-6">
        <Logo />
        <div className="flex flex-col items-center justify-center space-y-4 text-gray-400 sm:flex-row sm:space-y-0 sm:space-x-14">
          <p>Contact</p>
          <p>FAQ</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <p className="pt-2 text-gray-400">2022 Vodutv.com</p>
      </footer>
    </>
  )
}

export default Footer
