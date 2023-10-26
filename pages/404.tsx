import Link from "next/link";
import React from "react";
import Head from "next/head";

export default function Error404() {
    return (
        <main className="grid min-h-screen place-items-center bg-background-custom-light bg-dot">
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Notre agence innovante transforme vos idées en réalités en optimisant votre présence en ligne. Ensemble, façonnons votre empreinte digitale et ouvrons les portes d'un avenir numérique captivant."/>
                <title>Heureux Hasard - Page inconnu</title>
            </Head>
            <div className="text-center">
                <p className="text-base font-semibold text-gray-300">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page non trouvée</h1>
                <p className="mt-6 text-base leading-7 text-gray-500">Désolé, nous n&apos;avons pas trouvé la page que vous recherchez.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/"
                        className="px-12 py-3 text-xs font-exconRegular tracking-widest text-white bg-grey-custom-700 rounded-full hover:bg-white hover:text-grey-custom-dark transition-colors duration-300 ease-in-out uppercase">
                        Retour à l&apos;accueil
                    </Link>
                    <Link href="/contact" className="text-sm font-semibold text-white">
                        Nous contact <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}
