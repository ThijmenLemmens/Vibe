"use client";

import "./styles/globals.css"

import "../../firebase/checkAuth"

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body>{children}</body>
      </html>
    )
}
