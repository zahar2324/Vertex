import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Введіть ваше ім\'я';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Введіть номер телефону';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Невірний формат телефону';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Введіть повідомлення';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Повідомлення має містити мінімум 10 символів';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    // Handle form submission
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      // Reset form
      setFormData({ name: '', phone: '', message: '' });
      setErrors({});
      setIsSubmitting(false);
      // Show success message
      alert('Дякуємо за заявку! Ми зв\'яжемося з вами найближчим часом.');
      if (onClose) onClose();
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        Ваше замовлення
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="modal-name" className="block text-gray-700 font-semibold mb-2">
            Ім'я
          </label>
          <input
            type="text"
            id="modal-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition ${
              errors.name ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
            }`}
            placeholder="Введіть ваше ім'я"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="modal-phone" className="block text-gray-700 font-semibold mb-2">
            Телефон
          </label>
          <input
            type="tel"
            id="modal-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition ${
              errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
            }`}
            placeholder="+38 (0XX) XXX-XX-XX"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="modal-message" className="block text-gray-700 font-semibold mb-2">
            Повідомлення
          </label>
          <textarea
            id="modal-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
            }`}
            placeholder="Опишіть ваш проект або залиште питання..."
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-lg font-semibold text-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? (
            'Відправка...'
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              ВІДПРАВИТИ
            </>
          )}
        </button>
      </form>
      
      <div className="mt-2 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3 text-center font-semibold animate-bounce">
          <span className="inline-block animate-pulse">💬</span> Або зв'яжіться з нами напряму: <span className="inline-block animate-pulse">💬</span>
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://t.me/vlmdigital"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Telegram
          </a>
          <a
            href="viber://chat?number=+380506782481"
            className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition text-sm"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Viber
          </a>
          <a
            href="https://wa.me/380506782481"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-sm"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/vlmdigital"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition text-sm"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Instagram
          </a>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mt-4 text-center">
        Ваші дані захищені політикою конфіденційності компанії VLM Digital.
      </p>
    </div>
  );
}

export default ContactForm;

