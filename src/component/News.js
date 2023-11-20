import React, { useState } from 'react';
import { Card, Button, Input } from 'antd';
import axios from 'axios';
import 'antd/dist/antd'; // Import Ant Design styles

const { Meta } = Card;
const { Search } = Input;

function News() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (value) => {
    try {
      const response = await axios.get(
        `http://newsapi.org/v2/everything?q=${value}&apiKey=223d2ddedac44d4fbc89d39b95d9f69c`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div className="news-container">
      <div className="search-container">
        <Search
          placeholder="Search for news"
          allowClear
          enterButton="Search"
          onSearch={handleSearch}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {news &&
        news.map((item, index) => (
          <Card
            key={index}
            hoverable
            className="news-card"
            cover={<img alt={`News article - ${item.title}`} src={item.urlToImage} />}
          >
            <Meta title={item.title} description={item.content} />
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Button type="primary" className="read-more-button">
                Read More
              </Button>
            </a>
          </Card>
        ))}
    </div>
  );
}

export default News;
