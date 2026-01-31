const WhatsAppButton = () => {
  const whatsappNumber = "918260607163"; // Radhaareaalty WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Radhaareaalty%2C%20I%20would%20like%20to%20know%20more%20about%20your%20properties.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-40 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-fade-in"
      style={{
        animation: "float 3s ease-in-out infinite",
      }}
      title="Chat with us on WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png"
        alt="WhatsApp"
        className="w-16 h-16 rounded-full drop-shadow-lg"
      />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;
