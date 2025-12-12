"use client";

/**
 * Explore Page - Category-Based City Discovery
 * Public page accessible to all users
 * 
 * Features:
 * - Browse 8 different categories (Food, Parks, Culture, Nightlife, Shopping, etc.)
 * - Advanced search functionality with real-time filtering
 * - Sort options (Popular, Rating, Newest, Distance)
 * - Featured spots showcase
 * - Responsive card-based layout with hover effects
 * - Filter panel with category and sort controls
 * 
 * Created by: Greeshma Prasad
 */

import React, { useState, useMemo } from 'react';
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useAuth } from "@/context/AuthContext";
import { 
  Search, 
  Restaurant, 
  Park, 
  Museum, 
  Nightlife, 
  ShoppingBag,
  LocalActivity,
  Spa,
  FitnessCenter,
  FilterList,
  Star,
  Close
} from '@mui/icons-material';

/**
 * Category Data Configuration
 * Each category includes icon, description, color theme, and place count
 */
const categories = [
  {
    id: 'food',
    name: 'Food & Restaurants',
    icon: Restaurant,
    description: 'Discover the best dining experiences',
    color: '#FF7043',
    count: 150,
    subcategories: ['Fine Dining', 'Casual Eats', 'Street Food', 'Cafes'],
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=200&fit=crop&q=80'
  },
  {
    id: 'parks',
    name: 'Parks & Nature',
    icon: Park,
    description: 'Explore green spaces and outdoor areas',
    color: '#4ECDC4',
    count: 85,
    subcategories: ['City Parks', 'Nature Trails', 'Beaches', 'Gardens'],
    bannerImage: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=200&fit=crop&q=80'
  },
  {
    id: 'culture',
    name: 'Arts & Culture',
    icon: Museum,
    description: 'Museums, galleries, and cultural sites',
    color: '#9B59B6',
    count: 120,
    subcategories: ['Museums', 'Art Galleries', 'Theaters', 'Historical Sites'],
    bannerImage: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=200&fit=crop&q=80'
  },
  {
    id: 'nightlife',
    name: 'Nightlife',
    icon: Nightlife,
    description: 'Bars, clubs, and evening entertainment',
    color: '#F39C12',
    count: 95,
    subcategories: ['Bars', 'Clubs', 'Live Music', 'Lounges'],
    bannerImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=200&fit=crop&q=80'
  },
  {
    id: 'shopping',
    name: 'Shopping',
    icon: ShoppingBag,
    description: 'Malls, boutiques, and markets',
    color: '#E74C3C',
    count: 110,
    subcategories: ['Shopping Malls', 'Boutiques', 'Markets', 'Specialty Stores'],
    bannerImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=200&fit=crop&q=80'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: LocalActivity,
    description: 'Movies, events, and activities',
    color: '#1A73E8',
    count: 75,
    subcategories: ['Cinemas', 'Events', 'Gaming', 'Sports'],
    bannerImage: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&h=200&fit=crop&q=80'
  },
  {
    id: 'wellness',
    name: 'Wellness & Spa',
    icon: Spa,
    description: 'Relaxation and self-care destinations',
    color: '#1ABC9C',
    count: 60,
    subcategories: ['Spas', 'Yoga Studios', 'Wellness Centers', 'Meditation'],
    bannerImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=200&fit=crop&q=80'
  },
  {
    id: 'fitness',
    name: 'Fitness & Sports',
    icon: FitnessCenter,
    description: 'Gyms, sports facilities, and activities',
    color: '#E67E22',
    count: 80,
    subcategories: ['Gyms', 'Sports Centers', 'Rock Climbing', 'Swimming'],
    bannerImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=200&fit=crop&q=80'
  }
];

// Featured spots data
const featuredSpots = [
  { name: 'The Great Market', category: 'food', rating: 4.8, reviews: 1240 },
  { name: 'Riverside Park', category: 'parks', rating: 4.9, reviews: 850 },
  { name: 'City Museum', category: 'culture', rating: 4.7, reviews: 2100 },
  { name: 'Skyline Lounge', category: 'nightlife', rating: 4.6, reviews: 620 }
];

