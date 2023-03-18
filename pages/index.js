import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './elements/Header';
import 'tailwindcss/tailwind.css';
import TextInput from './elements/TextInput';
import { useState } from 'react';
import TwitterPost from './elements/TwitterPost';
import Videos from './elements/Videos';



export default function Home() {
  const [chatHistory, setChatHistory] = useState([]);
  console.log(chatHistory)

  function addMessage(message) {
    setChatHistory([...chatHistory, message]);
  }
  const [vidoesArray, setVidoesArray] = useState(["WSLMN6g_Od4", "5bvl0nU9uFQ", "Nl0HqlbX7dc"])
 

  return (
    <>
      <Head>
        <title>Charlie - Reelyapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className="flex justify-center">
          <div className="w-1/2">
            <TwitterPost />
            <Videos videoIds={vidoesArray}/>
            {chatHistory.map((message, index) => (
              <div key={index} className={`flex mb-2 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className={`px-4 py-2 rounded-lg ${index % 2 === 0 ? "bg-white" : "bg-gray-200"} ${index % 2 === 0 ? "mr-2" : "ml-2"}`}>
                  {message}
                </div>
              </div>
            ))}
          </div>
        </div>
        <TextInput onMessageSubmit={addMessage}/>
      </div>
    </>
  )
}
