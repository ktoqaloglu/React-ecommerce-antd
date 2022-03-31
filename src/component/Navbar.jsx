import { Link } from 'react-router-dom';
import { baseService } from '../network/services/baseService';
import {useState, useEffect} from 'react';
import {Row, Col } from 'antd';
import '../style/App.css';


const Navbar = () => {

const [categories, setCategories] = useState([]);

     useEffect(()=> { getData() },[])

     const getData= ()=>{
       baseService.get('/categories/v2/list-root').then(data=>setCategories(data.rootCategories))
       
     }

  return (

    <nav className="nav-container">
      
      <Row align='middle' wrap>
        <Col className="logo" span={3}>
          <Link className='logo-link' to="/">Sephora</Link>
        </Col>
        {categories.map((category, key)=>(
          <Col span={2}>
              <Link className='nav-link' key={key} to={`/${category.categoryId}/products`}>{category.displayName}</Link>
          </Col>
        ))}
      </Row>
      
    </nav>
 )
}    

export default Navbar