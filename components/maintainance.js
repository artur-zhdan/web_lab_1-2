import React, { useState, useEffect, useRef } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import styles from '../styles/Editor.module.css'
import { writeCookie, readCookie } from '../utils/cookies.js';
import { countWords } from '../info/countTokens';
import { getMaxTokens, getMinTokens } from '../info/maxTokens';
import { Mixpanel } from '../utils/mixpanel';

export function Maintainance() {
    const [showDone, setShowDone] = useState(false);


    const handleFormSubmit = (e) => {
        // prevent default 
        e.preventDefault();

        fetch('api/save_email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: e.target.email.value,
            }),
        });

        setShowDone(true);
        setTimeout(() => {
            setShowDone(false);
        }, 1000);
    }

    return (
        <>
            <Head>
                <title>Avoid GPTZero detection - GPTinf</title>
                <meta name="description" content="A paraphrasing tool to avoid chatGPT detector, like GPTZero. GPTinf rephrases AI-content into an undetectable version for AI plagiarism detectors." />
                <meta name="keywords" content="bypass gptzero, bypass gpt zero, gpt zero bypass, avoid gptzero, avoid gpt zero, gpt zero, gpt inf, gptinf, gptzero, chatgpt, gpt3, gpt2, gpt, paraphrasing, paraphrase, paraphraser, paraphrasing tool, paraphrase generator, rewrite text, essay" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property="og:title" content="Avoid GPTZero detection - GPTinf" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="A paraphrasing tool to avoid chatGPT detector, like GPTZero, in one click" />
                <meta property="og:locale" content="en_US" />
                {/* <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2020/01/fb-open-graph-1.jpg" /> */}
                <meta property="og:url" content="https://www.gptinf.com" />
            </Head>
            <main className={styles.main}>
                <div className={styles.header}>
                    {/* <div>
                        <a href="/subscribe">Free</a>
                    </div> */}
                    <a href="https://patreon.com/GPTinf">Patreon</a>
                </div>
                <div className={styles.maintainance}>
                    <h2>
                        <p>Beta is closed.</p>
                        <p>Thank you for trying GPTinf. ❤️</p>
                        <p>Consider crowdfunding and getting few-months or life-time premium - <a href="https://patreon.com/GPTinf">Patreon</a></p>
                        <p>At this moment access is given only to <a href="https://patreon.com/GPTinf">patreons</a></p>
                        <p>General access will be given after the maintenance</p>
                    </h2>
                    <p>Get notified when we come back.</p>
                    <form onSubmit={handleFormSubmit}>
                        <input type="email" name="email" placeholder="Email address"></input>
                        <button type="submit" name="submit">{showDone ?
                            <span class="material-symbols-outlined">
                                done
                            </span>
                            :
                            'Submit'}</button>
                    </form>

                </div>
                <div className={styles.disclaimer}>
                    <h2>Disclaimer:</h2>
                    <p>The website, its developers, and owners are not responsible for any damages caused by the use of the website.</p>
                    <h2>Notes:</h2>
                    <p>Contact us: team.gptinf@gmail.com</p>
                    <p>This website is a rephrasing tool that allows you to avoid the detection of chatGPT / GPT2-3 generated text</p>
                    <h3>It rewrites chatGPT (rephrases chatGPT text) to bypass GPTZero</h3>
                    <p>Put text in the text-box, press hide, and your text will be rephrased into undetectable AI-content for AI-plagiarism detectors</p>
                    <p>Please, consider crowdfunding this project with <a href="https://patreon.com/GPTinf">Patreon</a></p>
                </div>
            </main>
        </>
    );
}