import React from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can book online through our Booking page or call us directly.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, credit/debit cards, and mobile payments.'
  },
  {
    question: 'Do you offer walk-ins?',
    answer: 'Yes, walk-ins are welcome but appointments are recommended.'
  },
  {
    question: 'Can I request a specific barber?',
    answer: 'Absolutely! Just mention your preferred barber when booking.'
  }
];

const FAQ = () => (
  <div className="faq-page">
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FAQ;
