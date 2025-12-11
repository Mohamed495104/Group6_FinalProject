"use client";

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

// Member 2: Explore Page Implementation
// Created by: Greeshma Prasad
// This component provides category-based exploration with search and filter functionality

// Static data for categories - using theme colors
const categories = [
  {
    id: 'food',
    name: 'Food & Restaurants',
    icon: Restaurant,
    description: 'Discover the best dining experiences',
    color: '#FF7043', // Secondary color
    count: 150,
    subcategories: ['Fine Dining', 'Casual Eats', 'Street Food', 'Cafes']
  },
  {
    id: 'parks',
    name: 'Parks & Nature',
    icon: Park,
    description: 'Explore green spaces and outdoor areas',
    color: '#4ECDC4',
    count: 85,
    subcategories: ['City Parks', 'Nature Trails', 'Beaches', 'Gardens']
  },
  {
    id: 'culture',
    name: 'Arts & Culture',
    icon: Museum,
    description: 'Museums, galleries, and cultural sites',
    color: '#9B59B6',
    count: 120,
    subcategories: ['Museums', 'Art Galleries', 'Theaters', 'Historical Sites']
  },
  {
    id: 'nightlife',
    name: 'Nightlife',
    icon: Nightlife,
    description: 'Bars, clubs, and evening entertainment',
    color: '#F39C12',
    count: 95,
    subcategories: ['Bars', 'Clubs', 'Live Music', 'Lounges']
  },
  {
    id: 'shopping',
    name: 'Shopping',
    icon: ShoppingBag,
    description: 'Malls, boutiques, and markets',
    color: '#E74C3C',
    count: 110,
    subcategories: ['Shopping Malls', 'Boutiques', 'Markets', 'Specialty Stores']
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: LocalActivity,
    description: 'Movies, events, and activities',
    color: '#1A73E8', // Primary color
    count: 75,
    subcategories: ['Cinemas', 'Events', 'Gaming', 'Sports']
  },
  {
    id: 'wellness',
    name: 'Wellness & Spa',
    icon: Spa,
    description: 'Relaxation and self-care destinations',
    color: '#1ABC9C',
    count: 60,
    subcategories: ['Spas', 'Yoga Studios', 'Wellness Centers', 'Meditation']
  },
  {
    id: 'fitness',
    name: 'Fitness & Sports',
    icon: FitnessCenter,
    description: 'Gyms, sports facilities, and activities',
    color: '#E67E22',
    count: 80,
    subcategories: ['Gyms', 'Sports Centers', 'Rock Climbing', 'Swimming']
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
        backgroundColor: '#F8F9FA',
        fontFamily: 'Inter, Roboto, sans-serif'
      }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1A73E8 0%, #0d47a1 100%)',
          color: 'white',
          padding: '60px 20px 80px',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '2.2rem',
            fontWeight: 700, 
            margin: '0 0 16px',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Explore CitySphere
          </h1>
          <p style={{ 
            fontSize: '1rem',
            lineHeight: 1.6,
            opacity: 0.95, 
            maxWidth: '600px', 
            margin: '0 auto 32px',
            color: '#FFFFFF'
          }}>
            {user 
              ? `Welcome back, ${user.displayName || 'Explorer'}! Discover amazing places in your city` 
              : 'Discover amazing places, hidden gems, and unforgettable experiences'}
          </p>

          {/* Search Bar */}
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              padding: '8px 24px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
            }}>
              <Search style={{ color: '#4A4A4A', marginRight: '12px' }} />
              <input
                type="text"
                placeholder="Search categories, places, or activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem',
                  padding: '12px 0',
                  backgroundColor: 'transparent',
                  color: '#1E1E1E',
                  fontFamily: 'Inter, Roboto, sans-serif'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Close style={{ color: '#4A4A4A', fontSize: '20px' }} />
                </button>
              )}
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
          {/* Featured Section - Only show when no filters active */}
          {!searchQuery && !selectedCategory && (
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ 
                fontSize: '1.8rem',
                fontWeight: 600, 
                marginBottom: '24px',
                color: '#1E1E1E'
              }}>
                🌟 Featured This Week
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                {featuredSpots.map((spot, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '10px',
                      padding: '20px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      border: '1px solid #f0f0f0'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
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
                      borderRadius: '10px',
                      padding: '24px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      boxShadow: isSelected 
                        ? `0 8px 24px ${category.color}40`
                        : '0 2px 8px rgba(0,0,0,0.08)',
                      border: isSelected 
                        ? `2px solid ${category.color}`
                        : '2px solid transparent',
                      transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '10px',
                      backgroundColor: category.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}>
                      <Icon style={{ color: 'white', fontSize: '28px' }} />
                    </div>
                    
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 600, 
                      marginBottom: '8px',
                      color: '#1E1E1E'
                    }}>
                      {category.name}
                    </h3>
                    
                    <p style={{ 
                      color: '#4A4A4A', 
                      fontSize: '1rem', 
                      marginBottom: '12px',
                      lineHeight: 1.6
                    }}>
                      {category.description}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '12px',
                      borderTop: '1px solid #f0f0f0'
                    }}>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        color: '#4A4A4A',
                        fontWeight: 500
                      }}>
                        {category.count} places
                      </span>
                      <span style={{
                        color: category.color,
                        fontWeight: 600,
                        fontSize: '0.9rem'
                      }}>
                        Explore →
                      </span>
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