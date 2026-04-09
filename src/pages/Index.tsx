import RFHeader from '@/components/regiflex/RFHeader';
import RFHero from '@/components/regiflex/RFHero';
import RFExplanatory from '@/components/regiflex/RFExplanatory';
import RFAbout from '@/components/regiflex/RFAbout';
import RFOrganogram from '@/components/regiflex/RFOrganogram';
import RFProduct from '@/components/regiflex/RFProduct';
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
      <RFAbout />
      <RFOrganogram />
      <RFProduct />
      <RFDifferentials />
      <RFAudience />
      <RFFeatures />
      <RFCTA />
      <RFContact />
      <RFFooter />
    </div>
  );
};

export default Index;
