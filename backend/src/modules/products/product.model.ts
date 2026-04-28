import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  seller: string;
  sellerId: string;
  tags: string[];
  ageGroup?: string;
  occasion?: string[];
  personality?: string[];
  budget?: {
    min: number;
    max: number;
  };
  image?: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      index: true,
    },
    category: {
      type: String,
      required: true,
      index: true,
    },
    seller: {
      type: String,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    tags: [String],
    ageGroup: String,
    occasion: [String],
    personality: [String],
    budget: {
      min: Number,
      max: Number,
    },
    image: String,
    rating: {
      type: Number,
      default: 4.5,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model<IProduct>('Product', productSchema);
