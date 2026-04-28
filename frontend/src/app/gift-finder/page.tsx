'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, Volume2, Target, Store, Heart, Zap, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GiftFinderQuestionnaire } from '@/components/gift-finder-questionnaire';
import { RecommendationsDisplay } from '@/components/gift-finder-recommendations';
import { useGiftFinder } from '@/lib/hooks/useGiftFinder';
import { cn } from "@/lib/utils";

export default function GiftFinderPage() {
  const [stage, setStage] = useState<'intro' | 'questionnaire' | 'recommendations'>('intro');
  const { getRecommendations, loading, recommendations } = useGiftFinder();

  const handleStartQuiz = () => {
    setStage('questionnaire');
  };

  const handleSubmitQuestionnaire = async (formData: any) => {
    try {
      await getRecommendations(formData);
      setStage('recommendations');
    } catch (error) {
      console.error('Error getting recommendations:', error);
      alert('Failed to get recommendations. Please try again.');
    }
  };

  const handleNewSearch = () => {
    setStage('questionnaire');
  };

  if (stage === 'intro') {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
        {/* ── HERO SECTION ── */}
        <section className="relative w-full py-20 md:py-32 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-200/40 dark:bg-violet-900/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-200/40 dark:bg-fuchsia-900/20 rounded-full blur-[120px] animate-pulse delay-700" />
            <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-[80px]" />
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs font-bold px-4 py-2 rounded-full mb-8 border border-violet-200 dark:border-violet-700 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="h-4 w-4" />
              Meet Your Personal Gift Advisor
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Find the Perfect Gift <br />
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                in Seconds
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Answer 5 quick questions and our AI will handpick 3 unique gifts from local Indian businesses tailored to your budget and recipient.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Button
                onClick={handleStartQuiz}
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-0 shadow-2xl shadow-violet-200 dark:shadow-violet-900/50 px-10 py-7 rounded-2xl text-lg font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 group"
              >
                <Sparkles className="h-6 w-6" />
                Start AI Quiz
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold transition-colors">
                <Volume2 className="h-5 w-5" />
                How it works
              </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
              {[
                { 
                  icon: <Target className="h-8 w-8 text-violet-500" />, 
                  title: "Hyper-Personalized", 
                  desc: "We analyze recipient personality, occasion, and your budget for the perfect match.",
                  emoji: "🎯"
                },
                { 
                  icon: <Store className="h-8 w-8 text-fuchsia-500" />, 
                  title: "Support Local", 
                  desc: "Every gift is sourced from verified Indian artisans and small businesses.",
                  emoji: "🏪"
                },
                { 
                  icon: <ShieldCheck className="h-8 w-8 text-pink-500" />, 
                  title: "Smart Budgeting", 
                  desc: "Never overspend. Get the best possible gifts within your specified price range.",
                  emoji: "💰"
                }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className="group bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left relative overflow-hidden"
                >
                  {/* Glass Background Icon */}
                  <div className="absolute -right-4 -bottom-4 text-7xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                    {feature.emoji}
                  </div>
                  
                  <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Trust Footer */}
            <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                <span className="font-bold text-sm">Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span className="font-bold text-sm">Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <span className="font-bold text-sm">10k+ Happy Givers</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (stage === 'questionnaire') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Find Your Perfect Gift 🎁
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Answer these questions and we'll recommend thoughtful gifts within your budget
            </p>
          </div>

          {/* Questionnaire Container */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl p-6 md:p-10 relative overflow-hidden">
             {/* Decorative blob inside */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-3xl" />
             
             <GiftFinderQuestionnaire
                onSubmit={handleSubmitQuestionnaire}
                loading={loading}
              />
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'recommendations' && recommendations) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              ✨ Recommendations Ready
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your Perfect Gifts Await
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Based on your answers, we think these will be a hit!</p>
          </div>

          {/* Recommendations Display */}
          <RecommendationsDisplay
            recommendations={recommendations.recommendations}
            message={recommendations.message}
            followUp={recommendations.follow_up}
            onNewSearch={handleNewSearch}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400 font-medium">Brewing recommendations...</p>
      </div>
    </div>
  );
}
