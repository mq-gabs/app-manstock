import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path='/*'
        element={<SignIn />}
      />
    </Routes>
  )
}