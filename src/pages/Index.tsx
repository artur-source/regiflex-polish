import RFHeader from '@/components/regiflex/RFHeader';
import RFHero from '@/components/regiflex/RFHero';
import RFProblem from '@/components/regiflex/RFProblem';
import RFSolution from '@/components/regiflex/RFSolution';
import RFExplanatory from '@/components/regiflex/RFExplanatory';
import RFFeatures from '@/components/regiflex/RFFeatures';
import RFDifferentials from '@/components/regiflex/RFDifferentials';
import RFAudience from '@/components/regiflex/RFAudience';
import RFAbout from '@/components/regiflex/RFAbout';
import RFMissionVisionValues from '@/components/regiflex/RFMissionVisionValues';
import RFTeam from '@/components/regiflex/RFTeam';
import RFContact from '@/components/regiflex/RFContact';
import RFCTA from '@/components/regiflex/RFCTA';
import RFFooter from '@/components/regiflex/RFFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <RFHeader />
      <main>
        <RFHero />
        <RFProblem />
        <RFSolution />
        <RFExplanatory />
        <RFFeatures />
        <RFDifferentials />
        <RFAudience />
        <RFAbout />
        <RFMissionVisionValues />
        <RFTeam />
        <RFContact />
        <RFCTA />
      </main>
      <RFFooter />
    </div>
  );
};

export default Index;
