import { useState } from 'react';

interface Recommendation {
  product_id: string;
  name: string;
  price: number;
  seller: string;
  image?: string;
  reason: string;
  highlight: string;
}

interface GiftFinderResponse {
  message: string;
  recommendations: Recommendation[];
  follow_up?: string;
}

interface GiftFinderQuestions {
  relationship: string;
  ageGroup: string;
  personality: string[];
  gender: string;
  occasion: string;
  budgetMin: number;
  budgetMax: number;
  preferences?: string[];
  customNote?: string;
}

export const useGiftFinder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<GiftFinderResponse | null>(null);

  const getRecommendations = async (preferences: GiftFinderQuestions) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/gift-finder/recommendations`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(preferences),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get recommendations');
      }

      const data: GiftFinderResponse = await response.json();
      setRecommendations(data);
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('Gift finder error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getQuestions = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/gift-finder/questions`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }

      return await response.json();
    } catch (err) {
      console.error('Error fetching questions:', err);
      throw err;
    }
  };

  return {
    getRecommendations,
    getQuestions,
    loading,
    error,
    recommendations,
    setRecommendations,
  };
};
