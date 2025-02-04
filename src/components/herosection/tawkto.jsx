// Define the openTawkToChat function
const openTawkToChat = () => {
  if (window.Tawk_API && typeof window.Tawk_API.toggle === "function") {
    window.Tawk_API.toggle();
  } else {
    console.error(
      "Tawk_API is not available or does not have the toggle method."
    );
  }
};

export default openTawkToChat;
