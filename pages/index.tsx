import {Header} from "@/components/Header";
import React from "react";
import {Hero} from "@/components/Hero";
import {PrimaryFeatures} from "@/components/PrimaryFeatures";
import {SecondaryFeatures} from "@/components/SecondaryFeatures";
import {CallToAction} from "@/components/CallToAction";
import {Footer} from "@/components/Footer";
import {Faqs} from "@/components/Faqs";
import {Pricing} from "@/components/Pricing";
import {Testimonials} from "@/components/Testimonials";

export default function Home() {
    return (
        <>
            <Header/>
                <main>
                    <Hero/>
                    <CallToAction/>
                    <PrimaryFeatures/>
                    {/*<SecondaryFeatures/>*/}
                    {/*<Testimonials/>*/}
                    {/*<Pricing/>*/}
                    <Faqs/>
                </main>
            <Footer/>
        </>
    )
}
