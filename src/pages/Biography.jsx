/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Award, BookOpen, Heart, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import BiographySection from "../components/BiographySection";
//import { useEffect, useState } from "react";

//import { getBioData } from "@/services/api";

const achievementIconMap = {
  "নেতৃত্বে সম্মাননা": Award,
  "সমাজসেবায় অনন্য অবদান": Users,
  "প্রকাশিত লেখক": BookOpen,
  "মানবতার সেবক": Heart,
};


const lifeline = [
  {
    id: 1,
    year: "১৯৬৫",
    title: "জন্ম ও শৈশব",
    description:
      "২০ নভেম্বর জন্মগ্রহণ। শহীদ প্রেসিডেন্ট জিয়াউর রহমান ও বেগম খালেদা জিয়ার জ্যেষ্ঠ পুত্র হিসেবে বেড়ে ওঠা।",
  },
  {
    id: 2,
    year: "১৯৮৮",
    title: "রাজনীতিতে আনুষ্ঠানিক প্রবেশ",
    description:
      "বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)-এ সক্রিয়ভাবে সম্পৃক্ততা শুরু।",
  },
  {
    id: 3,
    year: "১৯৯১–২০০১",
    title: "রাজনৈতিক নেতৃত্বে উত্থান",
    description:
      "দলের সাংগঠনিক কাজে উল্লেখযোগ্য ভূমিকা, যুব ও তরুণদের সংগঠনে নতুন গতি ও শীলতা আনা।",
  },
  {
    id: 4,
    year: "২০০২–২০০৭",
    title: "BNP-এর জ্যেষ্ঠ যুগ্ম মহাসচিব → সিনিয়র ভাইস-চেয়ারম্যান",
    description:
      "দলের নীতি নির্ধারণ, সাংগঠনিক সংস্কার, এবং নতুন রাজনৈতিক চিন্তার বিকাশ।",
  },
  {
    id: 5,
    year: "২০০৮–২০২৪",
    title: "প্রবাসে থেকে দলের নেতৃত্ব",
    description:
      "লন্ডন থেকে দলের ভারপ্রাপ্ত চেয়ারম্যান হিসেবে বিশ্বব্যাপী (বিএনপি)-র পুনর্গঠন, নীতিগত নির্দেশনা ও কৌশলগত নেতৃত্ব।",
  },
  {
    id: 6,
    year: "২০২৫",
    title: "বাংলাদেশে প্রত্যাবর্তন ও নতুন রাজনৈতিক অধ্যায়",
    description:
      "দেশে ফিরে জাতীয় রাজনীতিতে সক্রিয় অংশগ্রহণ। গণতন্ত্র পুনরুদ্ধার আন্দোলনে নেতৃত্ব।",
  },

   {  
     id: 7,
     year: "২০২৬",
     title: "ঢাকা-১৭ সংসদীয় আসনে প্রতিদ্বন্দ্বিতা",
     description:
       "রাজনীতির নতুন যাত্রা—অংশগ্রহণমূলক গণতন্ত্র প্রতিষ্ঠার লক্ষ্য সামনে রেখে নির্বাচন।",
   },
];

const achievements = [
    {
      "id": 2,
      "name": "দলের নেতৃত্বে অনন্য ভূমিকা",
      "description": "BNP-এর সাংগঠনিক পুনর্গঠন, নীতি নির্ধারণ ও তরুণ নেতৃত্বকে এগিয়ে নেওয়ার অসামান্য অবদানের জন্য দলীয় শীর্ষ পর্যায়ে স্বীকৃতি।"
    },
    {
      "id": 3,
      "name": "সমাজসেবায় অবদান",
      "description": "দরিদ্র, সুবিধাবঞ্চিত ও দুর্যোগপ্রবণ মানুষের সহযোগিতায় দীর্ঘমেয়াদি ত্রাণ কার্যক্রম, স্বাস্থ্যসেবা উদ্যোগ ও শিক্ষা-সহায়তা কর্মসূচিতে বিশেষ ভূমিকা পালন।"
    },
    {
      "id": 4,
      "name": "নীতি নির্ধারণ ও রাজনৈতিক চিন্তার প্রবক্তা",
      "description": "গণতন্ত্র, নির্বাচন ব্যবস্থার সংস্কার, অর্থনৈতিক উন্নয়ন এবং জনগণের অংশগ্রহণমূলক শাসনব্যবস্থা নিয়ে নীতিগত প্রস্তাবনা ও বক্তৃতার মাধ্যমে পরিচিত।"
    },

     {
      "id": 5,
      "name": "মানবতার সেবক",
      "description": "স্বাধীনতা, গণতান্ত্রিক অধিকার, মানবাধিকার রক্ষা এবং জাতীয় সংকটসমূহে জনগণের পাশে দাঁড়ানোর ধারাবাহিকতা—যার জন্য তিনি দেশ-বিদেশে প্রশংসিত।"
    }
  ];

