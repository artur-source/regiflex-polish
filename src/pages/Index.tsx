import RFHeader from '@/components/regiflex/RFHeader';
import RFHero from '@/components/regiflex/RFHero';
import RFSolution from '@/components/regiflex/RFSolution';
import RFExplanatory from '@/components/regiflex/RFExplanatory';
import RFFeatures from '@/components/regiflex/RFFeatures';
import RFDifferentials from '@/components/regiflex/RFDifferentials';
import RFAbout from '@/components/regiflex/RFAbout';
import RFTeam from '@/components/regiflex/RFTeam';
import RFContact from '@/components/regiflex/RFContact';
import RFFooter from '@/components/regiflex/RFFooter';
import RFBenefits from '@/components/regiflex/RFBenefits';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <RFHeader />
      <main>
        <RFHero />
        <RFSolution />
        <RFExplanatory />
        <RFBenefits />
        <RFFeatures />
        <RFDifferentials />
        <RFAbout />
        <RFTeam />
        <RFContact />
      </main>
      <RFFooter />
    </div>
  );
};

export default Index;
