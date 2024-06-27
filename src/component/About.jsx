import React from 'react';

const AboutPage = () => {
  return (
    <div className=" bg-transparent min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-transparent rounded-lg  p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">About Shaka Bank</h1>
        
        <div className="flex flex-col md:flex-row mb-8">
         
          <div>
            <p className="text-lg mb-4">
              <strong>Shaka Bank</strong> connects people together by providing seamless and innovative financial solutions. We are committed to making your life easier with our user-friendly banking services, ensuring that your financial needs are met with simplicity and efficiency.
            </p>
            <p className="text-lg mb-4">
              We envision a future where banking is not just a necessity but a delightful experience. We aim to be at the forefront of technological advancements, continuously upgrading our services to provide you with the best possible banking experience. Join us as we embark on this beautiful journey towards a brighter financial future.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Customer-Centricity:</strong> Our customers are at the heart of everything we do. We strive to exceed their expectations and deliver unparalleled service.</li>
            <li><strong>Innovation:</strong> We embrace change and continuously seek out innovative solutions to enhance our services and meet the evolving needs of our customers.</li>
            <li><strong>Integrity:</strong> We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings.</li>
            <li><strong>Community:</strong> We believe in the power of community and work tirelessly to connect people together, fostering a sense of belonging and mutual support.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p className="text-lg mb-4">
            <strong>Easy Banking:</strong> Our platform offers a simple, intuitive interface that makes managing your finances a breeze. Whether it's checking your balance, transferring funds, or paying bills, Shaka Bank makes banking easy.
          </p>
          <p className="text-lg mb-4">
            <strong>Low-Interest Loans:</strong> Need a loan? We've got you covered. Shaka Bank provides simple and easy loans at low-interest rates, helping you achieve your financial goals without the burden of high costs.
          </p>
          <p className="text-lg mb-4">
            <strong>Future-Ready:</strong> We are constantly upgrading our technology to ensure you have access to the latest innovations in banking. From mobile banking to AI-driven financial advice, we are committed to keeping you ahead of the curve.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Growth</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>2021:</strong> Launched with a vision to revolutionize banking.</li>
            <li><strong>2022:</strong> Reached 10,000 satisfied customers, thanks to our commitment to excellence and customer service.</li>
            <li><strong>2023:</strong> Introduced innovative loan products that have helped thousands of customers achieve their dreams with low-interest rates.</li>
            <li><strong>2024:</strong> Expanded our services to include AI-driven financial planning tools, providing our customers with cutting-edge technology to manage their finances better.</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Us</h2>
          <p className="text-lg">
            Thank you for choosing Shaka Bank. We are honored to be a part of your financial journey and are dedicated to providing you with the best banking experience possible. If you are not yet a customer, we invite you to join us and become a part of our beautiful journey towards a brighter financial future.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Q: How do I open an account with Shaka Bank?</h3>
              <p className="text-lg">A: Opening an account with Shaka Bank is easy! Just visit our sign-up page and follow the instructions. You can also visit any of our branches for assistance.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Q: What types of loans do you offer?</h3>
              <p className="text-lg">A: We offer a variety of loans, including personal loans, home loans, and business loans, all at competitive interest rates.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Q: How can I contact customer support?</h3>
              <p className="text-lg">A: You can contact our customer support via phone, email, or live chat. Visit our contact page for more details.</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
          <p className="text-lg mb-4">
            By using Shaka Bank’s services, you agree to comply with our terms and conditions. These terms are designed to ensure a safe and secure banking experience for all our customers.
          </p>
          <p className="text-lg mb-4">
            <strong>Account Usage:</strong> You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
          <p className="text-lg mb-4">
            <strong>Loans:</strong> All loans are subject to credit approval. Terms and conditions of loans may vary based on the loan type and customer profile.
          </p>
          <p className="text-lg mb-4">
            <strong>Privacy:</strong> We are committed to protecting your privacy. Your personal information will be used in accordance with our privacy policy.
          </p>
          <p className="text-lg mb-4">
            For more detailed information, please refer to our full terms and conditions available on our website.
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default AboutPage;
