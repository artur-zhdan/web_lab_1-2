import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Landing.module.css'
import { useInView } from 'react-intersection-observer';
import { GetMixpanelSource, Mixpanel, MixpanelSource } from '../utils/mixpanel';
// import Footer from '../utils/components/Footer';
import { Maintenance } from '../utils/components/maintenance.js';
import Notification from '../utils/components/NotificationsComponent';

import Header from '../utils/components/HeaderComponent';
import Footer from '../utils/components/FooterComponent';
import Section0 from '../utils/components/Section0';
import Section1 from '../utils/components/Section1';
import Section2 from '../utils/components/Section2';
import Section3 from '../utils/components/Section3';
import Section4 from '../utils/components/Section4';
import SectionSEO1 from '../utils/components/SectionSEO1';

function Maintenance_() {
    return Maintenance();
}

export default function Landing() {

    const FAQ = [
        {
            question: 'How do I make AI content undetectable?', answer: `Given that an average detector looks for repetitive sentence structures and common word patterns that align with AI models, you can bypass AI detection by rephrasing your text, i.e., replacing repetitive word patterns and grammatical structures with a more diverse language, adding transitions, using more casual phrasing, etc.
However, you don’t have to spend hours rewriting AI content with reliable tools like GPTinf. GPTinf uses smart algorithms to rephrase conventional word patterns and sentence structures specific for AI-produced content, resulting in an undetectable, humanized piece to bypass virtually any detector.` },
        { question: 'What software is used to humanize AI content?', answer: 'You can use GPTinf to humanize AI content and bypass any detector. GPTinf is a user-friendly, affordable tool that can help you convert any AI text into a human piece in a few clicks.' },
        { question: 'What is the quality of the final result?', answer: 'GPTinf has outsmarted detectors in 96% of cases so far. The tool preserves the overall meaning of the text while replacing repeating AI structures and predictable word patterns. For the best possible result, we recommend reviewing the text with a grammar-checking tool.' },
        {
            question: 'How do AI detectors work?', answer: `AI detection software uses the same language models as AI-powered content creation tools. It employs ML (machine learning) and NLP (natural language processing) to analyze content and identify patterns.
Each detector is trained on massive datasets of human-written and AI-generated texts, with its algorithm working on the assumption that content produced by artificial intelligence has certain features, such as repetitiveness, lack of semantic meaning, conventional word patterns, etc.
The detector analyzes content for a range of parameters, including wording, sentence structures, and predictability, and compares it with the database of texts produced by humans and artificial intelligence.` },
        {
            question: 'Can I trust AI detection tools today?', answer: `An artificial intelligence content detector typically provides a score showing the likeliness of the text being produced by AI. The accuracy of detection tools varies depending on the tool itself and the content complexity. Even the most advanced AI detectors aren’t foolproof and sometimes provide false results.
It’s important to understand that the detectors aren’t equal. They can utilize different models, leading to different results. Moreover, some detectors work better than others, and it often happens that detectors that generally work well have issues with identifying content produced by both a human and artificial intelligence.
Given that, you can’t entirely rely on AI detectors.` },
        {
            question: 'Which GPTinf pricing plan should I choose?', answer: `Firstly, analyze how many words you usually need to rewrite monthly. We offer many plans based on the number of words available to rephrase per month: 10,000, 20,000, 35,000, 50,000, 75,000, 100,000, 150,000, 200,000, 300,000, and 500,000. Also, consider how much you want to invest: for instance, a 10,000-word plan will cost you $12/month, while you'll have to pay $99 if you're going to humanize 100,000 per month.
If you subscribe to our tool for a year, you'll get a good discount; for example, an annual subscription for rephrasing 100,000 words monthly will cost you only $66/month.
But that's not all: we offer a free trial so that you can check out how GPTinf works and make a more informed decision about choosing your best plan.` },
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



        const script1 = document.createElement('script');
        script1.src = 'https://cdn.paddle.com/paddle/paddle.js';
        script1.async = true;
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
        window.Paddle.Setup({
          seller: 166485,
          pwAuth: '829218e4697e90c6bc0928f6bec020b3',
          pwCustomer: {}
        });
        `;
        script2.async = true;
        document.body.appendChild(script2);
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
                <title>Bypass AI detectors - GPTinf</title>
                <meta name="description" content="ᐉ A paraphrasing tool to bypass AI detectors, like GPTZero, in one click. ✓ GPTinf rephrases AI content to bypass and avoid AI detection." />
                <meta name="keywords" content="bypass gptzero, bypass gpt zero, bypass ai, bypass ai detection, bypass ai content, ai content bypass, gpt zero bypass, avoid gptzero, avoid gpt zero, gpt zero, gpt inf, gptinf, gptzero, paraphrasing tool, rephrase chatgpt, rewrite chatgpt, rewrite chat gpt, rephrase chat gpt" />
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
                            "name": "How to bypass AI detection",
                            "description": "Instruction on how to bypass AI detection in Turnitin, GPTZero, Originality AI, Writer, and Copyleaks.",
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

                {/* <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': "https://schema.org/",
                            '@type': "WebSite",
                            'name': "GPTinf",
                            'url': "https://www.gptinf.com/",
                            'potentialAction': {
                                '@type': "SearchAction",
                                'target': "{search_term_string}",
                                'query-input': "required name=search_term_string"
                            }
                        }
                        )
                    }}
                /> */}
                <script type="application/ld+json"

                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "name": "Bypass AI",
                            "mainEntity": [{
                                "@type": "Question",
                                "name": "What is AI detection bypasser?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "AI detection bypasser is a tool that is capable of bypassing AI detectors. It is often done by paraphrasing, and GPTinf is the most powerful tool for this purpose."
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
                                "name": "How do AI detectors work?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In general, AI detectors mark each word with a probability that it was written by AI. Then, often by using Machine Learning techniques the probability of containing AI content is calculated."
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
                                "name": "How to bypass AI detectors?",
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
                {/* <Notification /> */}
                <Header links={[
                    { name: 'Pricing', url: 'https://app.gptinf.com/pricing' },
                    { name: 'Earn', url: '/earn' },
                    { name: 'Login', url: 'https://app.gptinf.com/login' },
                    { name: 'Sign Up', url: 'https://app.gptinf.com/signup/start', hide: true },
                ]} />
                {/* <div className={styles.section0}>
                    <h1>Bypass AI detection</h1>
                    <div className={styles.gradient_wrap1}>
                        <div className={styles.mainButton} onClick={() => { window.location.href = "https://app.gptinf.com/signup/start" }}>
                            Start free trial
                        </div>
                    </div>
                </div> */}
                <Section0 h1="Bypass AI detection" />
                <p className={styles.section0_bottom}>Say hello to the future of content generation with GPTinf, an innovative tool engineered to make AI-generated content undetectable. Start creating authentic, engaging content today — in just a couple of clicks.</p>

                <Section1 />
                <div style={{ height: 200 }}></div>
                <SectionSEO1 h2="What is AI detection?" p={`
AI detection involves using advanced machine learning algorithms and models to identify AI-generated content. The primary goal of an AI detector is to recognize specific characteristics in the text.
A typical AI detector is based on a language model similar to models used in AI writing tools. Detectors analyze two things: perplexity and burstiness. The lower they are, the more likely that the content is AI-generated.
Perplexity refers to how unpredictable content is, i.e., how likely it is to confuse an average reader. AI tools like ChatGPT create content with low perplexity. As a result, a text makes sense and reads smoothly, however, it’s quite predictable. On the other hand, human writing has a higher level of perplexity.
Burstiness means how sentence structure and length vary throughout a text. Little variation in sentence structure and length indicates low burstiness, and vice versa. Because language models use the most suitable word to come next, AI tools produce sentences of average length filled with the most common structures. Low levels of burstiness imply that content is AI-generated.
`} />
                <SectionSEO1 h2="How to bypass AI detection?" p={`
The only way to bypass AI detectors is to paraphrase AI-generated content, increasing diversity in vocabulary, grammar, and sentence structures throughout the text. Rewriting an AI-generated text manually can take ages, and not many can afford it in this fast-paced world. This is where GPTinf — the number one tool for creating undetectable AI content — comes to save the day.
Using GPTinf is as easy as one-two-three: everything you need to do is paste your AI content, press the button, and get an undetectable, humanized piece.
`} reversed nonsticky />
                <SectionSEO1 h2="What is GPTinf?" p={`
GPTinf is a powerful AI detector bypassing tool. It paraphrases the content to remove conventional wording, repetitive sentence structures, etc., replacing them with human language.`} nonsticky />

                {/* <h2 style={{ width: '100%', textAlign: 'center', color: 'var(--white)' }}>What is GPTinf?</h2> */}
                {/* <p className={styles.section0_bottom}>GPTinf is a powerful AI detector bypassing tool. It paraphrases the content to remove conventional wording, repetitive sentence structures, etc., replacing them with human language.	</p> */}

                <div style={{ height: 100 }}></div>
                <div className={styles.section5}>
                    <div className={styles.container}>
                        <h2 className={styles.faqTitle}>FAQ</h2>
                        {FAQ.map((faq, i) => {
                            return (
                                // <div key={i} className={styles.faqItem} onClick={() => { let isOpen_ = isOpen; isOpen_[i] = !isOpen_[i]; setIsOpen(isOpen_); console.log(isOpen_, isOpen[i]) }}>
                                <div key={i} className={styles.faqItem} onClick={() => { isOpen[i][1](!isOpen[i][0]) }}>
                                    <h3 className={styles.question}>{faq.question}</h3>
                                    <p className={`${styles.answer} ${isOpen[i][0] ? styles.open : styles.closed}`}>{faq.answer.split('\n').map(part => <>{part}<br /><br /></>)}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <h2 style={{ color: 'var(--white)', fontSize: 32, width: '100%', textAlign: 'center', marginTop: 300 }}>Why GPTinf?</h2>
                <Section2 />
                <Section3 transparent={false} message="Reliable" />
                <div className={styles.sectionSEO01}><p>We’ll help you create beautiful human content to outsmart most detectors without breaking the bank.</p><h3>Affordable</h3></div>
                <div className={styles.sectionSEO02} style={{ marginTop: 200 }}><h3>Flexible pricing</h3><p>You can pay monthly or annually and adjust the number of words to be able to convert each month: the more words, the cheaper the plan.</p></div>
                <Section4 message="Create super undetectable AI content" />
                <div style={{ height: 200 }}></div>
                <Footer />
            </main >
        </>
    );
}