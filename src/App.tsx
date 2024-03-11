import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from './views/pages/Layout';
import HomePage from './views/pages/Home';

interface WithNavLayoutProps {
  children?: React.ReactNode;
}

const WithNavLayout = ({ children }: WithNavLayoutProps) => (
  <Layout>
    <Outlet />
    {children}
  </Layout>
);

export default function App() {
  return (
    <Routes>
      <Route element={<WithNavLayout />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  );
}
