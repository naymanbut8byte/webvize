import './category-item.styles.css';

const CategoryItem = ({category}) => {
    const {title,imageUrl} = category;
    return (
        <div className="card-container">
            <img className='img'
      src={imageUrl}
      alt="Gitar"
    />
<h1>{title}</h1>
  <button className='button' > Shop Now</button>         
        </div>
    );
}

export default CategoryItem;  