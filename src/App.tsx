import { Hero } from '@/sections/Hero';
import { WeddingDetails } from '@/sections/WeddingDetails';
import { Timeline } from '@/sections/Timeline';
import { WideBackdrop1 } from '@/sections/WideBackdrop1';
import { StoryGallery } from '@/sections/StoryGallery';
import { TamilTypography } from '@/sections/TamilTypography';
import { CoupleGallery } from '@/sections/CoupleGallery';
import { TamilQuote } from '@/sections/TamilQuote';
import { WideBackdrop2 } from '@/sections/WideBackdrop2';
import { FinalGallery } from '@/sections/FinalGallery';
import { FamilyBlessings } from '@/sections/FamilyBlessings';
import { Countdown } from '@/sections/Countdown';
import { VenueRSVP } from '@/sections/VenueRSVP';
import { Closing } from '@/sections/Closing';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <main className="min-h-screen bg-ivory-50">
      <Hero />
      <WeddingDetails />
      <Timeline />
      {/* <WideBackdrop1 /> */}
      <StoryGallery />
      <TamilTypography />
      <CoupleGallery />
      <TamilQuote />
      <WideBackdrop2 />
      <FinalGallery />
      <FamilyBlessings />
      <Countdown />
      <VenueRSVP />
      <Closing />
      <Footer />
    </main>
  );
}

export default App;
