import { useState, useEffect, useRef } from "react";
import axios from "axios";
import img from '../img/img1.jpeg';

function ChatBot() {
    const [message, setMessage] = useState("");
    const [conversation, setConversation] = useState([]);
    const [disclaimerVisible, setDisclaimerVisible] = useState(true); // Default to true
    const chatBoxRef = useRef(null);
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    const handleSendMessage = async () => {
        if (!message) return;

        // Add user's message to the conversation
        setConversation((prev) => [...prev, { type: "user", text: message }]);

        try {
            const res = await axios.post(`${backendUrl}/chatbot`, { message });
            // Add chatbot response to the conversation
            setConversation((prev) => [...prev, { type: "bot", text: res.data.response }]);

        } catch (error) {
            console.error("Error communicating with chatbot", error);
        }

        // Clear input field
        setMessage("");
    };

    useEffect(() => {
        chatBoxRef.current?.scrollTo({ top: chatBoxRef.current.scrollHeight, behavior: 'smooth' });
    }, [conversation]);

    // Hide the disclaimer after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setDisclaimerVisible(false);
        }, 5000);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (

        <main className='p-5 min-h-screen bg-cover bg-center relative' style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10">
                <div className="flex justify-center">
                    <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full flex flex-col">
                        <h1 className="text-2xl font-bold text-center mb-4 uppercase text-[#c84772]">PCOS Chatbot</h1>

                        <div
                            ref={chatBoxRef}
                            className="flex-grow overflow-y-auto mb-4 p-4 border border-[#a93359] rounded-lg bg-[#fce4ec] space-y-4"
                            style={{ maxHeight: "400px" }}>
                            <div className="max-w-xs px-4 py-2 rounded-lg bg-white text-gray-900 shadow">
                                Hello! I'm your PCOS assistant. How can I help you today?
                            </div>
                            {conversation.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-xs px-4 py-2 rounded-lg ${msg.type === "user"
                                            ? "bg-[#c84772] text-white"
                                            : "bg-white text-gray-900"
                                            } shadow`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="flex-grow px-4 py-2 border border-[#a93359] rounded-md shadow-sm focus:ring-[#d46e8f] focus:border-[#d46e8f] sm:text-sm"
                                placeholder="Type a message..."
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-[#c84772] text-white py-2 px-4 rounded-md hover:bg-[#a93359] focus:outline-none"
                            >
                                Send
                            </button>
                        </div>
                    </div>

                    {/* Disclaimer Button */}
                    <div className="fixed bottom-4 right-4">
                        <button
                            onClick={() => setDisclaimerVisible(!disclaimerVisible)}
                            className="bg-[#c84772] text-white py-2 px-4 rounded-full shadow-md hover:bg-[#a93359] focus:outline-none"
                        >
                            Disclaimer
                        </button>

                        {/* Disclaimer Box */}
                        {disclaimerVisible && (
                            <div className="absolute bottom-12 right-0 w-64 p-4 bg-white border border-[#a93359] rounded-md shadow-lg">
                                <p className="text-sm text-gray-700">
                                    This chatbot is only designed for PCOS-related queries. For medical advice, please consult a healthcare provider.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ChatBot;