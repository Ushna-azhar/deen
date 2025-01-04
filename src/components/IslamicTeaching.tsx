import React from 'react';

export default function IslamicTeaching() {
    // Core Beliefs of Islam
    const coreBeliefs = [
        "Belief in the Oneness of Allah (Tawheed): The foundation of Islam is the belief that there is only one God, Allah, who has no partners, no children, and no equals.",
        "Belief in Angels (Malaika): Muslims believe in the existence of angels created by Allah to carry out His commands. They have no free will and are always obedient to Allah.",
        "Belief in Divine Books (Kutub): Allah revealed His guidance through various books to His messengers. These include the Qur'an, Torah, Psalms, and Gospel.",
        "Belief in Prophets (Anbiya): Allah sent prophets throughout history to guide humanity. Prophet Muhammad (PBUH) is considered the last of these prophets.",
        "Belief in the Day of Judgment (Qiyamah): Muslims believe that everyone will be resurrected on the Day of Judgment, where they will be held accountable for their deeds.",
        "Belief in Predestination (Qadr): Everything that happens, good or bad, is by Allah's will. Allah has knowledge of everything and has determined the course of events."
    ];

    // 99 Names of Allah with Meanings
    const asmaUlHusna = [
        { name: 'الرحمن', meaning: 'The Most Gracious' },
        { name: 'الرحيم', meaning: 'The Most Merciful' },
        { name: 'الملك', meaning: 'The Absolute Ruler' },
        { name: 'القدوس', meaning: 'The Pure and Holy' },
        { name: 'السلام', meaning: 'The Source of Peace' },
        { name: 'المؤمن', meaning: 'The Inspirer of Faith' },
        { name: 'المہیمن', meaning: 'The Guardian' },
        { name: 'العزیز', meaning: 'The Victorious' },
        { name: 'الجبار', meaning: 'The Compeller' },
        { name: 'المتكبر', meaning: 'The Supreme' },
        { name: 'الخالق', meaning: 'The Creator' },
        { name: 'البارئ', meaning: 'The Evolver' },
        { name: 'المصور', meaning: 'The Fashioner' },
        { name: 'الغفار', meaning: 'The Constant Forgiver' },
        { name: 'القهار', meaning: 'The All-Prevailing One' }
        // Add more names as needed
    ];

    // Angels Names in Urdu with Roles in English
    const angels = [
        { name: 'حضرت جبرائیل علیہ السلام', role: 'Deliverer of Divine Revelations' },
        { name: 'حضرت میکائیل علیہ السلام', role: 'In Charge of Rain and Sustenance' },
        { name: 'حضرت اسرافیل علیہ السلام', role: 'Blower of the Trumpet on the Day of Judgment' },
        { name: 'حضرت عزرائیل علیہ السلام', role: 'Angel of Death (Takes Souls)' }
    ];

    return (
        <div className="bg-gradient-to-r from-teal-300 via-teal-600 to-teal-800 text-white py-12text-white p-10 rounded-2xl max-w-7xl mx-auto my-16 shadow-xl transform transition-all duration-500 ease-in-out">
            {/* Core Beliefs Section */}
            <h1 className="text-4xl font-semibold text-center mb-10 animate__animated animate__fadeIn">🌙 Core Beliefs of Islam</h1>
            <div className="space-y-8">
                {coreBeliefs.map((belief, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                        <p className=" text-green-950 text-lg">{belief}</p>
                    </div>
                ))}
            </div>

            {/* 99 Names of Allah Section */}
            <h1 className="text-4xl font-semibold text-center mt-16 mb-8 animate__animated animate__fadeIn">🌟 99 Names of Allah (Asma'ul Husna)</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {asmaUlHusna.map((name, index) => (
                    <div key={index} className="bg-teal-100 p-6 rounded-2xl shadow-xl transform transition-transform hover:scale-110 hover:bg-green-700 hover:rotate-2">
                        <p className="text-green-950 text-xl font-semibold">{name.name}</p>
                        <p className="text-green-950   text-sm mt-2">{name.meaning}</p>
                    </div>
                ))}
            </div>

            {/* Angels Section */}
            <h1 className="text-4xl font-semibold text-center mt-16 mb-8 animate__animated animate__fadeIn">✨ Angels in Islam</h1>
            <div className="space-y-8">
                {angels.map((angel, index) => (
                    <div key={index} className="bg-white p-8 rounded-3xl shadow-xl transition-transform hover:scale-105 hover:bg-teal-100">
                        <p className="text-green-950 text-xl font-bold">{angel.name}</p>
                        <p className="text-green-700 text-lg mt-2">{angel.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
