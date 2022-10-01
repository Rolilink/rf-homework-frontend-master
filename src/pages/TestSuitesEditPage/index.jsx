
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useTestSuitesData from '../../hooks/useTestSuitesData';
import TestSuiteEditForm from './TestSuiteEditForm';
import Container from '../../components/Container';


const TestSuitesEditPage = () => {
	const { testSuiteId } = useParams();
	const { testSuites, isFetching } = useTestSuitesData();
	const [submitted, setSubmited] = useState(false);
	
	const testSuite = testSuites?.find(({ id }) => (
		id === parseInt(testSuiteId)
	));

	const onSubmit = (testSuite) => {
		console.log("Saved", JSON.stringify(testSuite));
		setSubmited(true);
	}

	
	if (isFetching) return (<div>Loading ...</div>)
	
	if (!testSuite) return (<div> Oops not found.</div>);

	return (
			<Container>
				<h1 className="text-xl mb-1 font-bold">
					{!submitted ? `Edit Test Suite: ${ testSuite.test_suite_name}` : "Edited and added result to console"}
				</h1>
				<hr className="mb-1"/> 
				<div>
				{ submitted ? (
					<a className="hover:underline" href="/">Continue Editing</a>
					) : (
						<TestSuiteEditForm testSuite={testSuite} onSubmit={onSubmit} />
					) }
				</div>
			</Container>
	);
}
	

export default TestSuitesEditPage;