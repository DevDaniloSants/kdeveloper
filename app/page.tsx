import Banner from './_components/banner';
import FAQSection from './_components/faq-section';
import ProjectsSection from './_components/projects-section';
import QualificationSection from './_components/qualifications-section';
import ServicesSection from './_components/services-section';
import SolutionsSection from './_components/solutions-section';
import TechnologiesSection from './_components/technologies-section';

const Home = () => {
    return (
        <div className="my-24 flex justify-center px-6">
            <div className="flex w-full !max-w-[1200px] flex-col">
                <Banner />
                <div className="space-y-20">
                    <SolutionsSection />
                    <ServicesSection />
                    <TechnologiesSection />
                    <ProjectsSection />
                    <QualificationSection />
                    <FAQSection />
                </div>
            </div>
        </div>
    );
};

export default Home;
