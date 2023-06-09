import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard"

import './style.css'
function App() {
    const StartListening=()=>SpeechRecognition.startListening({ continuous: true ,language:'en-IN'})
    const StopListening=()=>SpeechRecognition.stopListening();

    const [text,setText]=useState('');
    const [isCopied, setCopied] = useClipboard(text)

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

    if (!browserSupportsSpeechRecognition) {
        return null
      }
  return (
  
    <div className='top-container'>
      <div className='container'>
        <h2 className='heading'>Speech To Text Converter</h2>
        <div className='main-content' onClick={()=>setText(transcript)}>
            {
                transcript
            }
        </div>
        <div className='btn-style'>
        <button class="button-28" onClick={setCopied} role="button">
        {isCopied ? "Copied" : "Copy to Clipboard"}
        </button>
        <button class="button-28" onClick={StartListening} role="button">Start</button>
        <button class="button-28" onClick={StopListening} role="button">Stop</button>

        </div>
        
        </div>
    </div>

   
  )
}

export default App