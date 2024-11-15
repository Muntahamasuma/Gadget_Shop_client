import React from 'react';
import Review from './Review';

const UserReview = () => {
  return (
    <div className='lg:flex justify-between items-center gap-6'>
      <Review></Review>
      <Review></Review>
      <Review></Review>
      <Review></Review>
    </div>
  );
};

export default UserReview;