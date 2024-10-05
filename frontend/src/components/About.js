import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#c84772] text-center mb-8">About PCOS</h1>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Polycystic Ovary Syndrome (PCOS) is a hormonal disorder common among women of reproductive age. Women with PCOS may have infrequent or prolonged menstrual periods or excess male hormone (androgen) levels. The ovaries may develop numerous small collections of fluid (follicles) and fail to regularly release eggs.
          </p>

          <h2 className="text-2xl font-semibold text-[#111111] mb-4">Symptoms</h2>
          <p className="text-gray-700 mb-6">
            Common symptoms include irregular periods, excess androgen, polycystic ovaries, weight gain, and thinning hair. Every woman’s experience with PCOS can vary. It's important to consult a healthcare provider for personalized advice and management.
          </p>

          <h2 className="text-2xl font-semibold text-[#111111] mb-4">Causes</h2>
          <p className="text-gray-700 mb-6">
            The exact cause of PCOS is unknown, but factors like genetics, insulin resistance, and increased levels of inflammation can contribute to its development. Managing insulin levels and reducing inflammation through diet, exercise, and medication can help alleviate symptoms.
          </p>

          <h2 className="text-2xl font-semibold text-[#111111] mb-4">Treatment</h2>
          <p className="text-gray-700 mb-6">
            While there is no cure for PCOS, treatments can help manage the symptoms. Treatment options include lifestyle changes such as healthy eating and exercise, medications to regulate menstrual cycles or reduce androgen levels, and fertility treatments if pregnancy is desired.
          </p>
        </div>

          {/* Additional Resources */}
          <h2 className="text-2xl font-bold text-[#c84772] mt-12 mb-8 text-center">Additional Resources on PCOS</h2>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Know About PCOS */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#111111]">Know About PCOS</h3>
              <p className="text-gray-600">Learn the basics of PCOS through this informative video that covers symptoms, causes, and available treatments.</p>
              <a href="https://youtu.be/Az9lWdqebaU?si=PN4v-9L3pcm-415Q" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-[#a93359] text-white py-2 px-4 rounded hover:bg-[#d46e8f]">Watch Video</button>
              </a>
            </div>

            {/* Natural Remedies for PCOS */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#111111]">Natural Remedies for PCOS</h3>
              <p className="text-gray-600">Explore natural ways to manage PCOS symptoms through lifestyle changes, diet, and alternative treatments.</p>
              <a href="https://youtu.be/8vtsuqRhxjQ?si=jkUCaq11KBK02gco" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-[#a93359] text-white py-2 px-4 rounded hover:bg-[#d46e8f]">Watch Video</button>
              </a>
            </div>

            {/* Yoga For PCOS */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#111111]">Yoga For PCOS</h3>
              <p className="text-gray-600">Find out how practicing yoga can help manage PCOS symptoms and improve your overall well-being.</p>
              <a href="https://youtu.be/5lGS5SNzvS8?si=zlbvJsUmGcoIvXeu" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-[#a93359] text-white py-2 px-4 rounded hover:bg-[#d46e8f]">Watch Video</button>
              </a>
            </div>

            {/* Podcast for Women */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#111111]">Podcast for Women with PCOS</h3>
              <p className="text-gray-600">Listen to this podcast that addresses common concerns of women with PCOS, including management strategies and personal stories.</p>
              <a href="https://youtu.be/vq2ZUSvWjJ0?si=T7OC0Wx5rZoHwiG1" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-[#a93359] text-white py-2 px-4 rounded hover:bg-[#d46e8f]">Listen Now</button>
              </a>
            </div>

            {/* Article For PCOS */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#111111]">Comprehensive PCOS Article</h3>
              <p className="text-gray-600">Read this detailed article that covers the causes, symptoms, diagnosis, and treatment options for PCOS.</p>
              <a href="https://www.healthline.com/health/polycystic-ovary-disease" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-[#a93359] text-white py-2 px-4 rounded hover:bg-[#d46e8f]">Read Article</button>
              </a>
            </div>

            {/* How to Manage PCOS Symptoms */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#111111]">How to Manage PCOS Symptoms</h3>
              <p className="text-gray-600">This video guides you on how to effectively manage PCOS symptoms through diet, exercise, and medical interventions.</p>
              <a href="https://youtu.be/wY44LKLysHg?si=r49dlTeafYCxKh2R" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-[#a93359] text-white py-2 px-4 rounded hover:bg-[#d46e8f]">Watch Video</button>
              </a>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default About;
