"use client";

import { useEffect, useState } from 'react'
import {Pricing} from "@/components/Pricing";

export function Check() {
    const models = {
        "brands": [
            {
                "name": "Dell",
                "models": [
                    {
                        "name": "Inspiron",
                        "references": ["Inspiron 15", "Inspiron 17", "Inspiron 13"]
                    },
                    {
                        "name": "XPS",
                        "references": ["XPS 13", "XPS 15", "XPS 17"]
                    },
                    {
                        "name": "Latitude",
                        "references": ["Latitude 14", "Latitude 15", "Latitude 12"]
                    },
                    {
                        "name": "Alienware",
                        "references": ["Alienware m15", "Alienware m17", "Alienware Area-51m"]
                    }
                ]
            },
            {
                "name": "HP",
                "models": [
                    {
                        "name": "Pavilion",
                        "references": ["Pavilion x360", "Pavilion 15", "Pavilion Gaming Laptop"]
                    },
                    {
                        "name": "EliteBook",
                        "references": ["EliteBook 840", "EliteBook 1040", "EliteBook x360"]
                    },
                    {
                        "name": "Omen",
                        "references": ["Omen 15", "Omen 17", "Omen X"]
                    },
                    {
                        "name": "ProBook",
                        "references": ["ProBook 450", "ProBook 640", "ProBook 455"]
                    }
                ]
            },
            {
                "name": "Lenovo",
                "models": [
                    {
                        "name": "ThinkPad",
                        "references": ["ThinkPad X1 Carbon", "ThinkPad T490", "ThinkPad P53"]
                    },
                    {
                        "name": "IdeaPad",
                        "references": ["IdeaPad L340", "IdeaPad S145", "IdeaPad 330"]
                    },
                    {
                        "name": "Yoga",
                        "references": ["Yoga C940", "Yoga 730", "Yoga 920"]
                    },
                    {
                        "name": "Legion",
                        "references": ["Legion Y540", "Legion Y740", "Legion 7i"]
                    }
                ]
            },
            {
                "name": "Apple",
                "models": [
                    {
                        "name": "MacBook Air",
                        "references": ["MacBook Air 13-inch 2020", "MacBook Air 13-inch 2019"]
                    },
                    {
                        "name": "MacBook Pro",
                        "references": ["MacBook Pro 13-inch 2020", "MacBook Pro 16-inch 2019"]
                    },
                    {
                        "name": "iMac",
                        "references": ["iMac 27-inch 5K 2020", "iMac 21.5-inch 4K 2019"]
                    },
                    {
                        "name": "Mac Mini",
                        "references": ["Mac Mini 2020", "Mac Mini 2018"]
                    }
                ]
            }
        ]
    }

    const [title, setTitle] = useState<string>("Testez votre éligibilité.");
    const [eligibility, setEligibility] = useState<boolean | null>(null);
    const [selectedBrand, setSelectedBrand] = useState('Dell'); // Par défaut, vous pouvez choisir une marque
    // @ts-ignore
    const [selectedModel, setSelectedModel] = useState(models.brands.find(brand => brand.name === 'Dell').models[0].references[0]); // Par défaut, vous pouvez choisir un modèle

    const brandOptions = models.brands.map(brand => (
        <option key={brand.name} value={brand.name}>{brand.name}</option>
    ));

    // @ts-ignore
    const modelOptions = models.brands.find(brand => brand.name === selectedBrand).models.map(model => (
        model.references.map(reference => (
            <option key={reference} value={reference}>{reference}</option>
        ))
    ));

    // @ts-ignore
    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    }

    // @ts-ignore
    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
    }

    const handleTestEligibility = () => {
        if (selectedBrand !== "Apple") {
            setEligibility(true)
            setTitle("Bonne nouvelle ! Vous êtes éligible 😊")
        } else {
            setEligibility(false)
            setTitle("Malheureusement votre matériel n'est pas compatible 😢")
        }
        // Afficher le modèle sélectionné dans la console
        console.log(`Modèle sélectionné : ${selectedModel}`);
        console.log(`Modèle sélectionné : ${selectedBrand}`);
    }

    return (
        <>
            <div className="bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-[#2463EB] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
                        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">Réparez, n&apos;abandonnez pas : Offrons une nouvelle vie aux ordinateurs.</p>
                        <div className="mx-auto mt-10 flex max-w-md gap-x-4">
                            <label className="sr-only">Marque</label>
                            <select
                                id="brand"
                                name="brand"
                                value={selectedBrand}
                                onChange={handleBrandChange}
                                className="min-w-0 flex-auto block w-full rounded-md border-0 px-3.5 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                {brandOptions}
                            </select>
                            <label className="sr-only">Modèle</label>
                            <select
                                id="model"
                                name="model"
                                value={selectedModel}
                                onChange={handleModelChange}
                                className="min-w-0 flex-auto block w-full rounded-md border-0 px-3.5 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                {modelOptions}
                            </select>
                            <button type="submit" onClick={handleTestEligibility} className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover-bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Tester mon éligibilité</button>
                        </div>
                        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                                    <stop stopColor="#7775D6" />
                                    <stop offset="1" stopColor="#E935C1" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            {eligibility === true ? <Pricing/> : null}
        </>
    )
}
