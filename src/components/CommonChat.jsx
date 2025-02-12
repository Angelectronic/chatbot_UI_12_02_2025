import Chatbot from "./Chatbot";

function CommonChat() {
    return (
        <div className="h-full w-full">
            <div className='flex flex-col min-h-full w-full max-w-3xl mx-auto px-4'>
                <Chatbot />
            </div>
        </div>
    );
  }
  
  export default CommonChat;