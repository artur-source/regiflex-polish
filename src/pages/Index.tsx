import RFHeader from '@/components/regiflex/RFHeader';
import RFHero from '@/components/regiflex/RFHero';
import RFAbout from '@/components/regiflex/RFAbout';
import RFProduct from '@/components/regiflex/RFProduct';
import RFFeatures from '@/components/regiflex/RFFeatures';
import RFDifferentials from '@/components/regiflex/RFDifferentials';
import RFCTA from '@/components/regiflex/RFCTA';
import RFTeam from '@/components/regiflex/RFTeam';
import RFContact from '@/components/regiflex/RFContact';
import RFFooter from '@/components/regiflex/RFFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <RFHeader />
      <RFHero />
      <RFAbout />
      <RFProduct />
      <RFFeatures />
      <RFDifferentials />
      <RFCTA />
      <RFTeam />
      <RFContact />
      <RFFooter />
    </div>
  );
};

export default Index;
