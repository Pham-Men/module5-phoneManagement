import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Link, colors } from "@mui/material";

function Home () {
const [listProduct, setListProduct] = useState()

const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/products').then(res => {
            setListProduct(res.data)
        }).catch()
    }, [])

    // console.log(listProduct)

    const handleShowFormAddNewProduct = () => {
        navigate('/add')
    }

    const handleShowFormEditProduct = (id) => {
        navigate('/edit/' + id, {state: {id: id}})
        // console.log(id)
    }

    const handleDeleteProduct = (id) => {
        const isComfirm=window.confirm('Bạn chắc chắn muốn xóa sản phẩm này?')
        if(isComfirm) {
            axios.delete(`http://localhost:3000/products/${id}`)
            .then(() => {
                axios.get('http://localhost:3000/products')
                .then(res => {
                    setListProduct(res.data)
                })
            })
            .catch()
        }
    }

    return (
        <>
        <Card
        sx={{width: '80%', margin: '100px auto'}}
        >
            <CardContent
            sx={{}}
            >
            <Typography
            variant="subtitle1"
            pt={2}
            pb={2}
            >
                Danh sách sản phẩm
            </Typography>
            <button
            onClick={handleShowFormAddNewProduct}
            style={{
                backgroundColor: 'green', 
                color: 'white', 
                marginRight: '20px',
                border: 'white',
                borderRadius: '4px',
                padding: '6px'
            }}
            >
                Thêm mới
            </button>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="left">Tên sản phẩm</TableCell>
                        <TableCell align="left">Mô tả</TableCell>
                        <TableCell align="left">Giá</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {listProduct && listProduct.map((product) => (
                        <TableRow
                        key={product.id}
                        sx={{}}
                        >
                        <TableCell>{product.id}</TableCell>
                        <TableCell align="left"><Link href={'/detail/' + product.id} underline="none">{product.title}</Link></TableCell>
                        <TableCell align="left">{product.description}</TableCell>
                        <TableCell align="left">{product.price}</TableCell>
                        <TableCell align="left">{
                        <>
                            <button
                            onClick={() => handleDeleteProduct(product.id)}
                            style={{
                                backgroundColor: 'red', 
                                color: 'white', 
                                marginRight: '20px',
                                border: 'white',
                                borderRadius: '4px',
                                padding: '6px'
                            }}
                            >
                                Xóa
                            </button>
                            <button
                            onClick={() => handleShowFormEditProduct(product.id)}
                            style={{
                                backgroundColor: 'blue', 
                                color: 'white', 
                                marginRight: '20px',
                                border: 'white',
                                borderRadius: '4px',
                                padding: '6px'
                            }}
                            >
                                Sửa
                            </button>
                        </>
                            
                        }</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </CardContent>
        </Card>
        
        </>
    )
}

export default Home