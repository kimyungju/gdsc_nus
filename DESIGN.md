# DG NUS team directory

## 1. Atmosphere and identity

Preserve the existing bright DG website: white page, pale slate sections, green EXCO heading and blue selected controls. This contract codifies the existing MemberCard, Avatar, SiteHeader and Footer system for the requested directory alignment change. Visitors should be able to scan names and roles without horizontal scrolling. The user's screenshot illustrates the defect, not a pixel target to reproduce.

## 2. Color

Use the installed Tailwind palette: white page/cards; slate-100 sections; slate-200 borders and inactive tabs; slate-300 avatar borders; slate-900 primary text; slate-600 secondary text; slate-500 social icons; blue-200 active subteams; blue-600 interactive hover/focus; green-600 EXCO heading. Existing main-toggle blue is #6A8DFF. No new palette is required.

## 3. Typography

Keep the site's system sans stack. Page title text-4xl/bold; section heading text-2xl/semibold; member names text-sm/leading-5 on mobile and text-base/leading-6 from sm; role text-sm/leading-5; controls retain their existing sizes. Names wrap in full, with balanced lines and word breaking only when needed. No truncation, line clamp or person-specific font size.

## 4. Spacing and layout

Keep max-w-6xl and page px-4/py-16. Sections use p-4 then sm:p-8. Both member grids use two columns, three from sm (640px). From lg (1024px), EXCO uses five columns and team groups use four. Grid gap-3 then sm:gap-5; cards p-3 then sm:p-4. Each card spans four content-sized rows with a row subgrid and zero internal row gap: photo, name, role, social footer. This aligns content within each visual row without imposing the tallest name on the entire team. Avatar size-16 then sm:size-20. Names use mt-2, roles and footer mt-1, with no reserved text lines. Social footer keeps min-h-11 regardless of link availability. Full text expands naturally instead of clipping.

## 5. Reusable primitives and states

- MemberCard: one real article for EXCO and every team; Avatar, name, role and reserved social footer. Every card stretches to the grid row height. Empty social footer has no dummy icon or keyboard stop. Portrait omission uses the existing accessible initial Avatar.
- Member grids: use MemberCard directly with stable person/team keys; no fixed-width scroll wrappers. All real roster entries remain visible.
- Team and subteam buttons: retain existing controls, expose selection using aria-pressed, and provide visible keyboard focus. Switching teams preserves the existing selected subgroup behavior.
- Social links: 44px hit target, accessible name, visible focus, hover color, new-tab rel protection. Card backgrounds have no decorative hover animation.
- Existing page provides the state harness: Technology covers missing links and reordered leads; Children's Society/Mental ACT/Edible Garden City cover long names and missing portraits. Verify each at mobile, tablet and desktop widths.

## 6. Motion

Keep existing control transitions. Social links only transition color with reduced-motion disabling transitions. No entrance, layout or decorative card animation is introduced.

## 7. Depth

Retain rounded-2xl sections with subtle border/shadow-sm. Cards use rounded-xl, a slate-200 border and shadow-sm. Portraits remain circular. Keep the site header and footer patterns.

## 8. Accessibility and verification

Primary personas: a visitor scanning the full team on desktop, a phone user reading long names, and a keyboard user opening professional profiles. Verify all 12 group selections at 375, 768 and 1280px, uniform card heights and role/footer offsets within each visual row, full text visibility, no page overflow, 128 correct image assets/four original avatar omissions, Kim Yungju before Glory in Technology, and Partnerships Heads Anton Ang Jia Jun and Jihoon Han before Associates. This change preserves the reviewed roster and profile URLs. Existing unrelated full-repo lint issue in Hack4GoodPage remains outside this scoped change; changed-file lint and production build are required. No new accessibility debt is accepted.
