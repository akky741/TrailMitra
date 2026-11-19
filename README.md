# Maharashtra Adventure Website — Starter

This is the first homepage build for your trekking and adventure travel platform.

## Included
- Responsive homepage for desktop and mobile
- English, Marathi and Hindi language switcher
- Adventure category cards
- Sample Maharashtra trek cards
- Search-style enquiry panel
- WhatsApp enquiry links (generic wa.me link until your business number is supplied)
- About, contact and footer sections
- SEO title and description starter

## Not connected yet
This is the **homepage / frontend phase**, not a live booking platform yet. The following require the next development phase:
- Admin, staff and trek-leader login and role permissions
- Database and trip management
- Real departure calendars and live seat inventory
- Customer accounts and booking records
- Payment gateway credentials and verified payment webhooks
- WhatsApp Business API connection
- Transactional email/SMS
- Refund processing and reports

No real payments are collected by this starter. Do not publish sample trip prices, availability or inclusions as confirmed offers.

## Run locally
1. Install Node.js 20 or later.
2. Extract this project.
3. Open a terminal in this folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open http://localhost:3000

## First customizations
- Replace `YOUR BRAND` in `app/page.tsx` with your final brand name.
- Add your official WhatsApp number in international format (India: 91XXXXXXXXXX) to the `wa.me` links.
- Replace sample images with licensed photos you own or have permission to use.
- Confirm trip dates, prices, route details, permissions, inclusions and safety information before publishing.
- Update the metadata in `app/layout.tsx`.

## Suggested next phase
Build the PostgreSQL database, secure API, role-based admin panel, departure inventory, booking workflow and payment integration. Use a payment provider's server-side verification and webhook signature checks before confirming any paid booking.

## Brand name setup
- See `BRAND-NAME-IDEAS.md` for suggested names.
- Change `brandName` in `app/brand.ts` once you choose a final name. The header/footer use this shared setting.
- Domain names are not reserved by this project. Check registrar availability and trademark conflicts before purchase.
