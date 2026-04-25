import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ConceptMalibu from './pages/ConceptMalibu'
import ConceptLASporty from './pages/ConceptLASporty'
import ConceptSoftLuxury from './pages/ConceptSoftLuxury'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/concept-malibu" element={<ConceptMalibu />} />
      <Route path="/concept-la-sporty" element={<ConceptLASporty />} />
      <Route path="/concept-soft-luxury" element={<ConceptSoftLuxury />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
