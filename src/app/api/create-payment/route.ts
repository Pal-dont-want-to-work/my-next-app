import { NextResponse } from 'next/server'
const AlipaySdk = require('alipay-sdk').default

const alipay = new AlipaySdk({
  appId: process.env.ALIPAY_APP_ID!,
  privateKey: process.env.ALIPAY_PRIVATE_KEY!,
  gateway: 'https://openapi.alipay.com/gateway.do',
})

export async function POST(request: Request) {
  try {
    const { tier, price } = await request.json()
    
    const orderId = `ORDER_${Date.now()}`
    
    const result = await alipay.exec('alipay.trade.page.pay', {
      notify_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/alipay-notify`,
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
      bizContent: {
        out_trade_no: orderId,
        total_amount: price,
        subject: `Subscription - ${tier}`,
        product_code: 'FAST_INSTANT_TRADE_PAY'
      }
    })

    return NextResponse.json({ paymentUrl: result })
  } catch (error) {
    console.error('Payment creation failed:', error)
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    )
  }
} 