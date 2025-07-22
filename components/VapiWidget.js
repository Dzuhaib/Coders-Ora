"use client"
import { useEffect } from 'react';

const VapiWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }, []);

  return (
    <vapi-widget
      mode="voice"
      theme="dark"
      base-color="#000000"
      accent-color="#14B8A6"
      button-base-color="#000000"
      button-accent-color="#ffffff"
      radius="large"
      size="small"
      position="bottom-right"
      main-label="TALK WITH VANILLA"
      start-button-text="Start"
      end-button-text="End Call"
      require-consent="true"
      local-storage-key="vapi_widget_consent"
      show-transcript="false"
      public-key="92a53aea-04cf-4ca2-abaf-b559d268e51d"
      assistant-id="c7df7a34-422d-4603-8573-23ce47925dcd"
    ></vapi-widget>
  );
};

export default VapiWidget;
