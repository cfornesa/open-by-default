# Decisions

<!-- Load CONSTRAINTS.md and DESIGN.md at every session start. -->

## Project Profile

- **Project name:** Open Creatrweb
- **Brand parent:** Augment Humankind
- **Purpose:** Fully responsive, zero-backend interactive field guide
  to free open-source AI tools — written in the owner's voice.
- **Thesis:** A free-model-built site about free models is a closed
  loop of proof for the Augment Humankind mission.
- **Primary visitor action:** Explore and learn — filterable tool
  cards, curated guides, interactive UI elements.
- **Audience:** Newcomers to open-source AI with no prior budget
  commitment.

## Stack

- **Front-end:** HTML, CSS, JavaScript — fully static
- **Back-end:** None
- **Database:** None
- **Deployment:** Hostinger Cloud Starter — static file upload
- **CSS framework:** TBD — gallery required before selection
- **Framework AGENTS.md:** Root AGENTS.md only

## Model Stack

| Role | Model | Platform |
|---|---|---|
| Primary coding / architecture | Arcee AI Trinity Large Thinking | Kilo Code → OpenRouter |
| UI components / HTML/CSS | Google Gemma 4 26B A4B | Kilo Code → OpenRouter |
| Fast iteration / debugging | GPT 5 Nano | Kilo Code (kilo-auto/small) |
| General coding / code review | Dola Seed 2.0 Pro | Kilo Code free tier |

**Session discipline:** No multi-file autonomous runs. One component
per focused prompt. Human confirms direction at each boundary.

**OpenRouter:** $10 PAYG credit = 1,000 req/day on free models.
Disclosed one-time infrastructure cost.

## Unresolved Checkpoints Entering Phase 1

- [ ] CSS framework not selected — gallery required before styling
- [ ] URL and file structure not finalized — confirm before any pages
- [ ] JS interactivity approach not decided — gallery before implementation
- [ ] DESIGN.md color and type direction TBD — gallery at first UI session
- [ ] Personalization strategy not fully documented — see below

## Personalization Strategy

### Visual Identity
- **Color Palette**: Derived from fornesusart.com abstract work (gallery to select)
- **Typography**: Characterful fonts with personality (gallery to select)
- **Layout**: Open canvas approach reflecting abstract expressionist principles
- **Assets**: Abstract art from fornesusart.com as visual anchors

### Voice and Tone
- **Writing Style**: First-person, present tense, unguarded and reflective (as per fornesus.blog)
- **Copy Governance**: AI-generated drafts for owner editing, not replacement
- **Editorial Voice**: Direct without polish, intimate but never indulgent

### Interactive Elements
- **Scroll-triggered reveals**: Purposeful interactions carrying meaning
- **Tool filtering**: Interactive exploration of tool ecosystem
- **Dynamic layouts**: Open canvas responsiveness across viewports

## Design Decisions

### Navigation System
- **Breakpoint Structure**: Mobile (< 768px), Tablet (768px - 1024px), Desktop (> 1024px)
- **Mobile Menu**: Hamburger menu with logo on left, menu on right
- **Tablet Behavior**: Logo above navigation (as currently implemented)
- **Desktop Layout**: Logo next to navigation with proper spacing
- **Menu Interaction**: Interactive toggle, appears underneath header tag

### Content Accuracy
- **Hero Text Revision**: Updated "No API keys" claim to reflect reality
- **Open-Source Message**: Maintained philosophy while being factually accurate
- **Copy Governance**: AI-generated drafts for owner editing, maintains voice

### Design Direction
- **Visual Identity**: Bombastic, unconventional, accessible, responsive
- **Layout**: Enhanced open canvas with more asymmetric and surprising compositions
- **Color Palette**: Synthesized hybrid palette (confirmed via gallery)
- **Typography**: Inter Tight + Source Serif 4 (confirmed via gallery)
- **CSS Framework**: Pico CSS (confirmed via gallery)

## Implementation Phases

### Phase 1: Navigation System Overhaul
1. **Breakpoint Structure Implementation**
   - Mobile (< 768px): Hamburger menu with logo on left, menu on right
   - Tablet (768px - 1024px): Logo above navigation (current behavior)
   - Desktop (> 1024px): Logo next to navigation with proper spacing

2. **Hamburger Menu Implementation**
   - Interactive toggle with proper ARIA labels
   - Menu appears directly underneath header tag
   - Mobile-only behavior that disappears at tablet breakpoint
   - Smooth animations and transitions

3. **Desktop Layout Fix**
   - Proper spacing between logo and navigation
   - Flexbox layout with appropriate alignment
   - Responsive spacing that adapts to viewport size

### Phase 2: Content Accuracy Updates
1. **Hero Text Revision**
   - Update "No API keys" to accurate statement
   - Maintain open-source philosophy message
   - Preserve first-person, reflective tone from fornesus.blog

2. **Copy Governance**
   - Ensure all text maintains owner's voice
   - AI-generated drafts for owner editing
   - Direct without polish, intimate but never indulgent

### Phase 3: Bombastic Design Implementation
1. **Typography Enhancement**
   - More expressive heading styles
   - Creative text sizing and spacing
   - Dynamic typography that responds to scroll

2. **Color and Visual Drama**
   - Enhanced use of the synthesized color palette
   - Bold color contrasts and unexpected combinations
   - Creative use of whitespace and negative space

