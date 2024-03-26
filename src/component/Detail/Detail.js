import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Detail () {

    const navigate = useNavigate()

    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${window.location.pathname.substring(8)}`)
        .then(res => {
            setDetailProduct(res.data)
        })
        .catch()
    }, [])

    const backProductList = () => {
        navigate('/')
    }
    

    return (
        <>
        <Card
        sx={{width: 540, margin: '100px auto', paddingLeft: 4}}
        >
            <CardContent
            sx={{}}
            >
                <Typography variant="h6">
                    Chi tiết sản phẩm
                </Typography>
                <Typography variant="h5">Tên sản phẩm: {detailProduct.title}</Typography>
                <Typography variant="h6">Mô tả: {detailProduct.description}</Typography>
                <Typography variant="h6">Giá: {detailProduct.price}</Typography>
            </CardContent>
            <CardActions
            sx={{paddingLeft: 2}}
            >
                <button
                onClick={backProductList}
                style={{
                    backgroundColor: 'blue', 
                    color: 'white', 
                    marginRight: '20px',
                    border: 'white',
                    borderRadius: '4px',
                    padding: '10px'
                }}
                >Trở lại</button>
            </CardActions>
        </Card>
        </>
    )
}

export default Detail