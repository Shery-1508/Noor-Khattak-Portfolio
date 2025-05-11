// Function to submit form data to Google Forms
function submitGoogleForm(formData) {
  // Ensure formConfig is available
  if (!window.formConfig) {
    console.error("Form configuration not loaded");
    return false;
  }
  
  // Create a hidden iframe for form submission
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  
  // Create a form element
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = window.formConfig.formUrl;
  form.target = 'hidden-iframe';
  
  // Add form fields
  Object.keys(window.formConfig.fields).forEach(field => {
    if (formData[field]) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = window.formConfig.fields[field];
      input.value = formData[field];
      form.appendChild(input);
    }
  });
  
  // Set iframe name
  iframe.name = 'hidden-iframe';
  
  // Submit the form
  document.body.appendChild(form);
  form.submit();
  
  // Clean up
  setTimeout(() => {
    document.body.removeChild(form);
    document.body.removeChild(iframe);
  }, 1000);
  
  return true;
}

// Make the function globally available
window.submitGoogleForm = submitGoogleForm;

// Automatically attach to the contact form
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Only handle if not already handled by React
      if (!e.defaultPrevented) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
          name: contactForm.querySelector('[name="name"]').value,
          email: contactForm.querySelector('[name="email"]').value,
          phone: contactForm.querySelector('[name="phone"]').value,
          subject: contactForm.querySelector('[name="subject"]').value,
          message: contactForm.querySelector('[name="message"]').value
        };
        
        // Submit to Google Forms
        submitGoogleForm(formData);
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'bg-green-100 text-green-700 p-3 rounded-md mt-4';
        successMsg.textContent = window.formConfig ? window.formConfig.messages.success : "Your message has been sent successfully.";
        contactForm.appendChild(successMsg);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
          if (successMsg.parentNode === contactForm) {
            contactForm.removeChild(successMsg);
          }
        }, 5000);
      }
    });
  }
}); 