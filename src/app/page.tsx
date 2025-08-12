import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      <Header />
      <main className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-center mb-8">
          I am a passionate developer with experience in building web applications.
        </p>
        <div className="flex space-x-4">
          <a href="/experience" className="bg-blue-500 text-white px-4 py-2 rounded">
            Experience
          </a>
          <a href="/projects" className="bg-green-500 text-white px-4 py-2 rounded">
            Projects
          </a>
          <a href="/contact" className="bg-purple-500 text-white px-4 py-2 rounded">
            Contact
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;