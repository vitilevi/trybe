import { connect } from 'react-redux';
import Product from './Product';

function ListProducts({ products }) {
  return (
    <div>
      { products.map((product) => (
          <Product product={ product } />
        )) 
      }
    </div>
  );
};

const mapStoreToProps = ({ productReducer }) => ({
  products: productReducer.products,
});

export default connect(mapStoreToProps)(ListProducts);
