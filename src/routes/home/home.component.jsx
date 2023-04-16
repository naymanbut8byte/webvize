import Categories from "../../components/categories/categories.component";
import {Outlet} from 'react-router-dom';

const Home = () => {
    const categories = [
        {
          "id": 1,
          "title": "klasik gitar",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/mnresize/1000/1000/images/product/120927001.png"
        },
        {
          "id": 2,
          "title": "akustik gitar",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/mnresize/1000/1000/images/product/141407GLA%20T170ACE_1.png"
        },
        {
          "id": 3,
          "title": "elektro gitar",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/images/category/1508460149862350_1.png"
        },
        {
          "id": 4,
          "title": "bass gitar",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/mnresize/1000/1000/images/product/0370760532_1.png"
        },
        {
          "id": 5,
          "title": "12 telli gitar",
          "imageUrl": "https://img-zuhalmuzik.mncdn.com/mnresize/1000/1000/images/product/001221PF1512-NT_1.jpg"
        }
      ]
  return (
    <div>
        <Outlet/>
        <Categories categories={categories}/>
    </div>
  );
}

export default Home;