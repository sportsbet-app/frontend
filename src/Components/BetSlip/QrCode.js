import React from 'react'
import QR from 'qrcode.react'
export default function QrCode(props) {
    const { bet } = props
    const value = (JSON.stringify(bet))
    return (
        <div>
            <QR value={bet && value} renderAs={'svg'} level={'L'} />
        </div>

    )

}




