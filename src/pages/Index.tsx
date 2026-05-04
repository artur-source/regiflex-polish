import RFHeader from '@/components/regiflex/RFHeader';
import RFHero from '@/components/regiflex/RFHero';
import RFExplanatory from '@/components/regiflex/RFExplanatory';
import RFBenefits from '@/components/regiflex/RFBenefits';
import RFAbout from '@/components/regiflex/RFAbout';
import RFMissionVisionValues from '@/components/regiflex/RFMissionVisionValues';
import RFTeam from '@/components/regiflex/RFTeam';
import RFDemo from '@/components/regiflex/RFDemo';
import RFDifferentials from '@/components/regiflex/RFDifferentials';
import RFAudience from '@/components/regiflex/RFAudience';
import RFFeatures from '@/components/regiflex/RFFeatures';
import RFCTA from '@/components/regiflex/RFCTA';
import RFContact from '@/components/regiflex/RFContact';
import RFFooter from '@/components/regiflex/RFFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <RFHeader />
      <RFHero />
      <RFExplanatory />
      <RFBenefits />
      {/* <RFProduct /> - Removido conforme nova estrutura */}
      <RFAbout />
      <RFMissionVisionValues />
      <RFTeam />
      <RFDemo />
      <RFFeatures />
      <RFDifferentials />
      <RFAudience />
      <RFCTA />
      <RFContact />
      <RFFooter />
    </div>
  );
};

export default Index;
