import React from 'react'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import ImageLocation from './ImageLocation'
import ProjectSection from './ProjectSection'

export default function PageContent() {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
    

    <ProjectSection />
    <AboutSection />
    <ContactSection />
    <ImageLocation />
    
    </div>

  )
}
