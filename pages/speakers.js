import Footer from '/components/website/utils/Footer';
import Hero from '/components/website/speakers/Hero';
import SpeakersList from '/components/website/speakers/SpeakerList';

export default function Faq() {
  return (
    <>
        <Hero />
        <section className="flex flex-col lg:flex-row lg:justify-between bg-secondary py-20 spacing">
            <div className="flex flex-col text-white mb-10 mr-10">
                {/* Falta o calendário aqui*/}
            </div>
            <div className="w-full lg:w-3/5">
                <SpeakersList />
            </div>
        </section>
        <Footer color="tertiary" />
    </>
  )
}