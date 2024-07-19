import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import MetricsOverview from './MetricsOverview';
import SearchBar from './SearchBar';
import StoriesBar from './StoriesFeed';
import InsuranceForm from './InsuranceForm'; // Assuming InsuranceForm component is used for user-related actions
import AvatarCard from './AvtarCard';

function Home1() {
  const [loading, setLoading] = useState(true); // Initial loading state
  const [userData, setUserData] = useState(null); // User data state
  const [stories, setStories] = useState([]); // Stories state
  const [filteredStories, setFilteredStories] = useState([]); // Filtered stories state
  const navigate = useNavigate();

  const URL = process.env.REACT_APP_URL;

  useEffect(() => {
    getUser();
    getStories();
  }, []); // Empty dependency array means this effect runs only once on mount

  async function getUser() {
    try {
      const response = await axios({
        method: 'get',
        url: `${URL}/api/auth/user`,
        withCredentials: true,
      });
      if (response.data.success) {
        setUserData(response.data.data);
      }
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      navigate('/signin');
      setLoading(false); // Set loading to false in case of error
    }
  }

  async function getStories() {
    try {
      const response = await axios({
        method: 'get',
        url: `${URL}/api/stories`,
        withCredentials: true,
      });
      if (response.data.success) {
        setStories(response.data.data);
        setFilteredStories(response.data.data); // Initialize filtered stories
      }
    } catch (error) {
      console.error('Error fetching stories:', error);
    }
  }

  const handleSearch = (query) => {
    if (!query) {
      setFilteredStories(stories);
    } else {
      const filtered = stories.filter((story) =>
        story.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredStories(filtered);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Navbar/SearchBar Section */}
      <div className="bg-white shadow-lg p-4 flex">
        
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Card Section */}
      <div className="bg-white shadow-md p-4 overflow-y-auto flex-1">
        <div className="flex items-center mb-4">
          <h2 className="text-3xl font-bold">Your Feed</h2>
          <Link
            to="https://chat-gpt-pn1q.onrender.com/"
            className="ml-auto flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Optimization Solution
          </Link>
        </div>
        {/* Example: List of Posts */}
        <div className="flex flex-col gap-4">
          {filteredStories.map((story, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold">{story.title}</h3>
              <p>{story.content}</p>
              {/* Add like, comment, share buttons */}
              <div className="flex mt-2">
                <button className="mr-2 text-blue-500">Like</button>
                <button className="mr-2 text-blue-500">Comment</button>
                <button className="text-blue-500">Share</button>
              </div>
              <MetricsOverview />
            </div>
          ))}
        </div>
      </div>

      {/* AvatarCard Section */}
      <div className="bg-white shadow-lg p-4 flex-1">
        <AvatarCard />
        
      </div>
    </div>
  );
}

export default Home1;
