import Banner from './_components/banner';
import SolutionsSection from './_components/solutions-section';

const Home = () => {
    return (
        <div className="mt-24 flex justify-center px-6">
            <div className="flex w-full !max-w-[1200px] flex-col gap-10">
                <Banner />
                <SolutionsSection />
            </div>
        </div>
    );
};

export default Home;
