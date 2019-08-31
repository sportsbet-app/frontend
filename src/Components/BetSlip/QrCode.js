import React from 'react'
//import QR code maker from the react library
import QR from 'qrcode.react'

export default function QrCode(props) {
  //set the value of bet to props
  const { bet } = props
  //turn the value of the object to a string to be used by the QR
  const value = (JSON.stringify(bet))
  return (
    <div data-testid='container'>
      <QR value={bet && value} renderAs={'svg'} level={'S'} />
    </div>
  )
}
