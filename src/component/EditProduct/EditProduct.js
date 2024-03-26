import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProduct () {

    const navigate = useNavigate()

    const {state} = useLocation()
    const [product, setProduct] = useState()
    const [editProduct, setEditProduct] = useState({
        id: '',
        title: '',
        price: '',
        description: ''
    })
    // console.log(state)

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${state.id}`)
        .then(res => {
            setProduct(res.data)
        })
        .catch()
    }, [])

    const handleOnchangeProduct = (e) => {
        setEditProduct({...editProduct, title: e.target.value})
    }
    const handleOnchangePrice = (e) => {
        setEditProduct({...editProduct, price: e.target.value})
    }
    const handleOnchangeDescription = (e) => {
        setEditProduct({...editProduct, description: e.target.value})
    }
    const handleBackHome = () => {
        navigate('/')
    }
    const handleEdit = () => {
        setEditProduct({...editProduct, id: product.id})
        axios.put(`http://localhost:3000/products/${state.id}`, editProduct)
        .then(() => {
            alert('Chỉnh sửa sản phẩm thành công')
        })
        .catch()
    }

    return (
        <>
        {product &&
        <Card
        sx={{ width: 550, margin: '100px auto', paddingLeft: 3}}
        
        >
            <CardContent>
                <Typography mb={2}>Sửa sản phẩm</Typography>
                <label>Tên sản phẩm</label> <br/>
                <TextField onChange={handleOnchangeProduct} defaultValue={product.title} sx={{width: 500,}} size="small" id="outlined-basic" label="" variant="outlined" /> <br/>
                <label>Giá</label> <br/>
                <TextField onChange={handleOnchangePrice} defaultValue={product.price} sx={{width: 500}} size="small" id="outlined-basic" label="" variant="outlined" /> <br/>
                <label>Mô tả</label> <br/>
                <TextField onChange={handleOnchangeDescription} defaultValue={product.description} sx={{width: 500}} size="small" multiline rows={4} id="outlined-basic" label="" variant="outlined" /> <br/>
            </CardContent>
            <CardActions
            sx={{paddingLeft: 2}}
            >
                <button
                onClick={handleEdit}
                style={{
                    backgroundColor: 'blue', 
                    color: 'white', 
                    marginRight: '20px',
                    border: 'white',
                    borderRadius: '4px',
                    padding: '6px'
                }}
                >Sửa</button>
                <button
                onClick={handleBackHome}
                style={{
                    backgroundColor: 'hsl(195, 67%, 47%)', 
                    color: 'white', 
                    marginRight: '20px',
                    border: 'white',
                    borderRadius: '4px',
                    padding: '6px'
                }}
                >Trở lại</button>
            </CardActions>
        </Card>
        }
        </>
    )
}

export default EditProduct