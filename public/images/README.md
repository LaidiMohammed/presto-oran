# Place your real boutique photo here

Save the uploaded shop photo (sewing machine on wooden table, racks in background) as:

  public/images/presto-shop.jpg

Steps:
1. Right-click the image you sent → Save as → presto-shop.jpg
2. Move it to: C:\Users\pc\Documents\COM\ENTREPRISE\31\public\images\presto-shop.jpg

The homepage now uses:
- src\lib\data.ts: SHOP.hero / atelier / cta / tailor → /images/presto-shop.jpg
- src\app\(site)\page.tsx: Hero, Atelier band, CTA + PIP all with <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

If file is missing, Next will 404 — keep the fallback URL in SHOP.fallback for emergency.
