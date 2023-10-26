import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/public/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Quels types d\'ordinateurs réparez-vous ?',
      answer: 'Nous réparons une grande variété d\'ordinateurs, y compris les ordinateurs portables, les ordinateurs de bureau, les PC Windows, les Mac, et bien plus encore.'
    },
    {
      question: 'Comment puis-je planifier une réparation ?',
      answer: 'Vous pouvez planifier une réparation en nous contactant par téléphone ou en utilisant notre formulaire de contact en ligne.'
    },
    {
      question: 'Proposez-vous des services de récupération de données ?',
      answer: 'Oui, nous offrons des services de récupération de données pour les cas de perte de données.'
    },
  ],
  [
    {
      question: 'Combien de temps faut-il pour réparer mon ordinateur ?',
      answer: 'Le temps de réparation varie en fonction du problème, mais nous faisons de notre mieux pour effectuer les réparations rapidement.'
    },
    {
      question: 'Offrez-vous des garanties sur les réparations ?',
      answer: 'Oui, nous offrons des garanties sur nos réparations. Les détails dépendent du type de réparation.'
    },
    {
      question: 'Puis-je obtenir un devis gratuit pour la réparation de mon ordinateur ?',
      answer: 'Oui, nous proposons des devis gratuits pour toutes nos réparations. Contactez-nous pour en savoir plus.'
    },
  ],
  [
    {
      question: 'Quels types de upgrades informatiques proposez-vous ?',
      answer: 'Nous proposons des upgrades de disque SSD, d\'augmentation de mémoire RAM, et des options combinées pour améliorer les performances de votre ordinateur.'
    },
    {
      question: 'Est-ce que la mise à niveau de RAM rendra mon ordinateur plus rapide ?',
      answer: 'Oui, l\'augmentation de la mémoire RAM peut accélérer les performances de votre ordinateur, en particulier lorsque vous utilisez des applications gourmandes en mémoire.'
    },
    {
      question: 'Quels sont les avantages de passer d\'un disque dur à un SSD ?',
      answer: 'Le changement vers un SSD peut entraîner un démarrage plus rapide, une réactivité accrue, et une durée de vie prolongée de votre ordinateur.'
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Questions fréquemment posées
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Découvrez les réponses aux questions les plus courantes concernant nos services de réparation et d'upgrade informatique. Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter pour plus d'informations.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
