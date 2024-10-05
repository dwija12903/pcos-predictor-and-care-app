import React from 'react';

function MyStory() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h2 className="text-4xl font-bold text-[#c84772] text-center mb-8">My PCOS Journey</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          My PCOS journey began when I was 15 or 16 years old, experiencing stomach aches after drinking milk. Initially, I thought it was just a temporary issue, but little did I know that it was the beginning of a deeper health concern. As I grew older, I faced irregular periods, anxiety, and stress, which compounded my symptoms.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          By the time I entered college, the symptoms had worsened—weight gain, severe acne, and digestive issues became part of my daily life. The stress of academics and adjusting to a new environment made things even more challenging. After an unfortunate experience with a gynecologist, who prescribed treatments that only worsened my symptoms, I realized how important it is to seek proper medical guidance and take charge of my own health.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          My turning point came when I found a new doctor and embraced lifestyle changes like cutting out refined & processed foods, practicing yoga, and prioritizing sleep. These changes helped me regain control over my body and mind. My skin cleared up, my hormones balanced, and I finally started feeling like myself again.
        </p>

        <h3 className="text-2xl font-semibold text-[#a93359] mt-8 mb-4">What I’ve Learned</h3>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
          <li>Listening to your body’s signals is crucial—don’t ignore the small signs.</li>
          <li>Managing stress is just as important as physical health.</li>
          <li>Finding the right medical support can make all the difference.</li>
          <li>Healthy lifestyle choices, such as proper diet, sleep, and exercise, play a huge role in recovery.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#a93359] mt-8 mb-4">Why This Project Matters</h3>
        <p className="text-lg leading-relaxed mb-6">
          This project stems from my personal journey with PCOS, and my desire to create a supportive space for others facing similar struggles. I want to help others by sharing information, resources, and my own experiences, so that they can take charge of their health earlier and more effectively than I did.
        </p>
      </div>
    </div>
  );
}

export default MyStory;