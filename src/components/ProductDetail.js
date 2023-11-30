import React, { useState} from 'react';

import useConsoleLogger from '../hooks/useConsoleLogger';

const ProductDetail = ({ product }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useConsoleLogger(comments);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };



  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <div>
        <h3>Коментарі:</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleCommentSubmit}>
        <label>
          Додати коментар:
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </label>
        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
};

export default ProductDetail;










