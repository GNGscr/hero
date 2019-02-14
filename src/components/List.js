import React from 'react';
import Card from './Card';

const List = ( {list_data,pick} ) => {
    return (
			<header className="App-header">
			<div className="boxWrapper">
					{
							list_data.map((movie,i) => {
									return (
											<div key={i}>
													<Card {...movie} />
											</div>
									)
							})
					}
			</div>
	</header>
    )
}
export default List
