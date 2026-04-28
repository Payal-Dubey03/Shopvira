'use client';

import { useState } from 'react';
import { ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGiftFinder } from '@/lib/hooks/useGiftFinder';

interface QuestionnaireFormProps {
  onSubmit: (data: any) => void;
  loading?: boolean;
}

export const GiftFinderQuestionnaire = ({ onSubmit, loading = false }: QuestionnaireFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    relationship: '',
    ageGroup: '',
    personality: [] as string[],
    gender: 'any',
    occasion: '',
    budgetMin: 500,
    budgetMax: 5000,
  });

  const questions = [
    {
      id: 'relationship',
      question: 'Who are you buying this gift for?',
      type: 'select',
      options: [
        { label: '👨‍👩 Parent', value: 'parent' },
        { label: '👤 Sibling', value: 'sibling' },
        { label: '💍 Spouse', value: 'spouse' },
        { label: '👫 Friend', value: 'friend' },
        { label: '💼 Colleague', value: 'colleague' },
        { label: '🎓 Mentor', value: 'mentor' },
        { label: '👶 Child', value: 'child' },
        { label: '👴 Grandparent', value: 'grandparent' },
        { label: '❓ Other', value: 'other' },
      ],
    },
    {
      id: 'ageGroup',
      question: 'What age group are they in?',
      type: 'select',
      options: [
        { label: '🧑 Teens', value: 'teens' },
        { label: '👶 20s', value: '20s' },
        { label: '👨 30s', value: '30s' },
        { label: '👴 40s', value: '40s' },
        { label: '👴 50s', value: '50s' },
        { label: '🧓 60+', value: '60+' },
        { label: '❓ Not Sure', value: 'unknown' },
      ],
    },
    {
      id: 'personality',
      question: 'What describes their personality? (Select all that apply)',
      type: 'checkbox',
      options: [
        { label: '🎨 Creative', value: 'creative' },
        { label: '⚽ Sporty', value: 'sporty' },
        { label: '💻 Tech-Savvy', value: 'tech-savvy' },
        { label: '✨ Fashionable', value: 'fashionable' },
        { label: '🏠 Homebody', value: 'homebody' },
        { label: '🚀 Adventurous', value: 'adventurous' },
        { label: '🙏 Spiritual', value: 'spiritual' },
        { label: '🔲 Minimalist', value: 'minimalist' },
      ],
    },
    {
      id: 'gender',
      question: 'Any gender preference?',
      type: 'select',
      options: [
        { label: '👨 Male', value: 'male' },
        { label: '👩 Female', value: 'female' },
        { label: '✨ Any', value: 'any' },
      ],
    },
    {
      id: 'occasion',
      question: 'What is the occasion?',
      type: 'select',
      options: [
        { label: '🎂 Birthday', value: 'birthday' },
        { label: '💕 Anniversary', value: 'anniversary' },
        { label: '💒 Wedding', value: 'wedding' },
        { label: '🎉 Promotion', value: 'promotion' },
        { label: '🪔 Diwali', value: 'diwali' },
        { label: '🎨 Holi', value: 'holi' },
        { label: '🎀 Rakhi', value: 'rakhi' },
        { label: '🙏 Thank You', value: 'thankyou' },
        { label: '🤝 Apology', value: 'apology' },
        { label: '🎆 New Year', value: 'new-year' },
        { label: '🎊 Congratulations', value: 'congratulations' },
        { label: '🏥 Get Well', value: 'get-well' },
        { label: '✨ Other', value: 'other' },
      ],
    },
    {
      id: 'budget',
      question: 'What is your budget? (In Indian Rupees)',
      type: 'range',
      min: 100,
      max: 50000,
      step: 100,
    },
  ];

  const currentQuestion = questions[currentStep];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'budgetMin' || name === 'budgetMax') {
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(value),
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      personality: checked
        ? [...prev.personality, value]
        : prev.personality.filter(p => p !== value),
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Validate all fields are filled
      if (
        formData.relationship &&
        formData.ageGroup &&
        formData.personality.length > 0 &&
        formData.occasion
      ) {
        onSubmit(formData);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isCurrentStepValid = () => {
    switch (currentQuestion.id) {
      case 'relationship':
        return formData.relationship !== '';
      case 'ageGroup':
        return formData.ageGroup !== '';
      case 'personality':
        return formData.personality.length > 0;
      case 'gender':
        return formData.gender !== '';
      case 'occasion':
        return formData.occasion !== '';
      case 'budget':
        return formData.budgetMin > 0 && formData.budgetMax > formData.budgetMin;
      default:
        return true;
    }
  };

  const progressPercentage = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-semibold text-gray-700">
            Question {currentStep + 1} of {questions.length}
          </h2>
          <span className="text-sm font-semibold text-purple-600">{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.question}</h3>

        {/* Select Options */}
        {currentQuestion.type === 'select' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQuestion.options?.map(option => (
              <label key={option.value} className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option.value}
                  checked={formData[currentQuestion.id as keyof typeof formData] === option.value}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-purple-600 cursor-pointer"
                />
                <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        )}

        {/* Checkbox Options */}
        {currentQuestion.type === 'checkbox' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQuestion.options?.map(option => (
              <label key={option.value} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={formData.personality.includes(option.value)}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-purple-600 rounded cursor-pointer"
                />
                <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        )}

        {/* Range Slider */}
        {currentQuestion.type === 'range' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Minimum Budget: ₹{formData.budgetMin.toLocaleString()}
              </label>
              <input
                type="range"
                name="budgetMin"
                min={currentQuestion.min}
                max={currentQuestion.max}
                step={currentQuestion.step}
                value={formData.budgetMin}
                onChange={handleInputChange}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Maximum Budget: ₹{formData.budgetMax.toLocaleString()}
              </label>
              <input
                type="range"
                name="budgetMax"
                min={currentQuestion.min}
                max={currentQuestion.max}
                step={currentQuestion.step}
                value={formData.budgetMax}
                onChange={handleInputChange}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-200">
              <p className="text-sm text-gray-700">
                Budget Range: <span className="font-bold text-purple-600">₹{formData.budgetMin.toLocaleString()} - ₹{formData.budgetMax.toLocaleString()}</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-between pt-8">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 0 || loading}
          variant="outline"
          className="px-6"
        >
          ← Previous
        </Button>

        <Button
          onClick={handleNext}
          disabled={!isCurrentStepValid() || loading}
          className="px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex items-center gap-2"
        >
          {currentStep === questions.length - 1 ? (
            <>
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ChevronRight className="w-4 h-4" />}
              {loading ? 'Finding Gifts...' : 'Get Recommendations'}
            </>
          ) : (
            <>
              Next <ChevronRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
