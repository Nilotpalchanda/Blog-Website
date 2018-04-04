
import React from 'react'
import Aux from '../hoc/_Aux'
import Header from './BasicBlock/Header'
import Footer from './BasicBlock/Footer'


const PageStr = (props) =>(

	<Aux>
		<div>
			<Header/>
		</div>
		<div>
			{props.children}
		</div>
		<div>
			<Footer/>
		</div>
	</Aux>

	)

export default PageStr