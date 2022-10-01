import TestSuitesList from '../../components/TestSuitesList';
import useTestSuitesData from '../../hooks/useTestSuitesData';
import Container from '../../components/Container';

const TestSuitesListPage = () => {
	const { testSuites, isFetching } = useTestSuitesData();

	return (
			<Container>
				<h1 className="text-xl mb-1 font-bold">Test Suites</h1>
				<hr className="mb-1"/> 
				{ isFetching ? <span> loading</span> : <TestSuitesList testSuites={testSuites} />}
			</Container>
	);
}
	

export default TestSuitesListPage;