export default function ExplorePage() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  // Filter categories based on search query AND selected category
  const filteredCategories = useMemo(() => {
    let result = categories;

    // Apply search filter
    if (searchQuery.trim()) {
      result = result.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter - show only selected category
    if (selectedCategory) {
      result = result.filter(category => category.id === selectedCategory.id);
    }

    // Apply sorting
    if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.count - a.count);
    } else if (sortBy === 'newest') {
      result = [...result].reverse();
    } else if (sortBy === 'distance') {
      result = [...result].sort((a, b) => a.count - b.count);
    }
    // 'popular' is the default order

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleCategoryClick = (category: typeof categories[0]) => {
    // Toggle category selection
    if (selectedCategory?.id === category.id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSortBy('popular');
    // Don't close the filter panel when clearing filters
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#F5F7FA',
        fontFamily: 'Inter, Roboto, sans-serif'
      }}>
        {/* Enhanced Hero Section with Premium Styling */}
        <div style={{
          background: 'linear-gradient(135deg, #1A73E8 0%, #0d47a1 50%, #1565C0 100%)',
          color: 'white',
          padding: '80px 20px 100px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative background elements */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            filter: 'blur(60px)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            filter: 'blur(80px)'
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{ 
              fontSize: '3rem',
              fontWeight: 800, 
              margin: '0 0 20px',
              textShadow: '0 4px 12px rgba(0,0,0,0.2)',
              letterSpacing: '-0.02em'
            }}>
              Explore CitySphere
            </h1>
            <p style={{ 
              fontSize: '1.15rem',
              lineHeight: 1.7,
              opacity: 0.97, 
              maxWidth: '700px', 
              margin: '0 auto 40px',
              color: '#FFFFFF',
              fontWeight: 400
            }}>
              {user 
                ? `Welcome back, ${user.displayName || 'Explorer'}! Discover amazing places in your city` 
                : 'Discover amazing places, hidden gems, and unforgettable experiences'}
            </p>

            {/* Enhanced Search Bar with Premium Styling */}
            <div style={{
              maxWidth: '750px',
              margin: '0 auto',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '12px 28px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <Search style={{ color: '#1A73E8', marginRight: '16px', fontSize: '24px' }} />
                <input
                  type="text"
                  placeholder="Search categories, places, or activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                      flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: '1.05rem',
                    padding: '14px 0',
                    backgroundColor: 'transparent',
                    color: '#1E1E1E',
                    fontFamily: 'Inter, Roboto, sans-serif',
                    fontWeight: 500
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: '50%',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <Close style={{ color: '#666', fontSize: '22px' }} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #e0e0e0',
          padding: '16px 20px',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: showFilters ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    backgroundColor: showFilters ? '#1A73E8' : '#FFFFFF',
                    color: showFilters ? '#FFFFFF' : '#1E1E1E',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    fontFamily: 'Inter, Roboto, sans-serif',
                    textTransform: 'none'
                  }}
                >
                  <FilterList fontSize="small" />
                  Filters {showFilters ? '▼' : '▶'}
                </button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    padding: '10px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    backgroundColor: '#FFFFFF',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    outline: 'none',
                    fontFamily: 'Inter, Roboto, sans-serif',
                    color: '#1E1E1E'
                  }}
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                  <option value="distance">Nearest</option>
                </select>

                {/* Active Filter Indicators */}
                {selectedCategory && (
                  <div style={{
                    padding: '8px 16px',
                    backgroundColor: selectedCategory.color,
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    {selectedCategory.name}
                    <Close 
                      style={{ fontSize: '18px', cursor: 'pointer' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(null);
                      }}
                    />
                  </div>
                )}
              </div>

              <button
                onClick={clearFilters}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '10px',
                  backgroundColor: (selectedCategory || searchQuery || sortBy !== 'popular') ? '#FF7043' : '#F8F9FA',
                  color: (selectedCategory || searchQuery || sortBy !== 'popular') ? '#FFFFFF' : '#4A4A4A',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: 'Inter, Roboto, sans-serif',
                  textTransform: 'none',
                  opacity: (selectedCategory || searchQuery || sortBy !== 'popular') ? 1 : 0.6
                }}
              >
                Clear All Filters
              </button>
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div style={{
                backgroundColor: '#F8F9FA',
                borderRadius: '10px',
                padding: '20px',
                marginTop: '20px',
                animation: 'slideDown 0.3s ease-out'
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: 600, 
                    color: '#1E1E1E',
                    marginBottom: '12px' 
                  }}>
                    Filter by Category
                  </h4>
                  <div style={{ 
                    display: 'flex', 
                    gap: '8px', 
                    flexWrap: 'wrap' 
                  }}>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat)}
                        style={{
                          padding: '8px 16px',
                          border: selectedCategory?.id === cat.id ? `2px solid ${cat.color}` : '1px solid #ddd',
                          borderRadius: '10px',
                          backgroundColor: selectedCategory?.id === cat.id ? cat.color : '#FFFFFF',
                          color: selectedCategory?.id === cat.id ? '#FFFFFF' : '#1E1E1E',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          fontWeight: selectedCategory?.id === cat.id ? 600 : 500,
                          fontFamily: 'Inter, Roboto, sans-serif',
                          textTransform: 'none',
                          transition: 'all 0.2s'
                        }}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: 600, 
                    color: '#1E1E1E',
                    marginBottom: '12px' 
                  }}>
                    Sort By
                  </h4>
                  <div style={{ 
                    display: 'flex', 
                    gap: '8px', 
                    flexWrap: 'wrap' 
                  }}>
                    {[
                      { value: 'popular', label: 'Most Popular' },
                      { value: 'rating', label: 'Highest Rated' },
                      { value: 'newest', label: 'Newest' },
                      { value: 'distance', label: 'Nearest' }
                    ].map((sort) => (
                      <button
                        key={sort.value}
                        onClick={() => setSortBy(sort.value)}
                        style={{
                          padding: '8px 16px',
                          border: sortBy === sort.value ? '2px solid #1A73E8' : '1px solid #ddd',
                          borderRadius: '10px',
                          backgroundColor: sortBy === sort.value ? '#1A73E8' : '#FFFFFF',
                          color: sortBy === sort.value ? '#FFFFFF' : '#1E1E1E',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          fontWeight: sortBy === sort.value ? 600 : 500,
                          fontFamily: 'Inter, Roboto, sans-serif',
                          textTransform: 'none',
                          transition: 'all 0.2s'
                        }}
                      >
                        {sort.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: 600, 
                    color: '#1E1E1E',
                    marginBottom: '12px' 
                  }}>
                    Quick Filters
                  </h4>
                  <div style={{ 
                    display: 'flex', 
                    gap: '8px', 
                    flexWrap: 'wrap' 
                  }}>
                    {['Open Now', 'Top Rated', 'New', 'Popular'].map((filter) => (
                      <button
                        key={filter}
                        style={{
                          padding: '8px 16px',
                          border: '1px solid #ddd',
                          borderRadius: '10px',
                          backgroundColor: '#FFFFFF',
                          color: '#1E1E1E',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          fontFamily: 'Inter, Roboto, sans-serif',
                          textTransform: 'none',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#1A73E8';
                          e.currentTarget.style.color = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#FFFFFF';
                          e.currentTarget.style.color = '#1E1E1E';
                        }}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px'
        }}>
          {/* Enhanced Featured Section - Only show when no filters active */}
          {!searchQuery && !selectedCategory && (
            <div style={{ marginBottom: '56px' }}>
              <h2 style={{ 
                fontSize: '2rem',
                fontWeight: 700, 
                marginBottom: '28px',
                color: '#1E1E1E',
                letterSpacing: '-0.02em'
              }}>
                🌟 Featured This Week
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px'
              }}>
                {featuredSpots.map((spot, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '24px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                      border: '2px solid #f8f8f8'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
                      e.currentTarget.style.borderColor = '#1A73E8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                      e.currentTarget.style.borderColor = '#f8f8f8';
                    }}
                  >
                    <h3 style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: 600, 
                      marginBottom: '8px',
                      color: '#1E1E1E'
                    }}>
                      {spot.name}
                    </h3>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      marginBottom: '8px'
                    }}>
                      <Star style={{ color: '#FF7043', fontSize: '18px' }} />
                      <span style={{ fontWeight: 600, color: '#1E1E1E' }}>{spot.rating}</span>
                      <span style={{ color: '#4A4A4A', fontSize: '0.9rem' }}>
                        ({spot.reviews} reviews)
                      </span>
                    </div>
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      backgroundColor: '#F8F9FA',
                      borderRadius: '10px',
                      fontSize: '0.85rem',
                      color: '#4A4A4A',
                      textTransform: 'capitalize'
                    }}>
                      {spot.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Categories Section */}
          <div>
            <h2 style={{ 
              fontSize: '1.8rem', 
              fontWeight: 600, 
              marginBottom: '24px',
              color: '#1E1E1E'
            }}>
              {searchQuery ? `Results for "${searchQuery}"` : 
               selectedCategory ? selectedCategory.name : 'Browse Categories'}
            </h2>

            {/* Selected Category Details */}
            {selectedCategory && (
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                padding: '24px',
                marginBottom: '32px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '10px',
                    backgroundColor: selectedCategory.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <selectedCategory.icon style={{ color: 'white', fontSize: '32px' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '4px', color: '#1E1E1E' }}>
                      {selectedCategory.name}
                    </h3>
                    <p style={{ color: '#4A4A4A', margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>
                      {selectedCategory.description}
                    </p>
                  </div>
                </div>
                <div style={{ 
                  display: 'flex', 
                  gap: '12px', 
                  flexWrap: 'wrap',
                  marginTop: '16px'
                }}>
                  {selectedCategory.subcategories.map((sub, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#F8F9FA',
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        color: '#4A4A4A',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        fontWeight: 500
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = selectedCategory.color;
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#F8F9FA';
                        e.currentTarget.style.color = '#4A4A4A';
                      }}
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Category Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {filteredCategories.map((category) => {
                const Icon = category.icon;
                const isSelected = selectedCategory?.id === category.id;
                
                return (
                  <div
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                      boxShadow: isSelected 
                        ? `0 12px 32px ${category.color}40`
                        : '0 4px 12px rgba(0,0,0,0.08)',
                      border: isSelected 
                        ? `3px solid ${category.color}`
                        : '3px solid transparent',
                      transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                        e.currentTarget.style.transform = 'translateY(-8px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    {/* Banner Image with Gradient Overlay */}
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      height: '140px',
                      backgroundImage: `url(${category.bannerImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '16px'
                    }}>
                      {/* Gradient overlay */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(to bottom, transparent 0%, ${category.color}CC 100%)`
                      }} />
                      
                      {/* Icon badge */}
                      <div style={{
                        position: 'relative',
                        zIndex: 1,
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                      }}>
                        <Icon style={{ color: category.color, fontSize: '28px' }} />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div style={{ padding: '20px' }}>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: 700, 
                        marginBottom: '8px',
                        color: '#1E1E1E',
                        letterSpacing: '-0.02em'
                      }}>
                        {category.name}
                      </h3>
                      
                      <p style={{ 
                        color: '#4A4A4A', 
                        fontSize: '0.95rem', 
                        marginBottom: '16px',
                        lineHeight: 1.6
                      }}>
                        {category.description}
                      </p>
                      
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '12px',
                        borderTop: '2px solid #f5f5f5'
                      }}>
                        <span style={{ 
                          fontSize: '0.9rem', 
                          color: '#666',
                          fontWeight: 600
                        }}>
                          {category.count} places
                        </span>
                        <span style={{
                          color: category.color,
                          fontWeight: 700,
                          fontSize: '0.9rem'
                        }}>
                          Explore →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredCategories.length === 0 && (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                color: '#4A4A4A'
              }}>
                <Search style={{ fontSize: '64px', opacity: 0.3, marginBottom: '16px' }} />
                <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  No categories found {searchQuery && `matching "${searchQuery}"`}
                </p>
                <button
                  onClick={clearFilters}
                  style={{
                    marginTop: '16px',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '10px',
                    backgroundColor: '#1A73E8',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    fontFamily: 'Inter, Roboto, sans-serif',
                    textTransform: 'none'
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </Box>
  );
}