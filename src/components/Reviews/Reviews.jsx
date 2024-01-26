import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises/api';
import { ReviewsContainer, Notification } from './Reviews.styled';
import { textFormat, addSpacesBetweenSentences } from 'servises/textFormater';

const Reviews = () => {
  const [rev, setRev] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fatchReviews = async () => {
      try {
        const { results } = await getMovieReviews(movieId);

        setRev(results);
      } catch (error) {
        console.log(error);
      }
    };

    fatchReviews();
  }, [movieId]);

  return (
    <ReviewsContainer>
      {!rev.length ? (
        <Notification> Sorry! No reviews found.</Notification>
      ) : (
        <ul>
          {rev.map(({ id, content, author_details: { name } }) => {
            const solidText = textFormat(content);
            return (
              <li key={id}>
                <h3>{name}</h3>
                <p>{addSpacesBetweenSentences(solidText)}</p>
              </li>
            );
          })}
        </ul>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
