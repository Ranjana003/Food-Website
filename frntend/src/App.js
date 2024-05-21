import Header from './components/Header/Header';
import AppRoutes from './AppRoutes';
import Loading from './components/Loading/Loading';
import { useLoading } from './hooks/useLoading';
import { setLoadingInterceptor } from './interceptors/loadingInterceptor';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';

function App(){

  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, [hideLoading, showLoading]);

  return<>
  <Loading />
  <Header />
  <AppRoutes />
  
  </>
}

export default App;