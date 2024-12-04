import { QUALIFICATIONS_DATA } from '../_constants/qualifications';
import QualificationsTimelineCustom from './qualifications-timeline-custom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const QualificationSection = () => {
    return (
        <div id="qualifications" className="flex w-full flex-col gap-12">
            <h1 className="text-center text-2xl font-semibold">
                Nossas
                <span className="pl-2 font-semibold text-primary">
                    Qualificações
                </span>
            </h1>
            <Tabs
                defaultValue="Desenvolvedor Full Stack"
                className="flex w-full flex-col items-center"
            >
                <TabsList className="flex justify-between">
                    <TabsTrigger value="Desenvolvedor Full Stack">
                        Danilo Santos
                    </TabsTrigger>
                    <TabsTrigger value="Desenvolvedor Backend">
                        Kaio Melo
                    </TabsTrigger>
                </TabsList>
                {QUALIFICATIONS_DATA.map((developer) => (
                    <TabsContent
                        key={developer.id}
                        value={developer.role}
                        className="w-full"
                    >
                        <QualificationsTimelineCustom developer={developer} />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default QualificationSection;
