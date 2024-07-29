import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import getAllPost from '../services/GetAllBlogs'; // Adjust the path as necessary

function BlogArticle() {
    const [allPosts, setAllPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              fetch("https://nodenewapi.vercel.app/api/blogpost/AllPosts", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setAllPosts(result)
                    setLoading(false)
                })
                .catch(error => console.log('error', error));
        };

        fetchPosts();
    }, []);

    // Function to truncate text to a certain number of words
    const truncateText = (text, numWords) => {
        const words = text.split(' ');
        return words.slice(0, numWords).join(' ') + (words.length > numWords ? '...' : '');
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="flex flex-col md:flex-row p-6 bg-gray-100">
            <div className="md:max-w-4xl md:w-4/5 p-6 bg-white md:mr-6 md:mb-0 mb-4">
                {allPosts.map(item => (
                    <Card key={item.id} className="p-2 mt-3 border-t-2 border-b-2">
                        <img
                            src={`data:image/jpeg;base64,${item.blgIMG_64}`}
                            alt="Blog Article Image"
                            className="w-full md:w-1/2 mb-4 rounded-md"
                            style={{ height: 'auto' }}
                        />
                        <CardContent>
                            <h1 className="text-2xl font-bold mb-4">{item.blogtitle}</h1>
                            <p className="text-gray-700">{truncateText(item.blogdescription, 20)}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="md:max-w-lg md:w-1/5 p-6 bg-white shadow-md md:mb-0 hidden md:block">
                {allPosts.map(item => (
                    <Card key={item.id} className="p-2">
                        <img
                            src={`data:image/jpeg;base64,${item.blgIMG_64}`}
                            alt="Blog Article Image"
                            className="mb-4 rounded-md"
                        />
                        <CardContent>
                            <h1 className="text-2xl font-bold mb-4">{item.blogtitle}</h1>
                            <p className="text-gray-700">{truncateText(item.blogdescription, 20)}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default BlogArticle;
