import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SplashPage from './pages/SplashPage'
import OnboardingPage from './pages/OnboardingPage'
import HomePage from './pages/HomePage'
import HomeNextPage from './pages/HomeNextPage'
import MapPage from './pages/MapPage'
import MyPage from './pages/MyPage'
import SettingPage from './pages/SettingPage'
import DetailPage from './pages/DetailPage'
import ReviewPage from './pages/ReviewPage'
import ReviewWritePage from './pages/ReviewWritePage'
import MyReviewsPage from './pages/MyReviewsPage'
import SavedBakeryPage from './pages/SavedBakeryPage'
import SavedBreadPage from './pages/SavedBreadPage'
import NotificationPage from './pages/NotificationPage'
import ProfileEditPage from './pages/ProfileEditPage'
import LocationSettingPage from './pages/LocationSettingPage'
import DisplaySettingPage from './pages/DisplaySettingPage'
import TasteDataPage from './pages/TasteDataPage'
import TimePokiPage from './pages/TimePokiPage'
import PokiSuccessPage from './pages/PokiSuccessPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import WithdrawPage from './pages/WithdrawPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter basename="/POOKSHIN">
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home-next" element={<HomeNextPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/review-write" element={<ReviewWritePage />} />
        <Route path="/my-reviews" element={<MyReviewsPage />} />
        <Route path="/saved-bakery" element={<SavedBakeryPage />} />
        <Route path="/saved-bread" element={<SavedBreadPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/profile-edit" element={<ProfileEditPage />} />
        <Route path="/location-setting" element={<LocationSettingPage />} />
        <Route path="/display-setting" element={<DisplaySettingPage />} />
        <Route path="/taste-data" element={<TasteDataPage />} />
        <Route path="/time-poki" element={<TimePokiPage />} />
        <Route path="/poki-success" element={<PokiSuccessPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
