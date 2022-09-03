import { Route, Routes } from 'react-router-dom'
import { Suspense,lazy } from 'react'
import routes from '@/config/route.config.js'
import Nprogress from '../components/Nprogress'
import Interceptor from './Interceptor'
import AppMain from'@/layout/AppMain.js'

import { Triangle } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function createRouter(routes) {
	return routes.map((item, index) => {
		let condition = !!(item.children && item.children.length > 0)
		item.element = item.component === 'Layout'?item.component: lazy(item.component)
		delete item.component;
		let meta = item.meta || {};
		let element = null
		if(item.element === 'Layout'){
			element = <AppMain	/>
		}else{
			element = <>
				<Interceptor meta={{pattern:item.path,...meta}} key={item.path}>
					<Suspense fallback={
						<Nprogress>
							<Triangle
								height="80"
								width="80"
								color="#4fa94d"
								ariaLabel="triangle-loading"
								wrapperStyle={{}}
								wrapperClassName=""
								visible={true}
							/>
						</Nprogress>
					}>
					{/* <Suspense> */}
							<item.element />
					</Suspense>
				</Interceptor>
			</> 
		}
		return (
			<Route
				key={index}
				path={item.path}
				element={element}
			>
				{condition && createRouter(item.children)}
			</Route>
		)
	})
}


function Router() {
	return (
    <Routes>
        {createRouter(routes)}
    </Routes>
  )
}

export default Router
