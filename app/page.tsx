import Banner from './_components/banner';
import ProjectsSection from './_components/projects-section';
import QualificationSection from './_components/qualifications-section';
import ServicesSection from './_components/services-section';
import SolutionsSection from './_components/solutions-section';
import TechnologiesSection from './_components/technologies-section';

const Home = () => {
    return (
        <div className="my-24 flex justify-center px-6">
            <div className="flex w-full !max-w-[1200px] flex-col gap-20">
                <Banner />
                <SolutionsSection />
                <ServicesSection />
                <TechnologiesSection />
                <ProjectsSection />
                <QualificationSection />
            </div>
        </div>
    );
};

export default Home;
