# TODO — Add Policy Pages & Wire Footer Links

## Goal
Create dedicated policy pages and make the Footer policy links navigate to them.

## Plan
1. Create 5 policy pages following existing breadcrumb + card design:
   - Shipping Policy → `/shipping-policy`
   - Refund Policy → `/refund-policy`
   - Privacy Policy → `/privacy-policy`
   - Terms & Conditions → `/terms-conditions`
   - FAQs → `/faqs` (using existing `FAQAccordion`)
2. Register the new routes in `src/App.tsx`
3. Update Footer policy links from `<a href="#">` to `<Link>` routes
4. Verify build

## Steps
- [x] Create TODO.md
- [x] Create src/components/PolicyLayout.tsx (shared layout for policy pages)
- [x] Create src/pages/ShippingPolicy.tsx
- [x] Create src/pages/RefundPolicy.tsx
- [x] Create src/pages/PrivacyPolicy.tsx
- [x] Create src/pages/TermsConditions.tsx
- [x] Create src/pages/FAQs.tsx
- [x] Update src/App.tsx: add 5 new routes
- [x] Update src/components/Footer.tsx: point policy links to new pages
- [ ] Run build to verify (blocked — Node.js not installed in environment)

