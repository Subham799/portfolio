import { forwardRef, useState } from 'react';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server here
    console.log('Form submitted:', formData);

    // For demo purposes, simulate a form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Message sent successfully! I will get back to you soon.'
    });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section ref={ref} id="contact" className="section-container section-animate">
      <h1 className="heading text-3xl md:text-4xl font-bold text-center mb-12">Contact Me</h1>

      <div className="contact-wrapper max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="direct-contact-container p-6 bg-opacity-10 bg-white backdrop-blur-sm rounded-xl">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>

          <ul className="contact-list space-y-4 mb-8">
            <li className="list-item flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="contact-text phone">
                <a href="tel:7037422564" title="Give me a call">+91-7037422564</a>
              </span>
            </li>

            <li className="list-item flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="contact-text gmail">
                <a href="mailto:subhamkandpal799@gmail.com" title="Send me an email">subhamkandpal799@gmail.com</a>
              </span>
            </li>

            <li className="list-item flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="contact-text address">
                Kapkote, Uttarakhand
              </span>
            </li>
          </ul>

          <div className="social-media-list flex space-x-4">
            <a href="https://github.com/Subham799" target="_blank" rel="noreferrer" className="p-3 bg-gray-800 hover:bg-primary transition rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/subham-kandpal" target="_blank" rel="noreferrer" className="p-3 bg-gray-800 hover:bg-primary transition rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>

            <a href="https://codeforces.com/profile/subhamkandpal799" target="_blank" rel="noreferrer" className="p-3 bg-gray-800 hover:bg-primary transition rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm7.5 0c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5h3zm7.5 0c.828 0 1.5.672 1.5 1.5v10.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5h3z"/>
              </svg>
            </a>
          </div>
        </div>

        <form id="contact-form" className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control w-full bg-opacity-10 bg-white backdrop-blur-sm p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                id="name"
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group mb-4">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control Mail w-full bg-opacity-10 bg-white backdrop-blur-sm p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                id="email"
                placeholder="E-MAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group mb-6">
            <div className="col-sm-12">
              <textarea
                className="form-control w-full bg-opacity-10 bg-white backdrop-blur-sm p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                rows={5}
                id="message"
                placeholder="MESSAGE"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {formStatus.submitted && (
            <div className={`mb-4 p-3 rounded-lg text-center ${formStatus.error ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
              {formStatus.message}
            </div>
          )}

          <button
            className="btn btn-primary send-button w-full bg-primary hover:bg-secondary text-white transition p-3 rounded-lg flex items-center justify-center"
            id="submit"
            type="submit"
          >
            <div className="alt-send-button flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
