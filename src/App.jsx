import HeroGradient from './components/HeroSection/HeroGradient';
import HeroMain from './components/HeroSection/HeroMain';
import SubHeroSection from './components/HeroSubSection/SubHeroSection';
import NavbarMain from './components/navbar/NavbarMain'
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import HelperSection from './components/HelperSection';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectsMain from './components/projectsSection/ProjectsMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';

function App() {
  return(
   <main className="font-body">
     <NavbarMain />
     <HeroMain/>
     <HeroGradient />
     <SubHeroSection />
     <AboutMeMain />
     <HelperSection />
     <SkillsMain />
     <SubSkills />
     <ExperienceMain />
     <ProjectsMain />
     <ContactMeMain />
     <FooterMain />
     
   </main>
  );
};

export default App;
