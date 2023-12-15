import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Landing.module.css'
import { useInView } from 'react-intersection-observer';
import { GetMixpanelSource, Mixpanel, MixpanelSource } from '../utils/mixpanel';
// import Footer from '../utils/components/Footer';
import { Maintenance } from '../utils/components/maintenance.js';

import Header from '../utils/components/HeaderComponent';
import Footer from '../utils/components/FooterComponent';
import Section0 from '../utils/components/Section0';
import Section1 from '../utils/components/Section1';
import Section2 from '../utils/components/Section2';
import Section3 from '../utils/components/Section3';
import Section4 from '../utils/components/Section4';

function Maintenance_() {
    return Maintenance();
}

export default function Landing() {

    const FAQ = [
        { question: 'What is AI content detection bypasser?', answer: 'AI content detection bypasser is a tool that is capable of bypassing AI content detectors. It is often done by paraphrasing, and GPTinf is the most powerful tool for this purpose.' },
        { question: 'What is GPTinf?', answer: 'GPTinf is the best AI content bypasser.' },
        { question: 'What is the quality of the final result?', answer: 'Overall meaning per each sentence is preserved, as well as style and semantic structure. We recommend using Grammarly after paraphrasing to fix possible grammatical errors (it does not affect the detection score).' },
        { question: 'How do AI content detectors work?', answer: 'In general, AI content detectors mark each word with a probability that it was written by AI. Then, often by using Machine Learning techniques, the probability of containing AI content is calculated.' },
        { question: 'How to bypass AI content detectors?', answer: 'GPTinf is the best option for this purpose. To humanize AI content often slight changes are needed. These include using synonymous, rotating language structures, and sometimes mixing sentences in a smart way.' },
    ];

    const isOpen = [
        useState(false),
        useState(false),
        useState(false),
        useState(false),
        useState(false),
        useState(false),
    ]

    const router = useRouter();
    useEffect(() => {
        MixpanelSource();
        Mixpanel.track('Landing page loaded', { 'Source': GetMixpanelSource() });
        Mixpanel.track('/ loaded');

    }, []);


    useEffect(() => {
        if (router.isReady) {
            if (router.query.src) {
                // make available for subdomains
                document.cookie = `src__=${router.query.src};path=/;Domain=.gptinf.com`;
            }
        }
    }, [router.isReady]);


    return (
        <>
            <Head>
                <title>Bypass AI content detectors - GPTinf</title>
                <meta name="description" content="A paraphrasing tool to bypass AI content detectors, like GPTZero. GPTinf rephrases AI content to bypass GPTZero and avoid AI content detectors" />
                <meta name="keywords" content="bypass gptzero, bypass gpt zero, bypass ai, bypass ai content, ai content bypass, gpt zero bypass, avoid gptzero, avoid gpt zero, gpt zero, gpt inf, gptinf, gptzero, paraphrasing tool, rephrase chatgpt, rewrite chatgpt, rewrite chat gpt, rephrase chat gpt" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />


                <link rel="canonical" href="https://www.gptinf.com/" />
                <meta property="og:title" content="Avoid GPTZero detection - GPTinf" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="A paraphrasing tool to avoid chatGPT detector, like GPTZero, in one click" />
                <meta property="og:locale" content="en_US" />
                {/* <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2020/01/fb-open-graph-1.jpg" /> */}
                <meta property="og:url" content="https://www.gptinf.com" />

                <script dangerouslySetInnerHTML={{
                    __html: `(function(w){w.fpr=w.fpr||function(){w.fpr.q = w.fpr.q||[];w.fpr.q[arguments[0]=='set'?'unshift':'push'](arguments);};})(window);
                        fpr("init", {cid:"7h06v0e5"}); 
                        fpr("click");`}}></script>
                <script src="https://cdn.firstpromoter.com/fpr.js" async></script>

                <script type="application/ld+json"

                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "HowTo",
                            "name": "How to bypass AI content detection",
                            "description": "Instruction on how to bypass AI content detection in Turnitin, GPTZero, Originality AI, Writer, and Copyleaks.",
                            "totalTime": "PT2M",
                            "estimatedCost": {
                                "@type": "MonetaryAmount",
                                "currency": "USD",
                                "value": "0"
                            },
                            "supply": {
                                "@type": "HowToSupply",
                                "name": "AI content"
                            },
                            "tool": {
                                "@type": "HowToTool",
                                "name": "GPTinf"
                            },
                            "step": [{
                                "@type": "HowToStep",
                                "text": "Sign Up for a free trial at GPTinf",
                                "name": "Step 1",
                                "url": "https://app.gptinf.com/signup/start"
                            }, {
                                "@type": "HowToStep",
                                "text": "Insert the content inside a textbox and press the button",
                                "name": "Step 2",
                                "url": "https://app.gptinf.com"
                            }, {
                                "@type": "HowToStep",
                                "text": "Get results",
                                "name": "Step 3"
                            }]
                        }
                        )
                    }}
                />
                <script type="application/ld+json"

                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "name": "Bypass AI",
                            "mainEntity": [{
                                "@type": "Question",
                                "name": "What is AI content detection bypasser?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "AI content detection bypasser is a tool that is capable of bypassing AI content detectors. It is often done by paraphrasing, and GPTinf is the most powerful tool for this purpose."
                                }
                            }, {
                                "@type": "Question",
                                "name": "What is GPTinf?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "GPTinf is the best AI content bypasser."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is GPTinf?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "GPTinf is the best AI content bypasser."
                                }
                            }, {
                                "@type": "Question",
                                "name": "How do AI content detectors work?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In general, AI content detectors mark each word with a probability that it was written by AI. Then, often by using Machine Learning techniques the probability of containing AI content is calculated."
                                }
                            }, {
                                "@type": "Question",
                                "name": "How do you humanize AI content?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "To humanize AI content often slight changes are needed. These include using synonymous, rotating language structures, and sometimes mixing sentences in a smart way. GPTinf is the best option for this purpose."
                                }
                            }, {
                                "@type": "Question",
                                "name": "How to bypass AI content detectors?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "GPTinf is the best option for this purpose. To humanize AI content often slight changes are needed. These include using synonymous, rotating language structures, and sometimes mixing sentences in a smart way."
                                }
                            }]
                        })
                    }}

                />



            </Head >
            <main className={styles.main}>
                <Header links={[
                    { name: 'Pricing', url: 'https://app.gptinf.com/pricing' },
                    { name: 'Earn', url: '/earn' },
                    { name: 'Login', url: 'https://app.gptinf.com/login' },
                    { name: 'Sign Up', url: 'https://app.gptinf.com/signup/start', hide: true },
                ]} />

                <div className={styles.not__found}>
                    <h1>OOOPS</h1>
                    <h2>Page not found, please return to the <a href="/">main page</a> or go to the <a href="https://app.gptinf.com/">editor directly</a></h2>
                </div>
                <div style={{ height: 200 }}></div>
                <Footer />
            </main >
        </>
    );
}