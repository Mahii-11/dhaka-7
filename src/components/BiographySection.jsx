//import { getBioData } from "@/services/api";
//import { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaUsers,
  FaBriefcase,
  FaHandsHelping,
} from "react-icons/fa";

const  contribution = [
    {
      "id": 1,
      "name": "শিক্ষা ও ছাত্র রাজনীতি",
      "description": "তারেক রহমান ঢাকা রেসিডেন্সিয়াল মডেল কলেজ থেকে প্রাথমিক ও মাধ্যমিক শিক্ষা অর্জন করেন। উচ্চ মাধ্যমিক সম্পন্ন করেন নটর ডেম কলেজ এবং অ্যাডামজি ক্যান্টনমেন্ট কলেজ থেকে। পরে ঢাকা বিশ্ববিদ্যালয়ে আইন বিভাগে ভর্তি হন এবং পাশাপাশি আন্তর্জাতিক সম্পর্ক ও ব্যবসা বিষয়ক পড়াশোনা চালিয়ে যান। শিক্ষাজীবনে তিনি সক্রিয় ছিলেন ছাত্র রাজনীতিতে, যা তার ভবিষ্যৎ রাজনৈতিক নেতৃত্ব ও সংগঠনিক দক্ষতার ভিত্তি গড়ে দেয়।"
    },
    {
      "id": 2,
      "name": "যুব রাজনীতিতে অবদান",
      "description": "তারেক রহমান যুব ও তরুণদের সংগঠনে নতুন উদ্যম এবং নেতৃত্বের দৃষ্টান্ত স্থাপন করেছেন। তিনি (বিএনপি)-র যুব আন্দোলনকে সংগঠিত ও সক্রিয় করে তুলেছেন, তরুণ নেতাদের প্রশিক্ষণ ও নেতৃত্বে অংশগ্রহণের সুযোগ দিয়েছেন। তার প্রচেষ্টা ও দৃষ্টিভঙ্গি দেশের রাজনীতিতে যুব শক্তিকে শক্তিশালী এবং ভবিষ্যতের নেতৃত্ব গঠনে গুরুত্বপূর্ণ ভূমিকা রেখেছে।"
    },
    {
      "id": 3,
      "name": "একজন সফল উদ্যোক্তা",
      "description": "তারেক রহমান শুধুমাত্র রাজনীতিতেই নয়, তিনি একজন দক্ষ উদ্যোক্তা হিসেবেও পরিচিত। পরিকল্পনা, নেতৃত্ব ও সংহত দক্ষতার মাধ্যমে তিনি বিভিন্ন উদ্যোগ সফলভাবে পরিচালনা করেছেন এবং তরুণ প্রজন্মকে উদ্ভাবনী চিন্তা ও উদ্যোগের জন্য অনুপ্রাণিত করেছেন।"
    },
    {
      "id": 4,
      "name": "সমাজসেবায় নিবেদিত প্রাণ",
      "description": "তারেক রহমান সমাজসেবায় সর্বদা সক্রিয় ছিলেন। দরিদ্র ও সুবিধাবঞ্চিত মানুষদের সহায়তা, দীর্ঘমেয়াদি ত্রাণ কার্যক্রম, শিক্ষা-স্বাস্থ্য উদ্যোগ এবং দুর্যোগপ্রবণ এলাকায় সহায়তা প্রদানের মাধ্যমে তিনি জনগণের কল্যাণে গুরুত্বপূর্ণ অবদান রেখেছেন।"
    }
  ]


const contributionIcon = {
  "শিক্ষা ও ছাত্র রাজনীতি": FaUserGraduate,
  "যুব রাজনীতিতে অবদান": FaUsers,
  "একজন সফল উদ্যোক্তা": FaBriefcase,
  "সমাজসেবায় নিবেদিত প্রাণ": FaHandsHelping,
};

const BiographySection = () => {
//  const [contribution, setContribution] = useState([]);

 /* useEffect(() => {
    let isMounted = true;

    async function loadBiography() {
      try {
        const bio = await getBioData();
        console.log(bio);
        if (!bio || !isMounted) return;

        setContribution(
          Array.isArray(bio.contribution) ? bio.contribution : []
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
  

const uiContribution = contribution.map((item) => ({
    ...item,
    icon: contributionIcon[item.name] || FaUserGraduate,
  }));
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
           তারেক রহমান
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            রাজনীতি, সমাজসেবা ও উন্নয়নের পথে এক অনবদ্য নেতৃত্বের প্রতিচ্ছবি
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {uiContribution.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition"
              >
                <div className="flex items-center mb-4">
                  <div className="text-green-700 text-2xl mr-3">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
