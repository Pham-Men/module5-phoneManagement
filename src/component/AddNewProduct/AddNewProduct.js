import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddnewProduct () {

    const navigate = useNavigate()

    const[newProduct, setNewProduct] = useState({
        id: uuidv4(),
        title: '',
        price: '',
        description: ''
    })

    const handleOnchangeProduct = (e) => {
        setNewProduct({...newProduct, title: e.target.value})
    }
    const handleOnchangePrice = (e) => {
        setNewProduct({...newProduct, price: e.target.value})
    }
    const handleOnchangeDescription = (e) => {
        setNewProduct({...newProduct, description: e.target.value})
    }

    const handleAddNewProduct = () => {
        axios.post('http://localhost:3000/products', newProduct)
        .then(() => {
            alert('Đã thêm sản phẩm thành công')
        })
    }

    const handleBackProductList = () => {
        navigate('/')
    }

    return (
        <>
        <Card
        sx={{ width: 550, margin: '100px auto', paddingLeft: 3}}
        
        >
            <CardContent>
                <Typography mb={2}>Thêm sản phẩm</Typography>
                <label>Tên sản phẩm</label> <br/>
                <TextField onChange={handleOnchangeProduct} sx={{width: 500,}} size="small" id="outlined-basic" label="" variant="outlined" /> <br/>
                <label>Giá</label> <br/>
                <TextField onChange={handleOnchangePrice} sx={{width: 500}} size="small" id="outlined-basic" label="" variant="outlined" /> <br/>
                <label>Mô tả</label> <br/>
                <TextField onChange={handleOnchangeDescription} sx={{width: 500}} size="small" multiline rows={4} id="outlined-basic" label="" variant="outlined" /> <br/>
            </CardContent>
            <CardActions
            sx={{paddingLeft: 2}}
            >
                <button
                onClick={handleAddNewProduct}
                style={{
                    backgroundColor: 'blue', 
                    color: 'white', 
                    marginRight: '20px',
                    border: 'white',
                    borderRadius: '4px',
                    padding: '6px'
                }}
                >Thêm</button>
                <button
                onClick={handleBackProductList}
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
        </>
    )
}

export default AddnewProduct