import React, { useState, useRef, useEffect } from 'react';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Ask me anything about selling your license.' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const generateBotReply = (question) => {
    const q = question.toLowerCase();

    if (['hello', 'hi', 'hey'].includes(q)) return 'Hey there! 👋 How can I assist you today?';
    if (q.includes('how are you')) return "I'm great! Thanks for asking 😊 How can I help you today?";
    if (q.includes('what is your name') || q.includes("who are you"))
      return "I'm SoftBot 🤖 – your assistant for anything related to software license selling.";
    if (q.includes('what are you doing'))
      return "Helping people sell their unused software licenses. Want to try?";
    if (q.includes('thank')) return "You're most welcome! 🙌";
    if (q.includes('bye') || q.includes('goodbye')) return "Goodbye! Hope to hear from you soon 👋";

    if (q.includes('sell')) return 'To sell your license, just fill out the contact form. We’ll handle the rest!';
    if (q.includes('quote') || q.includes('valuation')) return 'We offer instant valuation once you upload your license details.';
    if (q.includes('support') || q.includes('help')) return 'Our support team is available 24/7 to assist you.';
    if (q.includes('payment')) return 'We pay via bank transfer or UPI within 24 hours after verification.';
    if (q.includes('license')) return 'We accept most popular software licenses – just tell us what you have.';

    return 'Great question! Our team will get back to you shortly or you can contact us via the form below.';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotReply(input);
      setMessages((prev) => [...prev, { from: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="font-semibold mb-2 text-lg text-gray-800 dark:text-white">💬 SoftBot Assistant</div>
          <div className="flex-1 overflow-y-auto mb-2 pr-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 px-3 py-2 rounded-md max-w-[70%] ${
                  msg.from === 'bot'
                    ? 'bg-gray-100 dark:bg-gray-700 text-left'
                    : 'bg-blue-600 text-white ml-auto text-right'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="text-sm text-gray-500 italic">Bot is typing...</div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="mt-2 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 text-lg"
      >
        {open ? '×' : '💬'}
      </button>
    </div>
  );
};

export default ChatWidget;
