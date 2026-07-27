'use client'
import Script from 'next/script'
import { useRef } from 'react'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paypal?: any
  }
}

const PLAN_ID = 'P-8S647504YP6167818NJTUVYI'
const CLIENT_ID = 'AbFBHqeJE7V3cqjj0J81ZR49vli1_6Wtyo2E67rds23qx-UqOX-zDXXO1UtcKxqOBHmBpE68qyXhKGL6'
const CONTAINER_ID = `paypal-button-container-${PLAN_ID}`

export default function PayPalSubscriptionButton() {
  const rendered = useRef(false)

  function initPayPal() {
    if (rendered.current || !window.paypal) return
    rendered.current = true

    window.paypal
      .Buttons({
        style: {
          shape: 'rect',
          color: 'blue',
          layout: 'vertical',
          label: 'subscribe',
        },
        createSubscription(_data: unknown, actions: { subscription: { create: (o: object) => unknown } }) {
          return actions.subscription.create({ plan_id: PLAN_ID })
        },
        onApprove(data: { subscriptionID: string }) {
          alert(`Subscription activated! ID: ${data.subscriptionID}`)
        },
      })
      .render(`#${CONTAINER_ID}`)
  }

  return (
    <>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&vault=true&intent=subscription`}
        data-sdk-integration-source="button-factory"
        strategy="lazyOnload"
        onLoad={initPayPal}
      />
      <div id={CONTAINER_ID} className="w-full max-w-xs mx-auto" />
    </>
  )
}
