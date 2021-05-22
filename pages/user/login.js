import React from 'react';
import styled from '@emotion/styled';

const LoginTitle = styled.div`
	color: red;
`;

const mockData = {
	title: '디지털 열람석',
};

function Login() {
	return (
		<div>
			<LoginTitle>{mockData.title}</LoginTitle>
		</div>
	);
}

export default Login;
