'use client';
import { Menu, X, ShoppingBag, Heart, Search, User, ArrowRight, Star, ChevronLeft, ChevronRight, Bell, Moon, Sun } from 'lucide-react';

type P = { size?: number; cls?: string; className?: string };

const c = (cls?: string, className?: string) => [cls, className].filter(Boolean).join(' ');

export const MenuIcon = ({ size = 18, cls = '', className = '' }: P) => <Menu size={size} className={c(cls, className)} />;
export const CloseIcon = ({ size = 18, cls = '', className = '' }: P) => <X size={size} className={c(cls, className)} />;
export const BagIcon = ({ size = 18, cls = '', className = '' }: P) => <ShoppingBag size={size} className={c(cls, className)} />;
export const HeartIcon = ({ size = 18, cls = '', className = '' }: P) => <Heart size={size} className={c(cls, className)} />;
export const SearchIcon = ({ size = 18, cls = '', className = '' }: P) => <Search size={size} className={c(cls, className)} />;
export const UserIcon = ({ size = 18, cls = '', className = '' }: P) => <User size={size} className={c(cls, className)} />;
export const ArrowIcon = ({ size = 16, cls = '', className = '' }: P) => <ArrowRight size={size} className={c(cls, className)} />;
export const StarIcon = ({ cls = '', className = '', size = 14 }: P) => <Star size={size} className={c(cls, className)} fill="currentColor" />;
export const ChevronLeftIcon = ({ size = 18, cls = '', className = '' }: P) => <ChevronLeft size={size} className={c(cls, className)} />;
export const ChevronRightIcon = ({ size = 18, cls = '', className = '' }: P) => <ChevronRight size={size} className={c(cls, className)} />;
export const BellIcon = ({ size = 18, cls = '', className = '' }: P) => <Bell size={size} className={c(cls, className)} />;
export const MoonIcon = ({ size = 18, cls = '', className = '' }: P) => <Moon size={size} className={c(cls, className)} />;
export const SunIcon = ({ size = 18, cls = '', className = '' }: P) => <Sun size={size} className={c(cls, className)} />;
