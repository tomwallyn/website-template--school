import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/public/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gray-700 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Vérifiez l'éligibilité de votre ordinateur
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Découvrez si votre ordinateur est éligible pour une réparation ou une mise à niveau. Économisez de l'argent tout en prolongeant la durée de vie de votre PC.
          </p>
          <Button href="/check" color="white" className="mt-10">
            Commencer
          </Button>
        </div>
      </Container>
    </section>
  )
}
