import Banner from './_components/banner';
import ServicesSection from './_components/services-section';
import SolutionsSection from './_components/solutions-section';

const Home = () => {
    return (
        <div className="mt-24 flex justify-center px-6">
            <div className="flex w-full !max-w-[1200px] flex-col gap-12">
                <Banner />
                <SolutionsSection />
                <ServicesSection />
            </div>
        </div>
    );
};

export default Home;