export default function Biography() {
 // const [lifeline, setLifeline] = useState([]);
 // const [achievements, setAchievements] = useState([]);


  {
    /*

       useEffect(() => {
    let isMounted = true;

    async function loadBiography() {
      try {
        const bio = await getBioData();
        console.log(bio);
        if (!bio || !isMounted) return;

        setLifeline(Array.isArray(bio.lifeline) ? bio.lifeline : []);
        setAchievements(
          Array.isArray(bio.achievements) ? bio.achievements : []
        );
      } catch (error) {
        console.error("loadBiography error:", error);
      }
    }

    loadBiography();

    return () => {
      isMounted = false;
    };
  }, []);


    */
  }

  const uiAchievements = achievements.map((item) => ({
    ...item,
    icon: achievementIconMap[item.name] || Award,
  }));

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-rose-300/25 blur-3xl" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-700"
            >
              জীবনী
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4"
              data-testid="text-biography-title"
            >
              জনাব তারেক রহমান – জীবনবৃত্তান্ত
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mx-auto max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed"
            >
              অভিজ্ঞতা, নেতৃত্ব এবং মানবিক মূল্যবোধের এক অনন্য সমন্বয়—যেখানে
              শিক্ষা ও সমাজ গঠনের পথচলা একসাথে এগিয়ে যায়।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-lg p-5 shadow-lg"
            >
              <div className="absolute inset-x-8 top-4 h-20 rounded-full bg-rose-300/30 blur-3xl" />

              <p className="relative text-sm md:text-base text-slate-700">
                এই অংশটি তাঁর জীবনের গুরুত্বপূর্ণ অধ্যায়, কর্মপরিকল্পনা এবং
                অবদানের গল্প তুলে ধরে—যা ভবিষ্যৎ প্রজন্মকে অনুপ্রাণিত করবে।
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="images/tariqueimage-7.png"
                  alt="Candidate Portrait"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                  data-testid="img-candidate-portrait"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="items-center text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
                    তাঁর সম্পর্কে জানুন
                  </h2>
                  <div className="flex justify-center mt-4">
                    <span className="w-20 h-1 bg-political-red rounded-full"></span>
                  </div>
                </div>

                <BiographySection />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
                জীবনের <span className="text-gray-800">যাত্রা</span>
              </h2>
              <p className="text-political-dark/70 max-w-2xl mx-auto">
                জনসেবা ও সম্প্রদায় নেতৃত্বে নিবেদিত এক জীবনকাল
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-political-blue/20 hidden md:block" />

              {lifeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <Card className="inline-block bg-white border-0 shadow-sm">
                      <CardContent className="p-6">
                        <span className="text-political-red font-bold text-xl">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-800 mt-2">
                          {item.title}
                        </h3>
                        <p className="text-political-dark/70 text-sm mt-2">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden md:flex items-center justify-center w-8">
                    <div className="w-4 h-4 rounded-full bg-political-red border-4 border-white shadow" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
                অর্জন <span className="text-gray-900">ও সম্মাননা</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {uiAchievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="text-center h-full bg-white border-0 shadow-sm hover-elevate">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 rounded-full bg-political-blue/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-red-800" />
                        </div>
                        <h3 className="font-semibold text-political-dark mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-political-dark/60">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
