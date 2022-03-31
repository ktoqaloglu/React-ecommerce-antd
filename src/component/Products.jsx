import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import {Card, Row, Col, Button} from 'antd'
import { Meta } from 'antd/lib/list/Item';
import {useState, useEffect} from 'react'
import { baseService } from '../network/services/baseService';
import { style } from '@mui/system';


const Products = () => {
    const [products, setProducts] = useState([]);
    
  useEffect(()=> {
    getData();
  },[])
  const {categoryId} = useParams();
  const getData= ()=>{
    baseService.get(`/products/list?categoryId=${categoryId}&pageSize=20&currentPage=1`).then(data=>setProducts(data.products))
  }


  return (
    <>
    <Navbar />
        <div className='page-container '>
        <Row align='middle' wrap gutter={[48,48]}>
        {products.map((product ,key)=>(
            
            <Col span={6}>
                <Card
                cover={<img alt="example" 
                src={product.image135} />
                }
                style={{width:240}}
                hoverable>
                    <Meta title={product.displayName} description={product.brandName}/>
                </Card>
            </Col>
            
        ))} 
    </Row>
    </div>
    </>
  )
}

export default Products