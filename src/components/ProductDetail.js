import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../AppContext';
import { useFormik } from 'formik';
import useConsoleLogger from '../hooks/useConsoleLogger';
import { handleAddToCart } from './ProductList';
import styles from '../styles/style.module.css';

function ProductDetail({ product }) {
  const products = useContext(ProductsContext);
  const [comments, setComments] = React.useState([]);
  const useLogger = useConsoleLogger(comments);

  const formik = useFormik({
    initialValues: {
      newComment: '',
    },
    onSubmit: (values) => {
      setComments([...comments, values.newComment]);
      formik.resetForm();
    },
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.imageProd} src={'.' + product.image} alt={product.name} />
        <div className={styles.buttonsContainer}>
          <Link to="/placing-order">
            <button className={styles.buyButton}>Купити</button>
          </Link>
          <button className={styles.cartButton} onClick={() => handleAddToCart(product.id)}>
            До кошика
          </button>
        </div>
      </div>
      <div className={styles.productInfoContainer}>
        <h2 className={styles.prodName}>{product.name}</h2>
        <h3 className={styles.prodAuthor}>Автор: {product.author}</h3>
        <p className={styles.prodPrice}>Ціна: {product.price} $</p>
        <p className={styles.prodPrice}>Підпис:</p>
        <p className={styles.descript}>{product.description}</p>
      </div>
      <div className={styles.commentsContainer}>
        <h3 className={styles.titleComment}>Коментарі:</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <form className={styles.commentForm} onSubmit={formik.handleSubmit}>
          <label className={styles.commentLabel}>Додати коментар:</label>
          <input
            className={styles.commentInput}
            type="text"
            name="newComment"
            onChange={formik.handleChange}
            value={formik.values.newComment}
          />
          <button type="submit">Надіслати</button>
        </form>
      </div>
    </div>
  );
}

export default ProductDetail;













