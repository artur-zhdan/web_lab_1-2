//<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeBtsDUmvxEvnVBVZf16DYSokWcqd8u3FMjL2Dcsn3xQE42aA/viewform?embedded=true" width="640" height="1255" frameborder="0" marginheight="0" marginwidth="0">Завантаження…</iframe>



import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Form.module.css'
import { useInView } from 'react-intersection-observer';
import { GetMixpanelSource, Mixpanel, MixpanelSource } from '../utils/mixpanel';
import Footer from '../utils/components/Footer';


export default function Api() {


    return (
        <>
            <Head>
                <title>Bypass GPTZero - GPTinf</title>
                <meta name="description" content="A paraphrasing tool to avoid chatGPT detector, like GPTZero. GPTinf rephrases AI content to bypass GPTZero and makes an unbeatable version for AI plagiarism detectors." />
                <meta name="keywords" content="bypass gptzero, bypass gpt zero, gpt zero bypass, avoid gptzero, avoid gpt zero, gpt zero, gpt inf, gptinf, gptzero, paraphrasing tool, rephrase chatgpt, rewrite chatgpt, rewrite chat gpt, rephrase chat gpt" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property="og:title" content="Avoid GPTZero detection - GPTinf" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="A paraphrasing tool to avoid chatGPT detector, like GPTZero, in one click" />
                <meta property="og:locale" content="en_US" />
                {/* <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2020/01/fb-open-graph-1.jpg" /> */}
                <meta property="og:url" content="https://www.gptinf.com" />
            </Head>
            <main className={styles.main} style={{ scrollBehavior: 'smooth' }}>
                <div className={styles.header}>
                    <>
                        <a href="/">Main</a>
                        <a href="https://app.gptinf.com/pricing">Pricing</a>
                        <a href="https://app.gptinf.com">Login</a>
                    </>
                </div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeBtsDUmvxEvnVBVZf16DYSokWcqd8u3FMjL2Dcsn3xQE42aA/viewform?embedded=true" width="640" height="1255" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


                <div style={{ height: 200 }}></div>
                <Footer />
            </main >
        </>
    );
}