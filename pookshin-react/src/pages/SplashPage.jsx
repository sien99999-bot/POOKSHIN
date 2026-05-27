import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SplashPage.css'

export default function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding')
    }, 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div id="splash-app">
      <img src="/assets/logo-CKanDHkn.svg" className="logo-img" alt="POOKSHIN" />
    </div>
  )
}