3. **Layout Innovation**
   - More asymmetric and surprising compositions
   - Creative grid systems that break conventions
   - Dynamic layout changes based on user interaction

4. **Interactive Elements**
   - Scroll-triggered reveals with purpose
   - Interactive tool cards with creative behaviors
   - Purposeful motion that carries meaning

### Phase 4: Open Canvas Enhancement
1. **Creative Grid Systems**
   - More expressive grid layouts
   - Asymmetric card arrangements
   - Dynamic grid that adapts creatively

2. **Visual Hierarchy Innovation**
   - Unexpected visual weight distribution
   - Creative use of scale and proportion
   - Expressive spacing that guides attention

### Phase 5: Experimental Design Implementation
1. **Hamburger Menu Enhancement**
   - Gradient backgrounds with bold borders
   - Highly visible interactive states
   - Proper mobile layout with logo left, menu right
   - WCAG AA compliant with full accessibility

2. **Experimental Colorful Design**
   - Mixed border styles: solid, dashed, double
   - Gradient backgrounds that maintain readability
   - Enhanced shadows and text effects
   - Gradient text for headings with background clip

3. **Mobile Header Layout Fix**
   - Proper positioning with enhanced styling
   - Experimental gradient backgrounds on mobile
   - Bold borders and visual hierarchy
   - Touch targets meet minimum size requirements

## Completed Decisions 2026-04-18

### Hamburger Menu Visibility Fix
- **Issue**: Menu was not visible on mobile due to display: none default
- **Resolution**: Changed to mobile-first approach - display: block by default, hidden on desktop
- **Implementation**: Added explicit display rules at 768px and 1024px breakpoints
- **Status**: ✅ Implemented and verified

### Experimental Design Implementation
- **Tri-color scheme enhanced** with gradient backgrounds and mixed borders
- **Mixed border styles** implemented: double left borders, dashed right accents
- **Gradient backgrounds** applied to navigation, cards, and headers
- **Gradient text effects** added for h1 headings with background clip
- **Mobile header fully redesigned** with gradient background and bold borders
- **Status**: ✅ Implemented and verified

## Completed Decisions 2026-04-18

### Articles Section Implementation
- **New section added** between hero and tools with two articles
- **Creative border styling**: 4px solid primary border with gradient top/bottom accents
- **Mobile behavior**: Horizontal scroll with scroll-snap instead of stacked layout
- **Content variation**: Multi-paragraph long article + single paragraph short article
- **Icon integration**: Icons preceding each article header
- **Replicability**: Simple class-based structure for easy duplication
- **Status**: ✅ Implemented and verified

## Completed Decisions 2026-04-21

### Tool Header Animation Sync
- **Goal**: Make tool-header background animate in sync with tool-card animated frame
- **Implementation**: Added cardFrameAnim animation (30s) to .tool-header with gradient background
- **Status**: ✅ Implemented

### Carousel/Article Header Animation Issues
- **Issue**: Headers for carousel items and article items were not contained within animated black background
- **Investigated**: Multiple potential causes (padding, z-index, perspective transforms, layering)
- **Attempts**:
  1. Removed padding from carousel-item and article-item containers
  2. Changed animation durations to match (35s→30s, 40s→30s)
  3. Removed perspective transforms from carousel and article items
  4. Matched background colors to tool-cards (rgba(15,15,25,0.4))
  5. Added explicit z-index to card-background elements
- **Final Resolution**: Removed gradient backgrounds entirely from carousel-header and article-header
- **Rationale**: Text remains visible against dark animated frame; avoids visual mismatch from uneven animations
- **Status**: ✅ Implemented

### Geometric Shapes Visibility Fix
- **Issue**: Shapes appeared in front of all content despite negative z-index
- **Root Cause**: CSS stacking context - regular content creates implicit z-index 0, sitting above negative z-index elements
- **Solution**:
  - Set body::before (gradient) to z-index: -1000
  - Set body::after (dark bg) to z-index: -1001
  - Set shapes to z-index: -100
  - Set content containers (header, main, footer) to z-index: 10
- **Added**: randomDrift animation to shapes - they now drift across screen while rotating/pulsing
- **Status**: ✅ Implemented

### Tool Header Background Removal
- **Issue**: Tool header had visible background blocking tool card animation
- **Resolution**: Removed background from .tool-header entirely
- **Status**: ✅ Implemented

### Carousel Icon Hover Effect
- **Added**: rotate(15deg) scale(1.1) on carousel-item:hover .carousel-icon
- **Matches**: Tool card and article item hover behavior
- **Status**: ✅ Implemented

### Card Background Randomization
- **Added**: Random opacity (0.25-0.75) per card on page load
- **Added**: Random muted RGB colors (max value 100) per card
- **Status**: ✅ Implemented

### iOS/Safari Animation Compatibility
- **Approach**: Unified JavaScript animations (Option A)
- **Reason**: CSS animations had cross-browser inconsistencies; JS provides consistent behavior
- **Scope**: All animations now in js/main.js - geometric shapes, card backgrounds, title pulse
- **Color Ranges Restored**: RGB 0-100, opacity 0.15-0.6 per card
- **Border-Radius**: Unique morphing animation per card (randomized phase, speed, variation)
- **Status**: ✅ Implemented