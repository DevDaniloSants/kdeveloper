'use client';

import { Calendar, GraduationCap } from 'lucide-react';
import { Developer } from '../_constants/qualifications';
import { motion } from 'framer-motion';

interface QualificationsTimelineCustomProps {
    developer: Developer;
}

const QualificationsTimelineCustom = ({
    developer,
}: QualificationsTimelineCustomProps) => {
    return (
        <section className="dark:text-white/50">
            <div className="container mx-auto max-w-5xl py-12 md:px-4">
                <div className="mx-4 grid gap-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="mb-14 text-center before:mx-auto before:mb-5 before:block before:h-3 before:w-24 before:rounded-md before:dark:bg-primary sm:text-left sm:before:mx-0">
                            <h3 className="text-3xl font-semibold">
                                {developer.name}
                            </h3>
                            <span className="text-sm font-bold uppercase tracking-wider dark:text-primary">
                                {developer.role}
                            </span>
                        </div>
                    </div>
                    <div className="relative col-span-12 space-y-6 sm:col-span-9 md:px-4">
                        <div className="relative col-span-12 space-y-12 before:dark:bg-gray-700 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:-left-3 sm:before:bottom-0 sm:before:top-2 sm:before:w-0.5 md:px-4">
                            {developer.qualifications.map(
                                (qualification, i) => (
                                    <motion.div
                                        key={qualification.id}
                                        className="flex flex-col before:dark:bg-primary sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i * 0.2,
                                        }}
                                    >
                                        <h3 className="text-xl font-semibold tracking-wide text-white shadow">
                                            {qualification.title}
                                        </h3>

                                        <div className="flex gap-4">
                                            <div className="flex items-center gap-2">
                                                <GraduationCap
                                                    size={16}
                                                    className="text-primary"
                                                />
                                                <span className="text-xs font-extralight text-white/65">
                                                    {qualification.institution}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar
                                                    size={16}
                                                    className="text-primary"
                                                />
                                                <time className="text-xs uppercase tracking-wide">
                                                    {new Date(
                                                        qualification.data
                                                    ).toLocaleDateString(
                                                        'pt-Br',
                                                        {
                                                            month: 'long',
                                                            year: 'numeric',
                                                        }
                                                    )}
                                                </time>
                                            </div>
                                        </div>

                                        <p className="mt-3 text-sm lg:text-base">
                                            {qualification.description}
                                        </p>
                                    </motion.div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualificationsTimelineCustom;
