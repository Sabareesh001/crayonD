import * as React from 'react'
import {useRoutes} from 'react-router-dom'
import Layout from '../src/pages/layout/Layout'
import publicRoutes from './publicRoutes'
const Routes = ()=>{
    const router = useRoutes(
        [
            {
                path:'/',
                element:<Layout/>,
                children:publicRoutes
            }
        ]
    )
    return router;
}

export default Routes;