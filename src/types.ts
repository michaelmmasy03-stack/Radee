export type Category = 'Cold Pressed' | 'Smoothies' | 'Wellness Shots' | 'Protein Shakes';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image?: string;
  benefits?: string[];
  isSpecial?: boolean;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  role: 'admin' | 'customer';
  loyaltyPoints: number;
  createdAt: any;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  type: 'info' | 'urgent' | 'event';
  createdAt: any;
  eventDate?: any;
}

export interface SpecialEvent {
  id: string;
  title: string;
  description: string;
  date: any;
  location: string;
  authorId: string;
  createdAt: any;
}
