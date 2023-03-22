import MainLayout from './MainLayout'

export const ErrorPage: React.FunctionComponent = () => {
  return (
      <MainLayout initialSearch=''>
        <h1>An internal server error</h1>
      </MainLayout>
      
  );
}

export default ErrorPage;