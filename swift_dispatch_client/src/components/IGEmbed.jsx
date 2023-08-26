import React, { useState, useEffect, useRef } from 'react';
import { DivProps } from 'react-html-props';
import styled from 'styled-components';

const defaultIgVersion = '14';
const defaultLinkText = 'View this post on Instagram';
const defaultProcessDelay = 100;
const defaultRetryInitialDelay = 1000;
const defaultRetryBackoffMaxDelay = 30000;
const defaultBackgroundBlurAnimationDuration = 700;


export interface IGEmbedProps extends DivProps {
    url: string;
    backgroundUrl?: string;
    igVersion?: string;
    linkText?: string;
    processDelay?: number;
    scriptLoadDisabled?: boolean;
    linkTextDisabled?: boolean;
    backgroundBlurDisabled?: boolean;
    backgroundBlurAnimationDisabled?: boolean;
    backgroundBlurAnimationDuration?: number;
    spinnerDisabled?: boolean;
    softFilterDisabled?: boolean;
    retryDisabled?: boolean;
    retryInitialDelay?: number;
    retryBackoffMaxDelay?: number;
}

const IGEmbed: React.FC<IGEmbedProps> = ({
                                             url,
                                             backgroundUrl,
                                             igVersion = defaultIgVersion,
                                             linkText = defaultLinkText,
                                             processDelay = defaultProcessDelay,
                                             scriptLoadDisabled = false,
                                             linkTextDisabled = false,
                                             backgroundBlurDisabled = false,
                                             backgroundBlurAnimationDisabled = false,
                                             backgroundBlurAnimationDuration = defaultBackgroundBlurAnimationDuration,
                                             spinnerDisabled = false,
                                             softFilterDisabled = false,
                                             retryDisabled = false,
                                             retryInitialDelay = defaultRetryInitialDelay,
                                             retryBackoffMaxDelay = defaultRetryBackoffMaxDelay,
                                             ...divProps
                                         }) => {
    const [initialized, setInitialized] = useState(false);
    const [processTime, setProcessTime] = useState(-1);
    const [retryDelay, setRetryDelay] = useState(retryInitialDelay);
    const [retrying, setRetrying] = useState(false);
    const [retryTime, setRetryTime] = useState(-1);
    const uuidRef = useRef(generateUUID());

    useEffect(() => {
        const win: Window | undefined = typeof window !== 'undefined' ? window : undefined;
        if (win && processTime >= 0) {
            if (typeof win.instgrm !== 'undefined' && win.instgrm.Embeds) {
                win.instgrm.Embeds.process();
            } else {
                console.error('Instagram embed script not found. Unable to process Instagram embed:', url);
            }
        }
    }, [processTime, url]);

    useEffect(() => {
        let timeout: number | undefined;
        if (!initialized) {
            if (typeof processDelay !== 'undefined' && processDelay > 0) {
                timeout = window.setTimeout(() => {
                    setProcessTime(Date.now());
                    setInitialized(true);
                }, Math.max(0, processDelay));
            } else if (processDelay === 0) {
                setProcessTime(Date.now());
                setInitialized(true);
            }
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [initialized, processDelay]);

    useEffect(() => {
        let timeout: number | undefined;
        if (initialized && !retryDisabled && typeof document !== 'undefined') {
            timeout = window.setTimeout(() => {
                const preEmbedElement = document.getElementById(uuidRef.current);
                if (preEmbedElement) {
                    setProcessTime(Date.now());
                    setRetryDelay(Math.max(0, Math.min(retryDelay * 2, retryBackoffMaxDelay)));
                    setRetryTime(Date.now());
                    setRetrying(true);
                }
            }, Math.max(0, retryDelay));
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [initialized, retryDelay, retryDisabled, retryBackoffMaxDelay]);

    const Wrapper = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 100%;
  `;

    const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundUrl});
    background-size: cover;
    filter: ${backgroundBlurDisabled ? 'none' : 'blur(30px)'};
    opacity: ${backgroundBlurAnimationDisabled ? 1 : 0};
    transition: opacity ${backgroundBlurAnimationDuration}ms;
  `;

    const Spinner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;

    @keyframes spin {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `;

    const SoftFilter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    filter: blur(4px);
  `;

    const RetryContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  `;

    const RetryButton = styled.button`
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;

    return (
        <Wrapper {...divProps}>
            {backgroundUrl && <Background />}
            {!initialized && !retrying && spinnerDisabled && <Spinner />}
            {!initialized && !retrying && !spinnerDisabled && softFilterDisabled && <SoftFilter />}
            {retrying && (
                <RetryContainer>
                    <p>Failed to load Instagram embed.</p>
                    <p>
                        <RetryButton onClick={() => setRetrying(false)}>Retry</RetryButton>
                    </p>
                </RetryContainer>
            )}
            <div id={uuidRef.current} />
        </Wrapper>
    );
};

export default IGEmbed;
