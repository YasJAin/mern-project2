import React, { /*useEffect*/ } from 'react';
import { useSelector, /*useDispatch*/ } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
//import { getAllCars } from '../redux/actions/carsActions'
//import { Button, Row, Col } from 'antd';
function Home(){
    const {cars} = useSelector(state=>state.carsReducer)
    /*const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getAllCars())
    },[])*/
    return (
        <DefaultLayout>
            <h1>Home page</h1>
            <h1>The length of array  is - {cars.length}</h1>
        </DefaultLayout>

    )
}

export default Home