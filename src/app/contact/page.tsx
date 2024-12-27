import { ContactForm } from '@/components/ContactForm';
import { OtherContacts } from '@/components/OtherContacts';

const ContactPage = () => {
  return (
    <main className="flex flex-col items-center space-y-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-12 mt-4 mb-4">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Have questions or just want to say hi? We&apos;d love to hear from you!
        </p>
      </header>
      <ContactForm />
      <OtherContacts />
    </main>
  );
};

export default ContactPage;
