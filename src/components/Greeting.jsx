import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
    // console.log(randomMessage);
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button class="border-zinc-900 border-solid border-2" onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}