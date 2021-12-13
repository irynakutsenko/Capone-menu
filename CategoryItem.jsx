import styled from 'styled-components';
import React from 'react'


const Container = styled.div`
	flex: 1;
	margin: 3px;
	height: 70vh;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	
`;

const Title = styled.h1`
	color: black;
	margin-bottom: 20px; 
`;

const Button = styled.button`
	padding: 10px;
	background-color: blanchedalmond;
	color: cadetblue;
	cursor: pointer;
	font-weight: 600;
`;

function CategoryItem({item}) {
	return (
		<Container>
			<Image src={item.img}/>
			<Info>
				<Title>{item.title}</Title>
				<Button>COMPRAR</Button>
			</Info>
		</Container>
	)
}

export default CategoryItem
