# TODO — Consistent Section Spacing on Home Page

## Goal
Make every main section on the Home page visually distinct using the existing `--cream-strong` background shade, matching the style of the Featured Product and Customer Reviews sections.

## Plan
Apply `style={{ background: 'var(--cream-strong)' }}` to alternating sections:

1. Mission — cream (no change)
2. Chapter One — cream-strong
3. Products — cream (no change)
4. Story (Why Sattu) — cream-strong
5. Journey — cream (no change)
6. Recipes — cream-strong
7. Featured Product — cream (remove darker bg)
8. Why Choose — cream-strong
9. Customer Reviews — cream (remove darker bg)
10. FAQ — cream-strong
11. Contact — cream (no change)

## Steps
- [x] Create TODO.md
- [x] Edit Home.tsx: add cream-strong to Chapter One section
- [x] Edit Home.tsx: add cream-strong to Story section
- [x] Edit Home.tsx: add cream-strong to Recipes section
- [x] Edit Home.tsx: remove darker bg from Featured Product
- [x] Edit Home.tsx: add cream-strong to Why Choose section
- [x] Edit Home.tsx: remove darker bg from Customer Reviews
- [x] Edit Home.tsx: add cream-strong to FAQ section
- [x] Verify page renders correctly
