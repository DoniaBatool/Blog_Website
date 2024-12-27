export const OtherContacts = () => {
    return (
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Other Ways to Reach Us</h2>
        <p className="text-gray-700">
          Prefer a direct email? Drop us a line at{' '}
          <a
            href="mailto:yourname@example.com"
            className="text-blue-500 underline hover:text-blue-700"
          >
            doniabatool@gmail.com
          </a>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          >
            Instagram
          </a>
        </div>
      </section>
    );
  };
  