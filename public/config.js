// Google Forms Configuration
window.formConfig = window.formConfig || {
  // Change formResponse URL format from your Google Form 
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScr-HTqHWhKP9Yj7fdFCXmDrkbiIZgH6mA6jIhXluR2jzRSkA/formResponse",
  
  // Field IDs from your Google Form (entry.xxxxxxx)
  fields: {
    name: "entry.2005620554",
    email: "entry.1045781291",
    phone: "entry.1166974658",
    subject: "entry.839337160",
    message: "entry.229144636"
  },
  
  // Customize form messages
  messages: {
    success: "Your message has been sent successfully. I'll get back to you soon.",
    error: "There was an error submitting the form. Your message was still sent, but please contact me directly if you don't hear back."
  }
}; 