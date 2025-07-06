import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnboardingForm from '../Onboarding_Form/OnboardingForm';

const MyRoutes = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<OnboardingForm />} />
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default MyRoutes
