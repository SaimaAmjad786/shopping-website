
"use client"
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'; // Add TypedUseSelectorHook here
import { AppDispatch } from './store'; // Adjust the path to your store
import { RootState } from './store';  // Adjust the path to your root state

// Create a typed version of useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Create a typed version of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

