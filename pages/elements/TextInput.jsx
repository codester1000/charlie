import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function TextInput (props) {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.onMessageSubmit(message);
    setMessage('');
  }

  function handleChange(event) {
    setMessage(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="fixed bottom-0 w-full p-2 flex justify-center items-center">
      <div className="relative w-4/5">
        <input type="text" value={message} onChange={handleChange} placeholder="Type your message..." className="w-full p-2 pr-10 border border-gray-400 rounded-lg" />
        <button type="submit" className="absolute top-0 right-0 h-full px-3 text-black focus:outline-none w-10">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </form>

  );
}

