import React from 'react';

const LoadingStyle = () => (
    <style>
        {`
      .App {
        text-align: center;
      }
      .App-logo {
        height: 40vmin;
        pointer-events: none;
      }

      @media (prefers-reduced-motion: no-preference) {
        .App-logo {
          animation: App-logo-spin infinite 20s linear;
        }
      }

      .App-header {
        background-color: white;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      }

      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}
    </style>
);

export default LoadingStyle;