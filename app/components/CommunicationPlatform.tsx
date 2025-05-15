"use client";
import { FC, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  sender: {
    name: string;
    avatar: string;
    initial: string;
  };
  content: string;
  time: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const CommunicationPlatform: FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: {
        name: 'Alex Kim',
        avatar: '',
        initial: 'A',
      },
      content: "I've updated the inventory reports with the latest figures.",
      time: '10:42 AM',
    },
    {
      id: '2',
      sender: {
        name: 'Maya Rodriguez',
        avatar: '',
        initial: 'M',
      },
      content: "Thanks! I'll review them this afternoon and get back to you.",
      time: '11:15 AM',
    },
    {
      id: '3',
      sender: {
        name: 'Alex Kim',
        avatar: '',
        initial: 'A',
      },
      content: "Great! Also, I've suggested some optimizations for our warehouse layout based on the current inventory flow.",
      time: '11:32 AM',
    },
    {
      id: '4',
      sender: {
        name: 'Jason Taylor',
        avatar: '',
        initial: 'J',
      },
      content: "I'd like to see those suggestions. Can you share them in our team channel?",
      time: '11:45 AM',
    },
    {
      id: '5',
      sender: {
        name: 'Maya Rodriguez',
        avatar: '',
        initial: 'M',
      },
      content: "Yes, I'll do that now.",
      time: '11:51 AM',
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Features list
  const features: Feature[] = [
    {
      icon: "👥",
      title: "Team Channels",
      description: "Organize conversations by departments, projects, or tasks."
    },
    {
      icon: "📹",
      title: "Video Meetings",
      description: "Launch video calls directly from chat with one click."
    },
    {
      icon: "📎",
      title: "File Sharing",
      description: "Share and collaborate on documents within conversations."
    },
    {
      icon: "✅",
      title: "Task Creation",
      description: "Convert messages to tasks in your project boards."
    }
  ];

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    
  }, [messages]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Handle message submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;
    
    const newMessage: Message = {
      id: (messages.length + 1).toString(),
      sender: {
        name: 'You',
        avatar: '',
        initial: 'Y',
      },
      content: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages([...messages, newMessage]);
    setInputMessage('');
  };

  // Simulating typing indicator
  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
    setIsTyping(true);
    
    // Reset typing indicator after delay
    setTimeout(() => setIsTyping(false), 2000);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl border border-purple-100 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <svg 
                className="w-6 h-6 text-purple-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-purple-600">Real-Time Communication</span>
            <span className="text-gray-800"> Platform</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect your team with powerful messaging tools integrated directly into your ERP system, 
            eliminating the need for separate communication platforms.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Chat Interface */}
          <motion.div 
            className="w-full lg:w-7/12 bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Chat Header */}
            <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-medium">Inventory Team</span>
              </div>
              <div className="flex items-center">
                <button className="p-1 hover:bg-purple-700 rounded-full mr-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-purple-700 rounded-full">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {messages.map((message, index) => (
                  <motion.div 
                    key={message.id}
                    variants={itemVariants}
                    className={`flex mb-4 ${message.sender.name === 'You' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender.name !== 'You' && (
                      <div className="h-8 w-8 rounded-full bg-purple-600 text-white flex items-center justify-center mr-2 flex-shrink-0">
                        {message.sender.initial}
                      </div>
                    )}
                    <div className={`max-w-xs lg:max-w-md ${
                      message.sender.name === 'You' 
                        ? 'bg-purple-500 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg' 
                        : 'bg-white border border-gray-200 rounded-tr-lg rounded-tl-lg rounded-br-lg'
                    } p-3 shadow-sm`}>
                      {message.sender.name !== 'You' && (
                        <div className="font-medium text-sm text-gray-800 mb-1">{message.sender.name}</div>
                      )}
                      <p className={`text-sm ${message.sender.name === 'You' ? 'text-white' : 'text-gray-700'}`}>
                        {message.content}
                      </p>
                      <div className={`text-xs mt-1 text-right ${message.sender.name === 'You' ? 'text-purple-200' : 'text-gray-500'}`}>
                        {message.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex items-center text-gray-500 text-sm">
                    <div className="flex items-center space-x-1 mr-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    Someone is typing...
                  </div>
                )}
                <div ref={messageEndRef} />
              </motion.div>
            </div>
            
            {/* Chat Input */}
            <div className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex items-center">
                <button type="button" className="p-2 text-gray-500 hover:text-purple-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 mx-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={inputMessage}
                  onChange={handleTyping}
                />
                <button 
                  type="submit" 
                  className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
          
          {/* Features */}
          <div className="w-full lg:w-5/12">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-5 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg mb-4">Stay Connected Anywhere</h3>
              <p className="text-gray-600 text-sm mb-4">
                Nexus Core's real-time communication platform keeps your team connected whether they're in the office, at home, or on the go. All communications are secure, persistent and searchable.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mr-3 flex-shrink-0">
                      <span className="text-lg">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-800">{feature.title}</h4>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-md p-5 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="font-bold text-lg mb-3">Integration That Makes Sense</h3>
              <p className="text-sm opacity-90 mb-4">
                Unlike other ERPs that require separate communication tools, Nexus Core includes everything your team needs to collaborate effectively, all in one platform.
              </p>
              <button className="bg-white text-purple-600 text-sm font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-200">
                See how it works
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationPlatform;