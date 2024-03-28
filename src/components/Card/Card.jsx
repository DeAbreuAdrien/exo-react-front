import './Card.scss';

import { useState, useEffect } from 'react';
import jsonData from '../../../data.json';
import insureLogo from '../../../images/insure.svg';

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <>
      {data.map((item) => (
        <div className="cards">
          <div className="image-business">
            <img src={item.logo} alt={item.company} />
          </div>
          <div className="jobs-info">
            <div className="name-business">{item.company}</div>
            <div className="name-work">{item.position}</div>
            <div className="created-at">{item.postedAt}</div>
            <div className="contract">{item.contract}</div>
            <div className="place">{item.location}</div>
          </div>

          <div className="tags">
            <button className="role">{item.role}</button>
            <button className="level">{item.level}</button>
            {item.languages.map((language, index) => (
              <button key={index} className="tags-name">
                {language}
              </button>
            ))}
            {item.tools.map((tool, index) => (
              <button key={index} className="tags-name">
                {tool}
              </button>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
