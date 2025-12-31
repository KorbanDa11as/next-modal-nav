
'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useModalNav } from './useModalNav';
import dynamic from "next/dynamic"

export const Modal = dynamic(() => import('./_modal'), {
  ssr: false,
}) 
