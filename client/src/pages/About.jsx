import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Ankit's Blog</h1>
        <p className="text-center text-xl font-semibold text-gray-700 mb-10">
          Ankit's Blog is more than just a collection of words on a screen; it's a reflection of my journey, a canvas where I paint the colors of my thoughts, experiences, and musings. Here, you'll find a diverse array of topics ranging from academic insights and problem-solving strategies to personal anecdotes and reflections on the world around us. I believe in the power of sharing ideas, in the magic of storytelling, and in the transformative potential of connection. Through Ankit's Blog, I aspire to create a space where minds meet, where perspectives collide, and where conversations spark inspiration and growth. Whether you're a fellow traveler on the road of life or a curious soul seeking inspiration, I invite you to join me on this journey. Together, let's embark on a quest for knowledge, creativity, and understanding. Let's explore the depths of our curiosity, embrace the beauty of our differences, and celebrate the richness of our shared humanity.
        </p>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-center">
            <img src="https://www.msstate.edu/sites/www.msstate.edu/files/2021-01/academicinsight_featured.jpg" alt="Academic Insights" className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Academic Insights</h2>
              <p className="text-gray-700">Dive into the world of academia with in-depth insights on various subjects, problem-solving strategies, and educational tips.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center">
            <img src="https://www.worksheetsplanet.com/wp-content/uploads/2023/12/What-is-an-Anecdote.jpg" alt="Personal Anecdotes" className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:ml-4" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Personal Anecdotes</h2>
              <p className="text-gray-700">Get a glimpse into my personal life with stories and reflections that highlight the experiences shaping my journey.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <img src="data:image/jpeg;base64,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" alt="Reflections on the World" className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Reflections on the World</h2>
              <p className="text-gray-700">Explore my thoughts and perspectives on various global issues, cultural phenomena, and societal changes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
