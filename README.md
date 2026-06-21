# CampSpark

CampSpark is a modern social experience built with Next.js, Supabase, and Gemini AI. It combines a social feed, messaging, and a cozy AI companion called Marshmallow. The app also supports local RAG ingestion via a Python FastAPI service for richer personalized AI responses.

## Features

- Authentication and profile handling with Supabase
- Protected routes enforced through middleware
- Social feed with posts, likes, saved items, and notifications
- Direct messaging support
- AI assistant endpoint powered by Google Gemini
- Vector search / RAG context for enhanced AI responses
- Local RAG ingestion service using FastAPI, Chroma, and Gemini embeddings
- Password update flow for email/password users

## Tech Stack

- `next` 16.2.4
- `react` 19.2.4
- `typescript`
- `tailwindcss` 4
- `@supabase/supabase-js` and `@supabase/ssr`
- `@google/generative-ai`
- FastAPI + LangChain + Chroma for local RAG service

## Repository Structure

- `src/app` - Next.js App Router pages and layouts
- `src/app/api` - API route handlers
- `src/utils/supabase` - Supabase server-side client utilities
- `src/proxy.ts` - Middleware for session/profile enforcement
- `package.json` - project dependencies and scripts